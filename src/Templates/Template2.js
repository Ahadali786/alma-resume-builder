import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/index.css";
import TemplateHeaderDetails from "../Components/TemplateHeaderDetails";
import TemplateHeadingDetails from "../Components/TemplateHeadingDetails";
import { DefaultData } from "../Data/DefaultData";
import TemplateOneExperienceDetails from "../Components/TemplateOneExperienceDetails";
import TemplateEducationDetails from "../Components/TemplateEducationDetails";
import TemplateKeySkillDetails from "../Components/TemplateKeySkillDetails";

const Template2 = (props) => {
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : DefaultData.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : DefaultData.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : DefaultData.education_details;
  const skills = props.skills ? props.skills : DefaultData.key_skills;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <TemplateHeaderDetails
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#9B536F"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeadingDetails color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceDetails
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeadingDetails color={"#9B536F"} title={"Education"} />
        <TemplateEducationDetails education={educationinfo} />
        <TemplateHeadingDetails color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillDetails key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template2;
