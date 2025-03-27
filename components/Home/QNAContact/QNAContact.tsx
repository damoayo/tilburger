"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { RevealList } from "next-reveal";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  border: "none",
  backgroundColor: "transparent",
  "&:not(:last-child)": {
    marginBottom: "1rem",
  },
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#daa520" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(218, 165, 32, 0.05)",
  borderRadius: "12px",
  flexDirection: "row-reverse",
  padding: "0.5rem 1rem",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "&:hover": {
    backgroundColor: "rgba(218, 165, 32, 0.1)",
  },
  "&.Mui-expanded": {
    backgroundColor: "rgba(218, 165, 32, 0.1)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "0 0 12px 12px",
  marginTop: "2px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
}));

const QNAContact = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "메일 전송에 실패했습니다.");
      }

      setSuccess(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "메일 전송에 실패했습니다."
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen bg-[#f7f6fb] pt-32 pb-20"
    >
      {/* 배경 효과 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#daa520]/20 to-transparent" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#daa520] mb-4">
            문의하기
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            궁금하신 점을 확인하시고 추가 문의사항은 언제든 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* QNA 섹션 */}
          <RevealList
            duration={1000}
            delay={100}
            opacity={0}
            interval={100}
            origin="left"
            distance="50px"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 relative">
                <span className="relative inline-block">
                  자주 묻는 질문
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#daa520]/30"></div>
                </span>
              </h3>
              <div className="space-y-4">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography
                      component="span"
                      className="font-medium text-gray-700 hover:text-[#daa520]"
                    >
                      말총이 뭔가요?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-gray-600 leading-relaxed">
                      말총은 말의 꼬리털로, 탄성이 뛰어나고 통기성이 우수하며
                      습기 조절 효과가 탁월해 고급 베개의 천연 충진재로 사용되어
                      머리의 온도를 적절히 유지해주는 기능을 합니다.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography
                      component="span"
                      className="font-medium text-gray-700 hover:text-[#daa520]"
                    >
                      왜 우리는 통기성이 좋은 베개를 사용해야 하나요?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-gray-600 leading-relaxed">
                      우리의 몸은 폐 뿐만 아니라 피부를 통해서도 호흡합니다.
                      700만개 이상의 모공을 통해 숨을 쉬며 몸 속의 노폐물을
                      배출합니다. 쾌적하고 편안함을 유지하기 위해서는 뛰어난
                      통기성으로 머리 주변의 공기를 순환시키는 베개위에서 자는
                      것이 중요합니다.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography
                      component="span"
                      className="font-medium text-gray-700 hover:text-[#daa520]"
                    >
                      동물의 털인데 위생상 문제가 있지 않을까요?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-gray-600 leading-relaxed">
                      말꼬리 털은 오랜시간 세척과정과 살균과정을 거쳐서 높은
                      탄성으로 가공되기 때문에 안심하고 사용하실 수 있습니다.
                      <br /> 또한 말총은 머리카락과 달리 털이 두껍고 탄성이
                      뛰어나기 때문에 머리를 지지하고 편안한 수면을 유도합니다.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </RevealList>

          {/* Contact 섹션 */}
          <RevealList
            duration={1000}
            delay={200}
            opacity={0}
            interval={100}
            origin="right"
            distance="50px"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                문의하기
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    이메일 주소
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#daa520] focus:border-transparent"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    문의 내용
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#daa520] focus:border-transparent"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-[#daa520] rounded-lg hover:bg-[#b8860b] transition-colors duration-300 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "전송 중..." : "문의 보내기"}
                </button>
                {error && (
                  <div className="text-red-600 text-center mt-4">{error}</div>
                )}
                {success && (
                  <div className="text-green-600 text-center mt-4">
                    메일이 성공적으로 전송되었습니다!
                  </div>
                )}
              </form>
            </div>
          </RevealList>
        </div>
      </div>
    </div>
  );
};

export default QNAContact;
