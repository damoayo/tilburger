"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Q&A
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: "10%", flexShrink: 0 }}>
            1️⃣
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            베개의 충전재로 &#39;말총&#39;이 들어간다는데 &#39;말총&#39;이
            뭔가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: "10%", flexShrink: 0 }}>
            2️⃣
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: "10%", flexShrink: 0 }}>
            3️⃣
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography component="span" sx={{ width: "10%", flexShrink: 0 }}>
            4️⃣
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur Lorem ipsum dolor sit! Lorem ipsum dolor sit  consectetur 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
