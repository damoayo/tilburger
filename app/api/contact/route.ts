import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 이메일 유효성 검사 함수
function isValidEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    // 필수 환경 변수 확인
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.RECIPIENT_EMAIL
    ) {
      console.error("필수 환경 변수가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "서버 설정이 완료되지 않았습니다. 관리자에게 문의하세요." },
        { status: 500 }
      );
    }

    // 이메일 유효성 검사
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    // 메시지 내용 검증
    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "문의 내용은 최소 10자 이상 입력해주세요." },
        { status: 400 }
      );
    }

    // Gmail SMTP 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 이메일 템플릿
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #daa520; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { padding: 20px; background: #f9f9f9; border: 1px solid #eee; }
        .message-box { background: white; padding: 15px; border-radius: 5px; margin-top: 10px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .info-item { margin-bottom: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">새로운 문의가 도착했습니다</h2>
        </div>
        <div class="content">
          <div class="info-item">
            <strong>보낸 날짜:</strong> ${new Date().toLocaleString("ko-KR", {
              timeZone: "Asia/Seoul",
            })}
          </div>
          <div class="info-item">
            <strong>보낸 사람:</strong> ${email}
          </div>
          <div class="info-item">
            <strong>문의 내용:</strong>
            <div class="message-box">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Natural Horsehair - 프리미엄 말총 베개</p>
          <p>이 이메일은 자동으로 발송되었습니다.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // 이메일 옵션 설정
    const mailOptions = {
      from: {
        name: "Natural Horsehair 문의",
        address: process.env.EMAIL_USER,
      },
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email, // 답장 시 문의자의 이메일로 전송되도록 설정
      subject: `[홈페이지 문의] ${email}님의 새로운 문의`,
      text: `
보낸 사람: ${email}

문의 내용:
${message}

발신 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
      `,
      html: htmlTemplate,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message:
        "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
        details:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
