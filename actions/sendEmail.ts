"use server"
import {Resend} from "resend"
import {validateString , getErrorMessage} from "@/lib/utility"
import GooglePlay from "@/email/GooglePlay"
import ContactFormEmail from "@/email/contact-form-email"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async(formData : FormData) =>{
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")
    
    if(!validateString(senderEmail,25)){
        return{
            error: "Invalid Email"
        }
    }

    if(!validateString(message,100)){
        return{
            error: "Invalid message"
        }
    }

    let data;
    try{
        data = await resend.emails.send({
            from: "contact form <onboarding@resend.dev>",
            to:"ffmm0609@gmail.com",
            subject: "Test Email",
            reply_to: senderEmail as string,
            // text: message as string,
            react : React.createElement(GooglePlay,
                {message: message as string, 
                senderEmail: senderEmail as string
            })
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }   
    return {
        data,
    }
}