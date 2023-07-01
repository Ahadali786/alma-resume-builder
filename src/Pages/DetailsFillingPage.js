import React, { useState } from "react";
import DetailsSidebar from "../Components/Details_Sidebar";
import EducationDetails from "../Components/EducationDetails";
import KeySkillsDetails from "../Components/KeySkillsDetails";
import PersonalInfoDetails from "../Components/PersonalInfoDetails";
import PreviewResume from "../Components/PreviewResume";
import WorkExperienceDetails from "../Components/WorkExperienceDetails";
import "../Styles/index.css";

const DetailsFillingPage = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <DetailsSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInfoDetails setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <KeySkillsDetails setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperienceDetails setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <EducationDetails setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <PreviewResume setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFillingPage;
