'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BarChart } from "lucide-react";




const projects=[
{
    href: "https://i-coder001.netlify.app/",
    src: "/images/I-Coder.png",
    alt: "i-Coder Website",
    title: "i-Coder Website",
  },
  {
    href: "https://expense-tracker0ex1.netlify.app/",
    src: "/images/Tracker.png",
    alt: "Expense Tracker",
    title: "Expense Tracker",
  },
  {
    href: "https://mrsrestaurent.netlify.app/",
    src: "/images/restaurent web.png",
    alt: "Restaurant Website",
    title: "Restaurant Website",
  },
  {
    href: "https://abduloiztodolist.netlify.app/",
    src: "/images/todo.jpeg",
    alt: "Todo List",
    title: "Todo List",
  },
  {
    href: "https://shopify-w.netlify.app/",
    src: "/images/shopify img.png",
    alt: "Shopify",
    title: "Shopify",
  },
  {
    href: "https://abdulmoiz001cd.github.io/Password-Generator/",
    src: "/images/password.jpeg",
    alt: "Password Generator",
    title: "Password Generator",
  },
  {
    href: "https://abdulmoiz001cd.github.io/Colors-Palettes/",
    src: "/images/color platters img.jpeg",
    alt: "Colors Palettes",
    title: "Colors Palettes",
  },
  {
    href: "https://abdulmoiz001cd.github.io/QR-Code-Generater/",
    src: "/images/QrCode.png",
    alt: "QR Code Generator",
    title: "QR Code Generator",
  },
  {
    href: "https://life-span-tracker.netlify.app/",
    src: "/images/lifespanTRACKER.png",
    alt: "LifeSpan Tracker",
    title: "LifeSpan Tracker",
  },
  {
    href: "https://gitupporfiles.netlify.app/",
    src: "/images/SearchGithup.png",
    alt: "GitHub Profiles",
    title: "GitHub Profiles",
  },
  {
    href: "https://mrsrestaurent.netlify.app/",
    src: "/images/Game.jpeg",
    alt: "Quiz Game",
    title: "Quiz Game",
  },
  {
    href: "https://percentify.netlify.app/",
    src: "/images/Percentify.png",
    alt: "Percentify",
    title: "Percentify",
  },
  {
    href: "https://my-counter0238e.netlify.app/",
    src: "/images/myCounter.png",
    alt: "My Counter",
    title: "My Counter",
  },
];




const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          src="https://kit.fontawesome.com/7a4b62b0a4.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>

      <header>
        <nav className="container">
          <div className="logo">Portfolio</div>
          <div id="bar">
           <BarChart id='iconbar'size={24} color="#000" />
            <ul id="ulist_first">
              <li><Link href="#hero">Home</Link></li>
              <li><Link href="#project">Projects</Link></li>
              <li><Link href="#contactpage">Contact</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <ul id="ulist">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#project">Projects</Link></li>
            <li><Link href="#contactpage">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="container">
            <div className="hero_image animate__animated animate__bounceInLeft">
              <Image
                className="profilepic"
                src="/images/portfolio.jpeg"
                alt="hero image"
                width={200}
                height={200}
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
                <Image src="/images/javascript.png" alt="JavaScript" width={50} height={50} />
                <Image src="/images/TyopeScript.webp" alt="TypeScript" width={50} height={50} />
                <Image src="/images/react.png" alt="React" width={50} height={50} />
                <Image src="/images/bootstrap-logo.png" alt="Bootstrap" width={50} height={50} />
              </div>
            </div>
          </div>
        </section>







        <section id="project">
      <h2>PROJECTS</h2>
      <div className="container">
        <div className="project_container">
          {projects.map((project, index) => (
            <div className="grid_item" key={index}>
              <div className="card">
                <Link href={project.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={300}
                    height={200}
                  />
                  <h3>{project.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>












        <section id="contactpage">
          <div className="container">
            <h2>Let's work together...</h2>
            <div className="top_contact">
              <div className="contact_way">
                <Link href="https://linkedin.com/in/abdul-moiz-12457a28a/">
                
                    <i className="fab fa-linkedin"></i>
                    <h3>LinkedIn</h3>
                
                </Link>
              </div>
              <div className="contact_way">
                <i className="fa fa-twitter"></i>
                <h3>Twitter</h3>
              </div>
              <div className="contact_way">
                <Link href="mailto:abdulmoizs2005@gmail.com">
                  @ Send Mail
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">Created By Abdul Moiz</div>
      </footer>
    </>
  );
};

export default Portfolio;
