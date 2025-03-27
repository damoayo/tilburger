import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    // Gmail SMTP 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail 주소
        pass: process.env.EMAIL_PASS, // Gmail 앱 비밀번호
      },
    });

    // 이메일 옵션 설정
    const mailOptions = {
      from: process.env.EMAIL_USER, // 발신자 이메일
      to: process.env.RECIPIENT_EMAIL, // 수신자 이메일
      subject: "새로운 문의가 도착했습니다",
      text: `보낸 사람: ${email}\n\n문의 내용:\n${message}`,
      html: `
        <h2>새로운 문의가 도착했습니다</h2>
        <p><strong>보낸 사람:</strong> ${email}</p>
        <p><strong>문의 내용:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("이메일 전송 실패:", error);
    return NextResponse.json(
      { error: "이메일 전송에 실패했습니다. 나중에 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
