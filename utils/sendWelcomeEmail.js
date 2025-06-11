const nodemailer = require("nodemailer");

exports.sendWelcomeEmail = async (email, username) => {
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
      subject: "Welcome to FreshMart!",
      html: `
        <h2>Welcome, ${username}!</h2>
        <p>We're excited to have you join FreshMart.</p>
        <p>You can now browse and shop fresh groceries from the comfort of your home.</p>
        <p>Cheers,<br/>The FreshMart Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent to", email);
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
};
