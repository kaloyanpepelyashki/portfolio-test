//Importing the typewriter effect
import Typewriter from "react-ts-typewriter";

//Importing React hooks
import React, { useEffect, useRef, useState } from "react";

//Importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

//Importing "NavLink"
import { NavLink } from "react-router-dom";

export default function HomePage() {
  //Scroll down arrow useRef
  const titleref = useRef();
  //Scrow-down arrow function
  function handleBackClick() {
    titleref.current.scrollIntoView({ behavior: "smooth" });
  }

  //Article useRef
  const articleRef = useRef();
  const [ElementVisible, setElementVisible] = useState();

  //Article intersection observer useEffect
  useEffect(() => {
    console.log(articleRef, articleRef.current);

    //Assigning new instance of the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementVisible(entry.isIntersecting);
    });
    //Telling the observer which element to observe
    observer.observe(articleRef.current);
  }, []);

  const greetingArray2 = [
    "Kaloyan",
    "web developer",
    "photographer",
    "multimedia designer",
  ];

  return (
    <main className="home-page-main page-main-sec">
      {/* <-- -- //TOP SECTION */}
      <section className="top-main-page">
        <div className="main-page-header-center">
          {/* <--  //MAIN HEADING AND TYPEWRITER */}
          <div className="title-typewriter-holder">
            <p className="home-page-title">I am</p>
            <span className="Typewriter">
              {" "}
              <Typewriter
                text={greetingArray2}
                speed="4"
                loop="true"
                delay="3"
                random="40"
              />
            </span>
          </div>

          {/* <--  //SMALL HEADING */}
          <div className="main-page-small-headings-holder">
            <h2 className="main-page-heading-small">
              See what i{" "}
              <NavLink
                className="nav-bar-link-item main-page-heading-link"
                to="/work"
              >
                <b className="small-heading-coding-symbol">&lt;</b>work /
                <b className="small-heading-coding-symbol-right">&gt;</b>
              </NavLink>{" "}
              &nbsp;with
            </h2>
            <h2 className="main-page-heading-small">
              See more{" "}
              <NavLink
                className="nav-bar-link-item main-page-heading-link"
                to="/about"
              >
                <b className="small-heading-coding-symbol">&lt;</b>about /
                <b className="small-heading-coding-symbol-right">&gt;</b>
              </NavLink>{" "}
              &nbsp;me
            </h2>
          </div>
        </div>

        {/* <--  //SCROLL DOWN BUTTON */}
        <div className="scroll-down-btn-heading-holder">
          <p className="scroll-down-heading">See why i am a perfect fit</p>
          <button className="scroll-down-btn" onClick={handleBackClick}>
            <FontAwesomeIcon
              className="scroll-down-icon"
              icon={faCircleArrowDown}
            />
          </button>
        </div>
      </section>

      {/* <-- -- //SECOND SECTION */}
      <section className="main-page-first-article">
        <div className="main-page-second-section-center">
          {/* <--  //"WHY ME" ARTICLE */}
          <article>
            <div ref={titleref} className="scroll-effect-target">
              {ElementVisible
                ? document
                    .getElementById("scroll-target")
                    .classList.add("text-focus-in")
                : ""}
            </div>
            {/* <--  //"WHY ME" ARTICLE HEADING */}
            <div ref={articleRef} id="scroll-target">
              <h2 className="main-page-secondsec-article second-section-heading">
                I am young, passionate and capable.
                <br />I am responsible and reliable.
              </h2>

              {/* <--  //"WHY ME" ARTICLE PARAGRAPH */}
              <p className="main-page-secondsec-article second-section-paragraph">
                Assited by my analitical mind and great comunicational skills,
                <br /> I am able to bring a great value to your company.
                <br /> With my knowedge about programming
                <br /> I am capable of working on varius projects and sloving
                every problem.
                <br />
                But not only a coder I am. I am also a great photographer and
                story teller.
                <br /> With my flawless eye for photography another benefit i
                can bring is content-creating.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
