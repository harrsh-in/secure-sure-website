// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import _ from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

type Data = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req.body);
    const data = JSON.parse(req.body);
    let html = '';
    Object.keys(data).map((el) => {
        console.log(el, data[el]);
        html += `${el} - ${data[el]}<br>`;
    });
    console.log(html);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW
        }
    });

    const mailOptions: MailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: 'You have a new query',
        html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw new Error(error.message);
        } else {
            console.log('Email Sent');
            return true;
        }
    });

    res.status(200).json({
        message: 'Email sent successfully.'
    });
}
