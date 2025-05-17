const conf = {
  appwrite_url: String(process.env.NEXT_PUBLIC_APPWRITE_URL),

  app_url: String(process.env.NEXT_PUBLIC_APP_URL),

  appwrite_project_id: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),

  appwrite_database_id: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),

  appwrite_collection_id: String(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
  ),

  appwrite_webinar_collection_id: String(
    process.env.NEXT_PUBLIC_APPWRITE_WEBINAR_COLLECTION_ID,
  ),

  appwrite_api_key: String(process.env.NEXT_PUBLIC_APPWRITE_API_KEY),

  appwrite_bucket_id: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),

}
export default conf
