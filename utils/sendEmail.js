const nodemailer = require("nodemailer");
const nodemailerConfig = require("../utils/nodemailerConfig")

const sendEmail = async({to,subject,html}) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport(nodemailerConfig);

    return transporter.sendMail({
        from: '"Enibanji" <enibanji@gmail>', // sender address
        to,
        subject,
        html,
      });

}

module.exports= sendEmail;