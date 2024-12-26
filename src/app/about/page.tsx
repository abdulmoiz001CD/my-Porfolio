'use client'
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  useEffect(() => {
    const ulist_firstEL = document.getElementById("ulist_first");
    const barEL = document.getElementById("bar");
    const iconbarEL = document.getElementById("iconbar");

    const barControler = () => {
      if (ulist_firstEL && barEL && iconbarEL) {
        if (ulist_firstEL.style.display === "block") {
          ulist_firstEL.style.display = "none";
          barEL.style.backgroundColor = "#0089b7";
          iconbarEL.style.fontSize = "17px";
        } else {
          ulist_firstEL.style.display = "block";
          barEL.style.backgroundColor = "#003251";
          iconbarEL.style.fontSize = "17px";
        }
      }
    };

    if (iconbarEL) {
      iconbarEL.addEventListener("click", barControler);
    }

    return () => {
      if (iconbarEL) {
        iconbarEL.removeEventListener("click", barControler);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>About</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          src="https://kit.fontawesome.com/7a4b62b0a4.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>

      <header>
        <nav id="aboutNav" className="container">
          <div className="arrow-left"></div>
          <Link id="aboutlogo" className="logo" href="/">
            Portfolio
          </Link>
        </nav>
      </header>

      <section id="hero">
        <div className="container">
          <div className="hero_image animate__animated animate__bounceInLeft">
            <Image
              className="profilepic"
              src="/images/portfolio.jpeg"
              alt="hero image"
              width={150}
              height={150}
            />
          </div>
          <div className="hero_content">
            <h1>
              <span className="hi_text">Hi</span>, I am
              <span className="name_text"> Abdul Moiz</span>
            </h1>
            <h2>Frontend Developer</h2>
            <div className="iconCon">
              <Image src="/images/HTML.png" alt="HTML" width={50} height={50} />
              <Image src="/images/Css.png" alt="CSS" width={50} height={50} />
              <Image
                src="/images/javascript.png"
                alt="JavaScript"
                width={50}
                height={50}
              />
              <Image
                src="/images/TyopeScript.webp"
                alt="TypeScript"
                width={50}
                height={50}
              />
              <Image src="/images/react.png" alt="React" width={50} height={50} />
              <Image
                src="/images/bootstrap-logo.png"
                alt="Bootstrap"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-item">
          <h3>Introduction</h3>
          <p>
            Dedicated and skilled Front-End Developer with a strong foundation in
            creating dynamic and responsive web applications. At 19 years old, I
            bring proficiency in HTML, CSS, JavaScript, and TypeScript, along
            with hands-on experience in frameworks and libraries such as
            Bootstrap and React. Committed to delivering user-centric solutions
            and collaborating effectively in multidisciplinary teams to drive
            project success.
          </p>
        </div>

        <div className="about-item">
          <h3>Education</h3>
          <ul>
            <li>GIAC UNIVERSITY</li>
            <li>Front-End Development</li>
          </ul>
        </div>

        <div className="about-item">
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+923113391907">+92 3113391907</a>
            </p>
          </div>

          <div className="contact-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:abdulmoizs2005@gmail.com">
                abdulmoizs2005@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/abdulmoiz001CD"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/abdulmoiz001CD
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/abdul-moiz-12457a28a"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/abdul-moiz-12457a28a
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">Created By Abdul Moiz</div>
      </footer>
    </>
  );
};

export default page;
