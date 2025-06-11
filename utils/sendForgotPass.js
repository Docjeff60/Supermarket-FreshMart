
const nodemailer = require("nodemailer");




exports.sendForgotPasswordEmail = async (email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Password Notification",
      html: `
        <h2>Reset your password</h2>
        <p>Click the link below to reset your password:</p>
        <a href="https://www.yourcareerex.com/reset-password/${token}">Reset Password</a>
        <p>If the link doesn't work, copy and paste this URL:</p>
        <p>https://www.yourcareerex.com/reset-password/${token}</p>
        <p>This link will expire in 5 minutes.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent to", email);
  } catch (error) {
    console.error("Email sending error:", error); // Helpful for debugging
    throw error;
  }
};


exports.validEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



