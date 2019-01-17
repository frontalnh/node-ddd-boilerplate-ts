import mail from '@sendgrid/mail';
import { ClientResponse } from '@sendgrid/client/src/response';

interface ToInfo {
  name: string;
  email: string;
}

class Mailer {
  public send(to: ToInfo, title, html): Promise<[ClientResponse, {}]> {
    // TODO: Need to validation for parameter
    const mailData = {
      to,
      from: {
        name: 'Shareable Asset',
        email: 'no-reply@bluewhale.foundation'
      },
      subject: title,
      html: html
    };

    return mail.send(mailData);
  }

  public sendToMany(tos: ToInfo[], title, html): Promise<[ClientResponse, {}]> {
    const mailData = {
      tos,
      from: {
        name: 'Shareable Asset',
        email: 'no-reply@bluewhale.foundation'
      },
      subject: title,
      html: html
    };

    return mail.send(mailData);
  }
}

export const mailer = new Mailer();
