import conf from '@/conf/conf'
import { Account, ID, Client, Databases, OAuthProvider, Storage, Query } from 'appwrite'

const client = new Client()
client.setEndpoint(conf.appwrite_url).setProject(conf.appwrite_project_id)
export const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client);


export class AppwriteService {
  async saveuser(obj) {
    const { first_name, last_name, email, referral_source } = obj;
    try {
      await databases.createDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        ID.unique(),
        {
          First_Name: first_name,
          Last_Name: last_name,
          Email: email,
          referral_source,
        }
      );
      console.log("User data saved successfully:", email);
    } catch (error) {
      console.error("Error creating document:", error.message);
      throw new Error("Failed to save user data.");
    }
  }

  async saveAuthUser() {
    try {
      const result = await account.get();
      const [first_name, last_name = ""] = result.name.split(" ");
      const email = result.email;

      console.log("Fetched User Info:", { first_name, last_name, email });

      const userResponse = await databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        [Query.equal("Email", email)]
      );
  
      if (userResponse.documents.length > 0) {
        console.log("Email already exists. No action required.");
        return false;
      }
  
      await databases.createDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        ID.unique(),
        {
          First_Name: first_name,
          Last_Name: last_name,
          Email: email,
          referral_source: "Provider",
        }
      );
  
      console.log("User data inserted successfully.");
      return true;
    } catch (error) {
      // console.error("Error in saveAuthUser:", error.message);
      // throw new Error("Failed to save user data.");
    }
  }
  
  async getUser() {
    try {
      // await this.saveAuthUser();
      return await account.get();
    } catch (error) {
      console.error("Error fetching user account:", error.message); // Improved logging
      return null; // Return null if no user is found
    }
  }


  // crete a new record of user inside the appwrite
  async createUserAccount(obj) {
    const { first_name, last_name, email, password, referral_source } = obj
    const name = `${first_name} ${last_name}`
    try {
      // step 1.  creating the user
      await account.create(ID.unique(), email, password, name)

      // step 2. saving the docuent in the database
      await this.saveuser({
        first_name,
        last_name,
        email,
        referral_source,
      })

      // Step 3: Log the user in after successful registration
      const session = await this.login(email, password)
      // await this.sendverifyemail(email)
      // Return session details or any other information you might need
      return session
    } catch (error) {
      throw Error(error.message)
    }
  }

  // method for webinar registration
  async webinarRegistration(data) {
    const { fullname, email, phone, school, qualification, referal } = data
    try {
      // checking before saving the document
      // Check if a document with the given email exists
      let emailDocuments = await databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_webinar_collection_id,
        [Query.equal('email', email)],
      )

      // Check if a document with the given phone exists
      let phoneDocuments = await databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_webinar_collection_id,
        [Query.equal('phone', phone)],
      )

      // If any document is found for either condition, throw an error
      if (emailDocuments.total > 0 || phoneDocuments.total > 0) {
        throw new Error('User with this email or phone number already exists')
      }

      // saving in the database
      await databases.createDocument(
        conf.appwrite_database_id,
        conf.appwrite_webinar_collection_id,
        ID.unique(),
        {
          name: fullname,
          email: email,
          phone: phone,
          school: school,
          qualification: qualification,
          referal: referal,
        },
      )
    } catch (error) {
      throw new Error(error.message)
    }
  }
  // auth login as-google , linkedin
  async authLogin(provider) {
    try {
      if (![OAuthProvider.Google, OAuthProvider.Linkedin].includes(provider)) {
        throw new Error('Unsupported OAuth provider.')
      }
      await account.createOAuth2Session(
        provider,
        conf.app_url, // Success URL
        `${conf.app_url}/register`, // Failure URL
      )
    } catch (error) {
      console.error(`Error during ${provider} auth:`, error.message)
      throw new Error('OAuth login failed.')
    }
  }

  // login
  async login(email, password) {
    try {
      return await account.createEmailPasswordSession(email, password)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  // logout the user
  async logout() {
    try {
      await account.deleteSession('current')
    } catch (error) {
      // console.log("error while logout the user", error, error.message)
    }
  }

  // reset password handler
  async resetpass(userId, secret, newpass) {
    try {
      const resetpasshere = await account.updateRecovery(
        userId,
        secret,
        newpass,
        newpass,
      )
      return resetpasshere
    } catch (error) {
      throw Error('reset password failed !')
    }
  }

  async recover(email) {
    try {
      await account.createRecovery(email, `${conf.app_url}/forgotpassword`)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  // send verify email
  async sendverifyemail() {
    try {
      await account.createVerification(`${conf.app_url}/verifyemail`)
    } catch (error) {
      console.error('Error while sending verification email:', error.message)
      throw new Error('Failed to send verification email.')
    }
  }

  // verifying email
  async verifyemail(userId, secret) {
    try {
      await account.updateVerification(userId, secret)
    } catch (error) {
      console.error('Error while verifying  email:', error.message)
      throw new Error('Failed to  verify email.')
    }
  }

  async changeName(userId, newFirstName, newLastName) {
    try {
      if (!newFirstName || !newLastName) {
        throw new Error('Both first and last names are required for updating.')
      }
      const user = await account.get()
      const currentFirstName = user.First_Name
      const currentLastName = user.Last_Name
      if (
        currentFirstName === newFirstName &&
        currentLastName === newLastName
      ) {
        // return { error: "New name is the same as the current name. No update needed." };
        throw new Error(
          'New name is the same as the current name No update needed',
        )
      }
      const newName = `${newFirstName} ${newLastName}`
      await account.updateName(newName)
      await databases.updateDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        userId,
        {
          First_Name: newFirstName,
          Last_Name: newLastName,
        },
      )
      return { message: 'Name updated successfully.' }
    } catch (error) {
      console.error('Error updating name:', error.message)
      return { error: 'Failed to update name. Please try again later.' }
    }
  }

  // Get profile photo ID
  async getProfile(email) {
    try {
      const userResponse = await databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        [Query.equal("Email", email)]
      );

      if (userResponse.documents.length === 0) {
        throw new Error("User not found.");
      }
      const profilePictureId = userResponse.documents[0].profile_picture;
      if (!profilePictureId) {
        return { message: "No profile picture found.", profilePictureId: null };
      }
      return { message: "Profile picture retrieved successfully.", profilePictureId };
    } catch (error) {
      console.error("Error retrieving profile picture:", error.message);
      throw new Error("Failed to retrieve profile picture.");
    }
  }

  // profile photo uploading middlewares and End-points
  async uploadFile(file) {
    try {
      const fileId = ID.unique();
      const response = await storage.createFile(
        conf.appwrite_bucket_id,
        fileId,
        file
      );
      return response;
    } catch (error) {
      console.error("Error uploading file:", error.message);
      throw new Error("Failed to upload file.");
    }
  }

  // Remove file from Appwrite storage
  async removeFile(fileId) {
    try {
      await storage.deleteFile(conf.appwrite_bucket_id, fileId);
      return { message: "File removed successfully." };
    } catch (error) {
      console.error("Error removing file:", error.message);
      throw new Error("Failed to remove file.");
    }
  }

  // Upload user profile picture (updated to delete previous picture if it exists)
  async uploadProfilePicture(email, file) {
    try {
      const userResponse = await databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        [Query.equal("Email", email)]
      );

      if (userResponse.documents.length === 0) {
        throw new Error("User not found.");
      }

      const userId = userResponse.documents[0].$id;
      const oldFileId = userResponse.documents[0].profile_picture;

      if (oldFileId) {
        await this.removeFile(oldFileId);
      }

      const fileUploadResponse = await this.uploadFile(file);
      const newFileId = fileUploadResponse.$id;

      const dbResponse = await databases.updateDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        userId,
        { profile_picture: newFileId }
      );

      return { message: "Profile picture updated successfully.", fileUrl: newFileId };
    } catch (error) {
      console.error("Error:", error.message);
      throw new Error("Failed to update profile picture.");
    }
  }

  // Remove user profile picture by email
  async removeProfilePicture(email) {
    try {
      const userResponse = await databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        [
          Query.equal("Email", email)
        ]
      );
      if (userResponse.documents.length === 0) {
        throw new Error("User not found.");
      }

      const userId = userResponse.documents[0].$id;
      const fileId = userResponse.documents[0].profile_picture;

      await this.removeFile(fileId);

      await databases.updateDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        userId,
        { profile_picture: null }
      );

      return { message: "Profile picture removed successfully." };
    } catch (error) {
      console.error("Error removing profile picture:", error.message);
      throw new Error("Failed to remove profile picture.");
    }
  }

}

const appwriteService = new AppwriteService()
export default appwriteService
