import nodemailer from 'nodemailer';

export const sendEmail = async (recipient: string, url: string) => {
  const transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'bb7xvy5druqxq4wm@ethereal.email',
      pass: 'FF26whs4fBh8jGuE8E'
    }
  });

  const message = {
    from: 'Sender Name <sender@example.com>',
    to: `Recipient <${recipient}>`,
    subject: 'Confirmation Mail',
    text: 'Confirmation Mail',
    html: `<html>
        <body>
          <p>Testing Nodemailer</p>
          <a href="${url}">Confirm email</a>
        </body>
      </html>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(`Error occurred. ${err.message}`);
    }

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};
