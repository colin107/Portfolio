import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/button/Button";
// import BlogsImg from "./BlogsImg";
// import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
// import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Awards extends Component {
  render() {
    const theme = this.props.theme;
    return (
      
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={2000} distance="50px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/1670918414220.jpg`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="educations-header"
                  style={{ color: theme.text }}
                >
                  {"Data Hack 2021"}
                </h1>
                <h1
                  className="educations-header"
                  style={{ color: theme.text }}
                >
                  {"1st Runner Up"}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {"Within 48 hours, participants will apply knowledge and skills from what they have learnt in the pre-hackathon workshops about data mining to solve the current problem in the Post-COVID-19 era. Participants shall select one sub-theme among the four and work as a one group to provide a solution in an innovative way. Participants will have a group presentation of their solutions in Day 3."}
                </p>
                <div className="resume-btn-div">
                </div>
              </div>
            </div>
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/poster_layout8-v3.png`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/1621938791985.jpg`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/1670918318496.jpg`)}
                  alt=""
                />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Awards;
      // https://libguides.lib.cuhk.edu.hk/datahack/2021home
      // poster_layout8-v3.png
      // https://xd.adobe.com/view/75ae920d-3558-4c8b-9d7d-e4fdd47ff566-20fd/?fullscreen