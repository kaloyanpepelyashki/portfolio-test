//Importing React hooks
import React, { useEffect, useRef, useState } from "react";

//Importing the SoMe icons
import {
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutPage() {
  //First animation intersection observer
  const aboutTopRef = useRef();
  const [ElementVisibleAbout1, setElementVisibleAbout1] = useState();

  useEffect(() => {
    const ObserverAbout1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      setElementVisibleAbout1(entry.isIntersecting);
    });

    ObserverAbout1.observe(aboutTopRef.current);
  }, []);

  const aboutSkillsRef = useRef();
  const [ElementVisibleAbout2, setElementVisibleAbout2] = useState();

  useEffect(() => {
    const ObserverAbout1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      setElementVisibleAbout2(entry.isIntersecting);
    });
    ObserverAbout1.observe(aboutSkillsRef.current);
  }, []);

  //################################################################

  //Progress Bar Component
  const SkillLevelBar = ({ done }) => {
    const [fill, setFill] = useState({});
    setTimeout(() => {
      const newFill = {
        opacity: 1,
        //The width is the value of "{done}" +"0%"
        width: `${done}0%`,
      };

      setFill(newFill);
    }, 200);

    return (
      <div className="skill-Field">
        <div className="skill-Field-Level" style={fill}>
          {done}/10
        </div>
      </div>
    );
  };
  const SkillLevelBar2 = ({ done }) => {
    const [fill, setFill] = useState({});
    setTimeout(() => {
      const newFill = {
        opacity: 1,
        //The width is the value of "{done}" +"0%"
        width: `${done}0%`,
      };

      setFill(newFill);
    }, 200);

    return (
      <div className="skill-Field skill-Field2">
        <div className="skill-Field-Level skill-Field-Level2" style={fill}>
          {done}/10
        </div>
      </div>
    );
  };

  return (
    <main className="about-page-main page-main-sec">
      {/* <-- -- //TOP SECTION ABOUT PAGE */}
      <section className="about-page-profilepic-firstpara-holder">
        <div
          className="about-page-bigheading-profpic-smallpara-holder"
          ref={aboutTopRef}
          id="abAnimTarget"
        >
          {ElementVisibleAbout1
            ? document
                .getElementById("abAnimTarget")
                .classList.add("about-page-profpic-para-anim")
            : ""}
          <h1 className="about-page-bigheading">About Me</h1>
          <div className="prof-pic-smallpara-holder">
            {/* <-- //GRADIENT PICTURE */}
            <div className="prof-pic-gradient"></div>
            <div className="small-para-SoMe-holder">
              <p className="about-page-small-para">
                My name is Kaloyan. Originally from Bulgaria, now based in
                Aarhus, Denmark!{" "}
              </p>
              <div className="about-page-SoMe-icons">
                <a href="https://instagram.com/kalos.professional?igshid=YmMyMTA2M2Y=">
                  <FontAwesomeIcon
                    className="SoMe-icon-aboutpage SoMe-icon SoMe-iconleft"
                    icon={faInstagram}
                  />
                </a>
                <a href="https://www.linkedin.com/in/kaloyan-pepelyashki-0a3346220">
                  <FontAwesomeIcon
                    className="SoMe-icon-aboutpage SoMe-icon"
                    icon={faLinkedin}
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="about-page-first-para">
            I started my journey an year ago, when i got admitted in{" "}
            <a href="">BAA</a>. I had no experience or knowedge about web
            design, beforehand. Throughout this year i learnt a lot. At first i
            gained some basic knowedge about <b>HTML</b> and <b>CSS</b>, which i
            later upgraded. Afterwards i took up <b>Javascript</b> and
            immediately started bulding projects in order to expand my knowedge
            and skills.
          </p>
        </div>
      </section>
      {/* <-- -- //SKILLS SECTION */}
      <section className="about-page-skills-section">
        <div className="about-page-skills-box-center" id="skilAnimTarget">
          {" "}
          {ElementVisibleAbout2
            ? document
                .getElementById("skilAnimTarget")
                .classList.add("aboit-page-skills-box-anim")
            : ""}
          <div className="between-skills-box-heading-holder">
            <h3 className="between-skills-box-heading">
              {" "}
              <b className="about-between-boxes-heading-symbol">&lt;</b>Code /
              <b className="about-between-boxes-heading-symbol-right">&gt;</b>
            </h3>
          </div>
          {/* <--  //FIRST SKILLS BOX */}
          <div className="about-page-skills-box-outter skillsbox2">
            <div className="about-page-skills-box-inner" ref={aboutSkillsRef}>
              <div className="about-page-skills-item">
                <h3 className="skills-name">
                  <FontAwesomeIcon className="skills-icon" icon={faHtml5} />
                  &nbsp;&nbsp;HTML
                </h3>
                <SkillLevelBar done="8" />
              </div>
              <div className="about-page-skills-item">
                <h3 className="skills-name">
                  {" "}
                  <FontAwesomeIcon className="skills-icon" icon={faCss3Alt} />
                  &nbsp;&nbsp;CSS
                </h3>
                <SkillLevelBar done="8" />
              </div>
              <div className="about-page-skills-item">
                <h3 className="skills-name">
                  {" "}
                  <FontAwesomeIcon className="skills-icon" icon={faSquareJs} />
                  &nbsp;&nbsp;Javascript
                </h3>
                <SkillLevelBar done="7" />
              </div>
              <div className="about-page-skills-item">
                <h3 className="skills-name">
                  {" "}
                  <FontAwesomeIcon className="skills-icon" icon={faReact} />
                  &nbsp;&nbsp;React.js
                </h3>
                <SkillLevelBar done="5" />
              </div>
            </div>
          </div>
          <div className="between-skills-box-heading-holder">
            <h3 className="between-skills-box-heading">
              {" "}
              <b className="about-between-boxes-heading-symbol">&lt;</b>Software
              /<b className="about-between-boxes-heading-symbol-right">&gt;</b>
            </h3>
          </div>
          {/* <--  //SECOND SKILLS BOX */}
          <div className="about-page-skills-box-outter skillsbox2">
            <div className="about-page-skills-box-inner">
              <div className="about-page-skills-item">
                <h3 className="skills-name">Photoshop</h3>
                <SkillLevelBar done="5" />
              </div>
              <div className="about-page-skills-item">
                <h3 className="skills-name">Lightroom</h3>
                <SkillLevelBar done="7" />
              </div>
              <div className="about-page-skills-item">
                <h3 className="skills-name">Adobe XD</h3>
                <SkillLevelBar done="5" />
              </div>
            </div>
          </div>
        </div>

        {/* <-- -- //PERSONAL TRAITS SECTION */}
        <div className="about-page-pers-traits-box-para-holder">
          <p className="about-page-first-para pers-traits-para">
            But not only technical skills i have. Working on group projects gave
            me the ability to comunicate easier with my groupmates, to
            understand them better and yet to improve the group's productivity.
            My ability to adapt in different situations has helped me overcome
            various problems. Always thinking out of the box has guided me to
            varius extraordinary solutions.
          </p>
          <div className="pers-traits-boxes-flex">
            {/* <--  //FIRST PERSONAL TRAITS BOX */}
            <div className="about-page-skills-box-outter personal-traits-box">
              <div className="about-page-skills-box-inner p">
                <div className="about-page-skills-item">
                  <h3 className="skills-name personal-trait">Teamwork</h3>
                  <SkillLevelBar2 done="8" />
                </div>
                <div className="about-page-skills-item">
                  <h3 className="skills-name personal-trait">
                    Project management
                  </h3>
                  <SkillLevelBar2 done="6" />
                </div>
                <div className="about-page-skills-item">
                  <h3 className="skills-name personal-trait">
                    decision-making
                  </h3>
                  <SkillLevelBar2 done="6" />
                </div>
              </div>
            </div>

            {/* <--  //SECOND PERSONAL TRAITS BOX */}
            <div className="about-page-skills-box-outter personal-traits-box personal-traits-box2">
              <div className="about-page-skills-box-inner">
                <div className="about-page-skills-item">
                  <h3 className="skills-name personal-trait">Creativity</h3>
                  <SkillLevelBar2 done="7" />
                </div>
                <div className="about-page-skills-item">
                  <h3 className="skills-name personal-trait">
                    Critical Thinking
                  </h3>
                  <SkillLevelBar2 done="6" />
                </div>
                <div className="about-page-skills-item">
                  <h3 className="skills-name personal-trait">
                    Conflict resolution
                  </h3>
                  <SkillLevelBar2 done="8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
