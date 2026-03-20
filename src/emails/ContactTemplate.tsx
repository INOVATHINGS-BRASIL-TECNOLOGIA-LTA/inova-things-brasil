import * as React from 'react';
import { Html, Body, Container, Text, Heading, Hr } from '@react-email/components';

interface ContactTemplateProps {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  name,
  email,
  company,
  subject,
  message,
}) => (
  <Html>
    <Body style={{ backgroundColor: '#f4f4f5', fontFamily: 'sans-serif' }}>
      <Container style={{ margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Heading style={{ color: '#09090b', fontSize: '24px' }}>Nova Solicitação de Contato</Heading>
        <Text style={{ color: '#52525b', fontSize: '16px' }}>Você recebeu uma nova mensagem através do formulário do site InovaThings Brasil.</Text>
        <Hr style={{ borderColor: '#e4e4e7', margin: '20px 0' }} />
        <Text style={{ margin: '10px 0', color: '#27272a' }}><strong>Nome:</strong> {name}</Text>
        <Text style={{ margin: '10px 0', color: '#27272a' }}><strong>Email:</strong> {email}</Text>
        <Text style={{ margin: '10px 0', color: '#27272a' }}><strong>Empresa:</strong> {company}</Text>
        <Text style={{ margin: '10px 0', color: '#27272a' }}><strong>Assunto:</strong> {subject}</Text>
        <Text style={{ margin: '10px 0', color: '#27272a' }}><strong>Mensagem:</strong><br />{message}</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactTemplate;
