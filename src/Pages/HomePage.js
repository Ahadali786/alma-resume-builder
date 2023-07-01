import React from "react";
import "../Styles/index.css";
import { DefaultTemplates } from "../Data/DefaultTemplates";
import DarkScreen from "../Components/DarkScreen";
import { Button, Stack } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate } from "../Redux/actions";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});



const HomePage = (props) => {
  const navigate = useNavigate();

  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/filldetails");
  };

  // const [mode,setMode] = useState('light');
  // const [btnText,setBtnText] = useState('text-dark');

  // const togglemode = () =>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     setBtnText('text-light')
  //     document.body.style.backgroundColor='#084298'
  //     //showAlert("Dark mode has been enabled","success")
  //     //document.title='TextUtils-DarkMode'
  //   }
  //   else{
  //     setMode('light')
  //     setBtnText('text-dark')
  //     document.body.style.backgroundColor='#fff'
  //     //showAlert("Light mode has been enabled","success")
  //     //document.title='TextUtils-Home'
  //   }
  // }

  // console.log(props.selectedTemplateId);
  
  return (
    <>
      
         <div className="home">
        <div className="home-templates-cont">
          <h2 className="template-header-title">Templates</h2>
          <p className="template-select-text">Select a template to get started</p>
          
          <Stack
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg:"1fr 1fr 1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              },
              gridGap: "30px",
            }}>
            {DefaultTemplates.map((template) => {
              return (
                <div key={template.id} id="template" className="templates-img-cont">
                  <img
                    className="template-img"
                    src={template.template_img}
                    alt={template.template_name}
                  />
                  <DarkScreen />
                  <Button
                    className="use-template-btn"
                    onClick={() => navigateToFillDetails(template.id)}
                    size="medium"
                    variant="contained">
                    Use Template
                  </Button>
                </div>
              );
            })}
          </Stack>
        </div>
      </div>
      
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
