import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config({ path: "./server/.env" });

const app = express();

// 1. HELMET: HTTP headers ko secure aur hide karne ke liye
app.use(helmet());

// 2. STRICT CORS: Sirf tere frontend ko allow karega
const allowedOrigins = [
  "http://localhost:5173", // Local frontend
  "https://my-portfolio-lrgu.onrender.com", // Yahan apna LIVE FRONTEND URL daal dena
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests) OR allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// 3. RATE LIMITING: Spam aur DDoS attack rokne ke liye
// Ek IP address se 15 minute mein sirf 5 emails bhej sakte hain
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: { 
    success: false, 
    message: "Too many requests. Please try again after 15 minutes." 
  },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

app.get("/", (req, res) => {
  res.send("Portfolio backend is running securely");
});

// Route par rate limiter middleware lagaya hai
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    console.log("CONTACT REQUEST RECEIVED");
    
    // 4. BASIC SANITIZATION: HTML tags ko disable karne ke liye (XSS protection)
    const name = req.body.name?.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const email = req.body.email?.trim();
    const message = req.body.message?.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
New Portfolio Contact Message

Name: ${name}

Email: ${email}

Message:

${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("FULL EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});