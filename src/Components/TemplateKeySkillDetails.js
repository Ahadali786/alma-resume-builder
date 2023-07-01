import { Container } from "@mui/system";
import React from "react";
import "../Styles/index.css";

const TemplateKeySkillDetails = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default TemplateKeySkillDetails;
