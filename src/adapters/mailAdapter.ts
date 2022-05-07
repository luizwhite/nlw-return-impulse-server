interface SendMailDTO {
  subject: string;
  body: string;
}

interface MailAdapter {
  sendMail: (data: SendMailDTO) => Promise<void>;
}

export { MailAdapter, SendMailDTO };
