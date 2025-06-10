
const nodemailer = require("nodemailer")



exports.sendForgotPasswordEmail = async (email, token) => {
  try {
    const mailTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,          // use process.env without ${}
        pass: process.env.EMAIL_PASSWORD, // same here
      },
    });

    const mailDetails = {
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Password Notification",
      html: `
        <h1>Here is the token to reset your password, please click on the button below:</h1>
        <a href="https://www.yourcareerex.com/reset-password/${token}">Reset Password</a>
        <p>If the button does not work, please click the link below:</p>
        <a href="https://www.yourcareerex.com/reset-password/${token}">${token}</a>
      `,
    };

    await mailTransport.sendMail(mailDetails);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


exports.validEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



