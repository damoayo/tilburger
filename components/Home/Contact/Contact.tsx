"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("./app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setEmail("");
      setMessage("");
    } else {
      alert("이메일 전송에 실패했습니다.");
    }
  };

  return (
    <div
      id="contact"
      className="d-flex justify-content-center align-items-center  p-16 bg-light"
    >
      <div
        className="card shadow-lg border-0 rounded-4 mt-32 p-4" // Navbar의 높이만큼 내려주기 위해 mt-32 추가
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <h2 className="text-center fw-bold mb-3 text-primary">문의하기</h2>
        <p className="text-center text-muted mb-4">
          궁금한 점을 남겨주세요. 빠르게 답변해 드리겠습니다.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">이메일 주소</label>
            <input
              type="email"
              className="form-control rounded-3 p-2 "
              placeholder="email @ example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">메시지</label>
            <textarea
              className="form-control rounded-3 p-2 focus:outline-none "
              // placeholder="전하고 싶은 내용을 입력하세요..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-3 py-2 fw-bold"
            disabled={loading}
          >
            {loading ? "전송 중..." : "문의 보내기"}
          </button>
        </form>

        {success && (
          <div className="alert alert-success text-center mt-3 p-2 rounded-3">
            메일이 성공적으로 전송되었습니다!
          </div>
        )}
      </div>
    </div>
  );
}
