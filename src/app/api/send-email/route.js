
import { NextResponse } from 'next/server';
// * sending mail using nodemailer 

import nodemailer from 'nodemailer';

export async function POST(req) {

    const { tosend } = await req.json();
    if (!tosend) {
        return NextResponse.json({ error: 'Missing required fields: to, subject, text' }, { status: 400 });
    }
    console.log("environment varibles ", process.env.NEXT_PUBLIC_EMAIL_PASSWORD)
    try {
        // & create a transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
            },
        });
        const receiver = {
            from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
            to: tosend,
            subject: "Hello ✔", // we can modify subject text and html template based on our requirements.
            text: "Hello world?",
            html: "<h2>Hello world?</h2>",
        };

        // Send the email
        await transporter.sendMail(receiver);
        return NextResponse.json(
            { success: 'Email sent successfully' },
            { status: 201 })

    } catch (error) {
        console.error('Error sending email:', error, error.message);
        return NextResponse.json({ message: 'Failed to send email inernal server erro ' }, { status: 500 });
    }

}
