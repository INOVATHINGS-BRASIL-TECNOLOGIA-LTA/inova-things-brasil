"use server";

import { Resend } from 'resend';
import { ContactTemplate } from '@/emails/ContactTemplate';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['CONTATO@NAT.IA.BR'],
      subject: `[Site InovaThings] ${subject} - ${company}`,
      react: <ContactTemplate name={name} email={email} company={company} subject={subject} message={message} />,
      replyTo: email,
    });

    if (error) {
      console.error('Erro Resend API:', error);
      return { success: false, message: error.message };
    }

    return { success: true, message: 'Message sent successfully.' };
  } catch (error: any) {
    console.error('Erro inesperado no servidor:', error);
    return { success: false, message: 'Internal Server Error' };
  }
}
