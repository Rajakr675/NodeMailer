const nodemailer = require('nodemailer');
const fs = require('fs');

const mailSender = async () => {

    let mails = [
        "hr@disolutions.net",
        "hr@samosys.com"
        ]


    let mailCount = 0;
    for (let mail of mails) {
        try {
            let transPorter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'raja21@navgurukul.org',
                    pass: '*****enter your password'
                }
            })
            let body = `<p>Hello sir/ ma'am,</p>
            <p>
            I am Raja Kumar From Himachal Pradesh . I am looking for a job. I have Good knowledge about Node-js ,Java Script, Express Js ,Database(mysql). PYTHON and html-css If my skills are matching for your position please give me an opportunity so I can prove myself.
            <p>I am attaching my resume below.</p>
            <p><b>Regards,</b><br>Raja Kumar<br>+91-9122189021<br>Personal mail :- raja21@navgurukul.org</p>`;

            let info = await transPorter.sendMail({

                from: '"Raja Kumar" <raja21@navgurukul.org>',
                to: mail,
                subject: "Application for the job of Node Js developer position.",
                text: "This is mail by me",
                html: body,
                attachments: [
                    {
                        filename: "RajaKumar.pdf",
                        content: fs.createReadStream("./RajaKumar.pdf")
                    }
                ]
            });
            console.log(info);
            mailCount++

        } catch (error) {
            console.log(error);
        }
    }
    console.log(mailCount, " mail has been sent");
}
mailSender()
