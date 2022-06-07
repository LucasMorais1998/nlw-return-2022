import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '7df4bebdce05d4',
    pass: '3c1144eb2c51eb',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <email@email.com>',
      to: 'Lucas Morais <lucas14.morais@gmail.com>',
      subject,
      html: body,
    });
  }
}
