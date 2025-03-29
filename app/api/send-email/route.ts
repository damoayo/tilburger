import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // 발신자 이메일
        pass: process.env.EMAIL_PASS, // 앱 비밀번호 (2단계 인증 시 필요)
      },
    });

    // 메일 옵션
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "export@zs-korea.com", // 수신자 이메일
      subject: `Landing Page 문의 from ${email}`,
      text: message,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
