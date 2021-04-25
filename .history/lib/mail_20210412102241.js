//sendGrid as a mail service is used 
//in this project
//alternative - MailGun
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendMail(msg) {
    
    
}