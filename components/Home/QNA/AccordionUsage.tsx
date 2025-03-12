"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Q&A
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          borderLeft: "none",
          borderRight: "none",
          borderTop: "3px solid #e3e3e3",
        }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">말총이 뭔가요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            말총은 말의 꼬리털로, 탄성이 뛰어나고 통기성이 우수하며 습기 조절
            효과가 탁월해 고급 베개의 천연 충진재로 사용되어 머리의 온도를
            적절히 유지해주는 기능을 합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ borderLeft: "none", borderRight: "none" }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">
            왜 우리는 통기성이 좋은 베개를 사용해야 하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            우리의 몸은 폐 뿐만 아니라 피부를 통해서도 호흡합니다. 700만개
            이상의 모공을 통해 숨을 쉬며 몸 속의 노폐물을 배출합니다. 쾌적하고
            편안함을 유지하기 위해서는 뛰어난 통기성으로 머리 주변의 공기를
            순환시키는 베개위에서 자는 것이 중요합니다. 그리고 여러 실험 논문을
            통해서 30~33도의 온도에서 숙면이 숙면에 도움이 된다는 것을 저희는
            알게 되었습니다.{" "}
            <a
              href="https://www.koreascience.or.kr/article/JAKO200623659445585.pdf"
              target="_blank"
              rel="noreferrer"
            >
              - 관련논문 보기
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "3px solid #e3e3e3",
        }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">
            동물의 털인데 위생상 문제가 있지 않을까요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            말꼬리 털은 오랜시간 세척과정과 살균과정을 거쳐서 가공되기 때문에
            안심하고 사용하실 수 있습니다. <br /> 말총은 머리카락과 달리 털이
            두껍고 탄성이 뛰어나기 때문에 머리를 지지하고 편안한 수면을
            유도합니다. <br />
            또한 말은 멸종 위기에 처한 종이 아닙니다. <br /> 말은 털 때문에
            죽임을 당하지 않고, 말은 CITES나 USFWS의 통제를 받지 않기 때문에
            안심하고 사용하실 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
