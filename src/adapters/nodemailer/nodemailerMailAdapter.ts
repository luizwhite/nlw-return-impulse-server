import nodemailer from 'nodemailer';

import { MailAdapter, SendMailDTO } from '../mailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c1caf844727f50',
    pass: '9d9173a9fd2976',
  },
});

class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailDTO) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Luiz Augusto <luizbapmarques@gmail.com>',
      // subject: 'Novo feedback',
      subject,
      html: body,
      // html: [
      //   `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      //   `<p>Tipo do feedback: ${type}</p>`,
      //   `<p>Comentário: ${comment}</p>`,
      //   `</div>`,
      // ].join('\n'),
    });
  }
}

export { NodemailerMailAdapter };
