import { createTransport } from 'nodemailer';;
import { envConfig } from '../config/index.js';

export const sendMail = async (user, message) => {
    const transporter = createTransport({
        service: 'gamil',
        host: envConfig.MAIL.HOST,
        port: envConfig.MAIL.PORT,
        auth: {
            user: envConfig.MAIL.USER,
            pass: envConfig.MAIL.PASS
        }
    });
    const mailOptions = {
        from: envConfig.MAIL.USER,
        to: user,
        subject: 'Netflix MOVIES',
        text: message
    };
    const res = await transporter.sendMail(mailOptions);
    return res;
}