"use server";

import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { ContactTemplate } from '@/emails/ContactTemplate';

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.nat.ia.br",
      port: 465,
      secure: true,
      auth: {
        user: "contato@inovathings.com.br",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailHtml = await render(<ContactTemplate name={name} email={email} company={company} subject={subject} message={message} />);

    await transporter.sendMail({
      from: '"InovaThings Brasil" <contato@inovathings.com.br>',
      to: 'contato@inovathings.com.br',
      subject: `[Site InovaThings] ${subject} - ${company}`,
      html: emailHtml as string,
      replyTo: email,
    });

    return { success: true, message: 'Message sent successfully.' };
  } catch (error: any) {
    console.error('Erro SMTP:', error);
    return { success: false, message: 'Internal Server Error' };
  }
}
