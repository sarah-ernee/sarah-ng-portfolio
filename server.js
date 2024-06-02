// Importing dependencies
const express = require("express");
const { Router, json } = require("express");
const { createTransport } = require("nodemailer");
const cors = require("cors");
const router = Router();

// Setting up Express server that sends out emails
const app = express();
app.use(cors());
app.use(json());
app.use("/", router);
app.listen(5000, () => console.log("Server running"));

// Nodemailer transporter
const contactEmail = createTransport({
  service: "gmail",
  auth: {
    user: "sarah.13997@gmail.com",
    pass: "rcae xunf nnne xjqa",
  },
});

// Verify transporter object
contactEmail.verify((error) => {
  error ? console.log(error) : console.log("Ready to send");
});

// Handle client request aka form submission
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const mail = {
    from: name,
    to: "sarah.13997@gmail.com",
    subject: "Hey there Sarah!",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
