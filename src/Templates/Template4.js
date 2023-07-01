import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/index.css";
import TemplateHeaderDetails from "../Components/TemplateHeaderDetails";
import TemplateHeadingDetails from "../Components/TemplateHeadingDetails";
import TemplateOneExperienceDetails from "../Components/TemplateOneExperienceDetails";
import { DefaultData } from "../Data/DefaultData";
import TemplateEducationDetails from "../Components/TemplateEducationDetails";
import TemplateKeySkillDetails from "../Components/TemplateKeySkillDetails";

const Template4 = (props) => {
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
  // console.log(props.index);
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
        primaryColor={"#9B536F"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeadingDetails color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
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

export default Template4;
