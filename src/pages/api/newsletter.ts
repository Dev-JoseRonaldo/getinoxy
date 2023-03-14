import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

export interface mailerProps {
  senderMail: string
}

const email = process.env.NEXT_PUBLIC_MAILADRESS
const emailPass = process.env.NEXT_PUBLIC_MAILPASS

const transporter = nodemailer.createTransport({
  host: 'mail.getinoxy.com.br',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: emailPass
  }
});

const mailer = ({ senderMail}: mailerProps) => {
  const from = `<${senderMail}>`
  const message = {
    from,
    to: `${email}`,
    subject: `[Subscribe Newsletter] - ${senderMail}`,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { senderMail } = req.body;

  if (senderMail === '') {
    res.status(403).send('');
    return;
  }

  const mailerRes = await mailer({ senderMail });
  res.send(mailerRes);
};