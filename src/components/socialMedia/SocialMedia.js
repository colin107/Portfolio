import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <CompetitiveSites logos={competitiveSites.competitiveSites} />
    // <div className="social-media-div">
    //   {socialMediaLinks.map((media) => {
    //     return (
    //       // <CompetitiveSites logos={competitiveSites.competitiveSites} />
    //       <a
    //         href={media.link}
    //         className={`icon-button`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <IconWrapper {...media} {...props}>
    //           <i className={`fab ${media.fontAwesomeIcon}`}></i>
    //         </IconWrapper>
    //         {/* <span></span> */}
    //       </a>
    //     );
    //   })}
    // </div>
  );
}
