import { useCallback } from "react";

const BlogPageAkr = () => {
  const onProjectsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCertificationsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactMeClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactMeContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameLinkClick = useCallback(() => {
    window.location.href = "mailto:ar0829@srmist.edu.in";
  }, []);

  const onFrameLink1Click = useCallback(() => {
    window.open("https://akr-next-portfolio.vercel.app/#home");
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://github.com/easyans/youtube-clone");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://akr-next-portfolio.vercel.app/#home");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open(
      "https://github.com/easyans/Data_analysis_with_Python_COVID_19-Cases"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://github.com/easyans/openai_ai_chatitup");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open("https://github.com/easyans/cn-mini-project");
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://github.com/easyans/Todo-list-ISM-Project");
  }, []);

  const onFrameButton6Click = useCallback(() => {
    window.open("https://github.com/easyans");
  }, []);

  const onFrameContainer31Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameButton7Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/aakash-raj-670334217/");
  }, []);

  const onFrameButton8Click = useCallback(() => {
    window.open(
      "https://courses.yl-ptech.skillsnetwork.site/certificates/9bd64d208ee346d891b2badf9788aa99"
    );
  }, []);

  const onFrameButton9Click = useCallback(() => {
    window.open(
      "https://www.coursera.org/account/accomplishments/verify/PRXQLH29S3DL"
    );
  }, []);

  const onFrameButton10Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/aakash-raj-670334217/");
  }, []);

  const onFrameContainer33Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer37Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer38Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVisitMyGitHubClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-white w-full h-[5812px] overflow-hidden text-left text-base text-blue-100 font-chakra-petch">
      <div className="absolute top-[20px] left-[25px] flex flex-row p-2.5 items-start justify-start">
        <div className="relative font-semibold">{`< Aakash Raj />`}</div>
      </div>
      <div
        className="absolute top-[191px] left-[0px] rounded-xxs bg-white shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.02),_4px_4px_8px_rgba(0,_0,_0,_0.15)] w-[1440px] h-[630px]"
        data-scroll-to="rectangle"
      />
      <div className="absolute top-[30px] left-[780px] w-[624px] flex flex-row items-start justify-start gap-[24px]">
        <div className="relative font-semibold hover:text-green-200 hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
          Skills
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-chakra-petch text-blue-100 text-left inline-block hover:text-green-100 hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onProjectsClick}
        >
          Projects
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-chakra-petch text-blue-100 text-left inline-block hover:text-green-100 hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onCertificationsClick}
        >
          Certifications
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-chakra-petch text-blue-100 text-left inline-block hover:text-green-100 hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onContactMeClick}
        >
          Contact Me
        </button>
      </div>
      <div className="absolute top-[206px] left-[829px] w-[575px] flex flex-col py-0 pr-0 pl-2.5 box-border items-start justify-start">
        <img
          className="relative w-[566px] h-[322px] shrink-0 object-cover"
          alt=""
          src="../undraw-programming-re-kg9v-1@2x.png"
        />
      </div>
      <div className="absolute top-[247px] left-[50px] flex flex-col items-start justify-start gap-[8.5px] text-lg text-gray-300">
        <div className="flex flex-row items-center justify-start gap-[1px]">
          <div className="relative font-semibold">{`Hi all `}</div>
          <img
            className="relative w-[49px] h-[49px] shrink-0"
            alt=""
            src="../emoji.svg"
          />
          <div className="relative font-semibold"> I’m Aakash Raj</div>
        </div>
        <div className="flex flex-row py-5 px-0 items-start justify-start text-[29px] text-gray-200">
          <div className="relative font-semibold">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`A passionate Frontend & UI/UX Developer 👾 having an `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              experience of building Web and Mobile applications with
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              JavaScript / Reactjs / Nodejs / React and some other cool
            </p>
            <p className="m-0">libraries and frameworks</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[569px] left-[50px] flex flex-col items-start justify-start text-white">
        <div className="flex flex-row p-[5px] items-start justify-start gap-[40px]">
          <a
            className="[text-decoration:none] rounded-xxs bg-blue-200 flex flex-row py-2.5 px-7 items-start justify-start cursor-pointer text-[inherit] hover:bg-green-400 hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1] sm:w-full sm:h-14 sm:rounded-xxs"
            href="mailto:ar0829@srmist.edu.in"
            onClick={onFrameLinkClick}
          >
            <div className="relative font-semibold">Contact Me</div>
          </a>
          <a
            className="[text-decoration:none] rounded-xxs bg-blue-200 flex flex-row py-2.5 px-7 items-start justify-start cursor-pointer text-[inherit] hover:bg-green-400 hover:animate-[0s_ease-in_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1] sm:w-full sm:h-[56%]"
            href="https://akr-next-portfolio.vercel.app/#home"
            target="_blank"
            onClick={onFrameLink1Click}
          >
            <div className="relative font-semibold">Portfolio Page</div>
          </a>
        </div>
      </div>
      <div className="absolute top-[871px] left-[0px] rounded-xxs bg-white shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.02),_4px_4px_8px_rgba(0,_0,_0,_0.15)] w-[1440px] h-[629px]" />
      <div className="absolute top-[902px] left-[175px] h-[387px] flex flex-row items-start justify-start">
        <img
          className="relative w-[586px] h-[387px] shrink-0 object-cover"
          alt=""
          src="../working-1@2x.png"
        />
      </div>
      <div className="absolute top-[938px] left-[710px] font-semibold text-gray-200 inline-block w-[655px] h-[74px]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          A CRAZY FRONTEND DEVELOPER
        </p>
        <p className="m-0">WHO WANTS TO EXPLORE EVERY TECH STACK</p>
      </div>
      <div className="absolute top-[1247px] left-[989px] flex flex-row items-start justify-start gap-[50px] text-5xs text-gray-200">
        <div className="relative font-medium">MySQL</div>
        <div className="relative font-medium">Python</div>
      </div>
      <div className="absolute top-[1079px] left-[834.5px] flex flex-row items-start justify-start gap-[54px]">
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="../html-1@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="../css3-1@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="../javascript-1@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="../atom-1-1@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="../swift-1@2x.png"
        />
      </div>
      <div className="absolute top-[1139px] left-[840px] flex flex-col items-center justify-start text-5xs text-gray-200">
        <div className="flex flex-row items-start justify-start gap-[59px]">
          <div className="relative font-medium">HTML</div>
          <div className="relative font-medium">CSS</div>
          <div className="relative font-medium">JavaScript</div>
          <div className="relative font-medium">React</div>
          <div className="relative font-medium">Swift</div>
        </div>
      </div>
      <div className="absolute top-[1187px] left-[993px] flex flex-row items-center justify-start gap-[45px]">
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="../mysql-1@2x.png"
        />
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="../python-1@2x.png"
        />
      </div>
      <div className="absolute top-[1289px] left-[761px] flex flex-col items-start justify-start gap-[22px] text-2xs text-black">
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="relative w-[30px] h-9 shrink-0"
            alt=""
            src="../emoji1.svg"
          />
          <div className="relative font-medium inline-block w-[607px] shrink-0">
            <p className="[margin-block-start:0] [margin-block-end:5px]">{`I Develop highly interactive Front end / User Interfaces for your `}</p>
            <p className="m-0">web and mobile applications</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="relative w-[30px] h-9 shrink-0"
            alt=""
            src="../vector.svg"
          />
          <div className="relative font-medium inline-block w-[366px] shrink-0">
            I Develop Sockets for Web Applications
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <img
            className="relative w-[30px] h-9 shrink-0"
            alt=""
            src="../vector.svg"
          />
          <div className="relative font-medium">
            <p className="[margin-block-start:0] [margin-block-end:5px]">{`I also perform real-time data analysis using software tools `}</p>
            <p className="m-0">and programming languages such as Python.</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1550px] left-[0px] rounded-xxs bg-white shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.02),_4px_4px_8px_rgba(0,_0,_0,_0.15)] w-[1440px] h-[1120px]"
        data-scroll-to="rectangle2"
      />
      <div className="absolute top-[1574px] left-[0px] bg-white w-[1440px] h-[1024px] overflow-hidden text-sm text-gray-200">
        <div className="absolute top-[40px] left-[378px] h-[84px] flex flex-row items-start justify-start text-xl text-blue-100">
          <div className="relative font-medium">{`< Open Source Projects />`}</div>
        </div>
        <div className="absolute top-[552px] left-[30px] rounded-sm bg-white shadow-[-8px_-8px_15px_rgba(252,_252,_252,_0.8),_9px_9px_19px_-5px_rgba(0,_0,_0,_0.2)] box-border w-[407px] h-[268px] border-[0.5px] border-solid border-gray-100" />
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[749px] left-[157px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButtonClick}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Code
          </div>
        </button>
        <div className="absolute top-[648px] left-[48px] flex flex-row items-start justify-start text-3xs">
          <img
            className="relative w-[41px] h-[41px] shrink-0"
            alt=""
            src="../emoji3.svg"
          />
          <div className="relative font-semibold ml-[-20px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              🚀 A YouTube Clone website created
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`using React Js and Rapid API. This `}</p>
            <p className="m-0">Provides the services same like YouTube...</p>
          </div>
        </div>
        <div className="absolute top-[581px] left-[98px] flex flex-row items-center justify-start gap-[12px] text-gray-400">
          <img
            className="relative w-[33px] h-[35px] shrink-0"
            alt=""
            src="../emoji4.svg"
          />
          <div className="relative font-semibold">YouTube-Clone</div>
        </div>
        <div className="absolute top-[179px] left-[30px] rounded-sm bg-white shadow-[-8px_-8px_15px_rgba(252,_252,_252,_0.8),_9px_9px_19px_-5px_rgba(0,_0,_0,_0.2)] box-border w-[407px] h-[268px] border-[0.5px] border-solid border-gray-100" />
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[377px] left-[157px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:flex hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton1Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Code
          </div>
        </button>
        <div className="absolute top-[276px] left-[63px] flex flex-row items-start justify-start text-3xs">
          <img
            className="relative w-[41px] h-[41px] shrink-0"
            alt=""
            src="../emoji5.svg"
          />
          <div className="relative font-semibold ml-[-20px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              🚀 Web Developer Portfolio Template
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{` that helps you to showcase my work `}</p>
            <p className="m-0">and skills as a Web developer....</p>
          </div>
        </div>
        <div className="absolute top-[202px] left-[98px] flex flex-row items-center justify-start gap-[12px] text-gray-400">
          <img
            className="relative w-[33px] h-[35px] shrink-0"
            alt=""
            src="../emoji6.svg"
          />
          <div className="relative font-semibold">Developer Portfolio</div>
        </div>
        <div className="absolute top-[552px] left-[516px] rounded-sm bg-white shadow-[-8px_-8px_15px_rgba(252,_252,_252,_0.8),_9px_9px_19px_-5px_rgba(0,_0,_0,_0.2)] box-border w-[407px] h-[268px] border-[0.5px] border-solid border-gray-100" />
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[749px] left-[644px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton2Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Code
          </div>
        </button>
        <div className="absolute top-[648px] left-[529px] flex flex-row items-start justify-start text-4xs">
          <img
            className="relative w-[41px] h-[41px] shrink-0"
            alt=""
            src="../emoji7.svg"
          />
          <div className="relative font-semibold ml-[-20px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="text-3xs">{`🚀 `}</span>
              <span>{`AI have taken a small dataset of `}</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>{`COVID-19 {The data used here is till 29-April-`}</span>
            </p>
            <p className="m-0">
              <span>{`2020 and has records as on 29-April-2020}...`}</span>
            </p>
          </div>
        </div>
        <div className="absolute top-[581px] left-[610px] flex flex-row items-center justify-start gap-[12px] text-gray-400">
          <img
            className="relative w-[33px] h-[35px] shrink-0"
            alt=""
            src="../emoji8.svg"
          />
          <div className="relative font-semibold">Data Analysis</div>
        </div>
        <div className="absolute top-[179px] left-[516px] rounded-sm bg-white shadow-[-8px_-8px_15px_rgba(252,_252,_252,_0.8),_9px_9px_19px_-5px_rgba(0,_0,_0,_0.2)] box-border w-[407px] h-[268px] border-[0.5px] border-solid border-gray-100" />
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[377px] left-[644px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton3Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Code
          </div>
        </button>
        <div className="absolute top-[276px] left-[539px] flex flex-row items-start justify-start gap-[3px] text-3xs">
          <img
            className="relative w-[25px] h-[25px] shrink-0"
            alt=""
            src="../emoji9.svg"
          />
          <div className="relative font-semibold inline-block w-[336px] shrink-0">
            Chat GPT is essentially a variant of Open AI’s popular GPT-3.5
            software that’s been designed to carry....
          </div>
        </div>
        <div className="absolute top-[202px] left-[595px] flex flex-row items-center justify-start gap-[12px] text-gray-400">
          <img
            className="relative w-[33px] h-[35px] shrink-0"
            alt=""
            src="../emoji10.svg"
          />
          <div className="relative font-semibold">Open AI Chat GPT</div>
        </div>
        <div className="absolute top-[552px] left-[1002px] rounded-sm bg-white shadow-[-8px_-8px_15px_rgba(252,_252,_252,_0.8),_9px_9px_19px_-5px_rgba(0,_0,_0,_0.2)] box-border w-[407px] h-[268px] border-[0.5px] border-solid border-gray-100" />
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[749px] left-[1143px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton4Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Code
          </div>
        </button>
        <div className="absolute top-[648px] left-[1015px] flex flex-row items-start justify-start text-4xs">
          <img
            className="relative w-[41px] h-[41px] shrink-0"
            alt=""
            src="../emoji11.svg"
          />
          <div className="relative font-semibold ml-[-20px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="text-3xs">{`🚀 `}</span>
              <span>This is a simple game of tic-tac-toe</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>developed in Python. It allows two players to</span>
            </p>
            <p className="m-0">
              <span>play with one another. Using Sockets the....</span>
            </p>
          </div>
        </div>
        <div className="absolute top-[581px] left-[1080px] flex flex-row items-center justify-start gap-[12px] text-gray-400">
          <img
            className="relative w-[33px] h-[35px] shrink-0"
            alt=""
            src="../emoji12.svg"
          />
          <div className="relative font-semibold">Tic-Tac-Toe Game</div>
        </div>
        <div className="absolute top-[179px] left-[1002px] rounded-sm bg-white shadow-[-8px_-8px_15px_rgba(252,_252,_252,_0.8),_9px_9px_19px_-5px_rgba(0,_0,_0,_0.2)] box-border w-[407px] h-[268px] border-[0.5px] border-solid border-gray-100" />
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[377px] left-[1143px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton5Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Code
          </div>
        </button>
        <div className="absolute top-[276px] left-[1024px] flex flex-row items-start justify-start gap-[3px] text-3xs">
          <img
            className="relative w-[25px] h-[25px] shrink-0"
            alt=""
            src="../emoji13.svg"
          />
          <div className="relative font-semibold inline-block w-[336px] shrink-0">
            Responsive To-Do list is a list of tasks you need to complete or
            things that you want to do...
          </div>
        </div>
        <div className="absolute top-[201px] left-[1064px] flex flex-row items-center justify-start gap-[12px] text-gray-400">
          <img
            className="relative w-[33px] h-[35px] shrink-0"
            alt=""
            src="../emoji10.svg"
          />
          <div className="relative font-semibold">Responsive todo list</div>
        </div>
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-blue-200 absolute top-[900px] left-[594px] rounded-xxs flex flex-row items-start justify-start hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton6Click}
        >
          <div className="relative text-base font-semibold font-chakra-petch text-white text-left">
            More Projects
          </div>
        </button>
        <div
          className="absolute top-[15px] left-[21px] flex flex-row items-center justify-start cursor-pointer text-5xs text-blue-100"
          onClick={onFrameContainer31Click}
        >
          <img
            className="relative w-[25px] h-[25px] shrink-0 overflow-hidden"
            alt=""
            src="../.svg"
          />
          <b className="relative leading-[160%]">Go Back</b>
        </div>
      </div>
      <div
        className="absolute top-[2711px] left-[0px] rounded-xxs bg-white shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.02),_4px_4px_8px_rgba(0,_0,_0,_0.15)] w-[1440px] h-[1120px]"
        data-scroll-to="rectangle1"
      />
      <div className="absolute top-[2774px] left-[0px] bg-white w-[1440px] h-[1024px] overflow-hidden text-xs text-black">
        <div className="absolute top-[40px] left-[484px] h-[84px] flex flex-row items-start justify-start text-xl text-blue-100">
          <div className="relative font-medium">{`< Certifications />`}</div>
        </div>
        <div className="absolute top-[204px] left-[30px] rounded-small bg-white shadow-[-4px_-4px_8px_rgba(231,_231,_231,_0.5),_4px_4px_8px_rgba(108,_108,_108,_0.2)] w-[407px] h-[616px]" />
        <div className="absolute top-[204px] left-[517px] rounded-small bg-white shadow-[-4px_-4px_8px_rgba(231,_231,_231,_0.5),_4px_4px_8px_rgba(108,_108,_108,_0.2)] w-[407px] h-[616px]" />
        <div className="absolute top-[493px] left-[539px] text-sm font-medium">
          AWS Cloud Technical Essentials
        </div>
        <div className="absolute top-[204px] left-[1004px] rounded-small bg-white shadow-[-4px_-4px_8px_rgba(231,_231,_231,_0.5),_4px_4px_8px_rgba(108,_108,_108,_0.2)] w-[407px] h-[616px]" />
        <div className="absolute top-[493px] left-[1014px] text-[24.5px] font-medium">
          2022 Web Development Bootcamp
        </div>
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-blue-200 absolute top-[900px] left-[558px] rounded-xxs flex flex-row items-start justify-start hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton7Click}
        >
          <div className="relative text-base font-semibold font-chakra-petch text-white text-left">
            More Certifications
          </div>
        </button>
        <img
          className="absolute top-[273px] left-[102px] rounded-lg w-[271px] h-[180px] object-cover"
          alt=""
          src="../ibm2-1@2x.png"
        />
        <div className="absolute top-[493px] left-[81px] text-sm font-medium">
          IBM Blockchain Essentials
        </div>
        <div className="absolute top-[557px] left-[37px] font-medium text-gray-200 text-center">
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            Completed Certification
          </p>
          <p className="m-0">from IBM for Blockchain Essentials</p>
        </div>
        <div className="absolute top-[557px] left-[555px] font-medium text-gray-200 text-center">
          <p className="[margin-block-start:0] [margin-block-end:5px]">{`Coursera certifies successful `}</p>
          <p className="m-0">completion of AWS course</p>
        </div>
        <div className="absolute top-[557px] left-[1018px] font-medium text-gray-200 text-center">
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            Course Completion Certificate
          </p>
          <p className="m-0">from Udemy for Web Development</p>
        </div>
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[694px] left-[132px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton8Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Certificate
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[694px] left-[619px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton9Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Certificate
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-2.5 px-7 bg-green-300 absolute top-[694px] left-[1106px] rounded-xxs flex flex-row items-start justify-start hover:bg-indigo hover:cursor-pointer hover:animate-[0s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameButton10Click}
        >
          <div className="relative text-2xs font-semibold font-chakra-petch text-white text-left">
            View Certificate
          </div>
        </button>
        <img
          className="absolute top-[289px] left-[608px] w-[234px] h-[149px] object-cover"
          alt=""
          src="../awsss-1@2x.png"
        />
        <img
          className="absolute top-[273px] left-[1048px] rounded-lg w-[328.38px] h-[180px] object-cover"
          alt=""
          src="../udemy-1@2x.png"
        />
        <div
          className="absolute top-[27px] left-[37px] flex flex-row items-center justify-start cursor-pointer text-5xs text-blue-100"
          onClick={onFrameContainer33Click}
        >
          <img
            className="relative w-[25px] h-[25px] shrink-0 overflow-hidden"
            alt=""
            src="../.svg"
          />
          <b className="relative leading-[160%]">Go Back</b>
        </div>
      </div>
      <div className="absolute top-[3875px] left-[1px] rounded-xxs bg-white shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.02),_4px_4px_8px_rgba(0,_0,_0,_0.15)] w-[1440px] h-[1120px]" />
      <div
        className="absolute top-[3923px] left-[1px] bg-white w-[1440px] h-[1024px] overflow-hidden text-black"
        data-scroll-to="contactMeContainer"
      >
        <div className="absolute top-[40px] left-[511px] h-[84px] flex flex-row items-start justify-start text-xl text-blue-100">
          <div className="relative font-medium">{`< Contact Me />`}</div>
        </div>
        <div className="absolute top-[204px] left-[30px] font-semibold text-[40px]">
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            <span>Reach Out to me!</span>
          </p>
          <p className="m-0 text-[35px] text-gray-200">
            <span>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
              ALL.
            </span>
          </p>
        </div>
        <div className="absolute top-[379px] left-[31px] font-medium">
          "20 | Student at SRM University | Web Developer | Data Analysis "
        </div>
        <div className="absolute top-[482px] left-[69px] font-medium">
          Visakhapatnam , India
        </div>
        <div className="absolute top-[552px] left-[69px] font-medium">
          Open for opportunities: Yes
        </div>
        <a
          className="[text-decoration:none] absolute top-[646px] left-[38px] rounded-large w-[60px] h-[60px] bg-[url(../public/github2-1@3x.png)] bg-cover bg-no-repeat bg-[top]"
          href="https://github.com/easyans"
          target="_blank"
        />
        <a
          className="[text-decoration:none] absolute top-[646px] left-[133px] rounded-xxl w-[60px] h-[60px] bg-[url(../public/linkedin-1@3x.png)] bg-cover bg-no-repeat bg-[top]"
          href="https://www.linkedin.com/in/aakash-raj-670334217/"
        />
        <a
          className="[text-decoration:none] absolute top-[646px] left-[228px] rounded-base w-[60px] h-[60px] bg-[url(../public/facebook-1@3x.png)] bg-cover bg-no-repeat bg-[top]"
          href="https://leetcode.com/ar0829/"
          target="_blank"
        />
        <a
          className="[text-decoration:none] absolute top-[646px] left-[323px] rounded-base w-[60px] h-[60px] bg-[url(../public/stackoverflow-1@3x.png)] bg-cover bg-no-repeat bg-[top]"
          href="https://stackoverflow.com/users/20176528/aakash-raj-ra2011031010128"
          target="_blank"
        />
        <a
          className="[text-decoration:none] absolute top-[646px] left-[418px] w-[60px] h-[60px] bg-[url(../public/gmail-1@3x.png)] bg-cover bg-no-repeat bg-[top]"
          href="mailto:ar0829@srmist.edu.in?subject=Hey there!"
        />
        <img
          className="absolute top-[372px] left-[960px] w-[352.33px] h-[352.33px]"
          alt=""
          src="../ellipse-5.svg"
        />
        <img
          className="absolute top-[382px] left-[971px] rounded-[175px] w-[330px] h-[332px] object-cover"
          alt=""
          src="../oamn6334-1@2x.png"
        />
        <div className="absolute top-[909px] left-[573px] flex flex-row p-2.5 items-start justify-start">
          <div className="relative font-semibold">Give a ⭐ @easyans</div>
        </div>
        <div className="absolute top-[858px] left-[497px] flex flex-row p-2.5 items-start justify-start">
          <div className="relative font-semibold">
            Made by Aakash raj @easyans
          </div>
        </div>
        <a
          className="[text-decoration:none] absolute top-[737px] left-[39px] rounded-xxl w-[60px] h-[60px] bg-[url(../public/hackerrank-1@3x.png)] bg-cover bg-no-repeat bg-[top]"
          href="https://www.hackerrank.com/ar0829"
          target="_blank"
        />
        <div
          className="absolute top-[27px] left-[31px] flex flex-row items-center justify-start cursor-pointer text-5xs text-blue-100"
          onClick={onFrameContainer37Click}
        >
          <img
            className="relative w-[25px] h-[25px] shrink-0 overflow-hidden"
            alt=""
            src="../.svg"
          />
          <b className="relative leading-[160%]">Go Back</b>
        </div>
      </div>
      <div
        className="absolute top-[889px] left-[26px] flex flex-row items-center justify-start cursor-pointer text-5xs"
        onClick={onFrameContainer38Click}
      >
        <img
          className="relative w-[25px] h-[25px] shrink-0 overflow-hidden"
          alt=""
          src="../.svg"
        />
        <b className="relative leading-[160%]">Go Back</b>
      </div>
      <div className="absolute top-[5039px] left-[0px] rounded-xxs bg-white shadow-[-4px_-4px_8px_rgba(0,_0,_0,_0.02),_4px_4px_8px_rgba(0,_0,_0,_0.15)] w-[1440px] h-[773px]" />
      <div className="absolute top-[5039px] left-[calc(50%_-_122px)] shadow-[4px_4px_8px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start gap-[20px] text-xs">
        <img
          className="relative w-[45px] h-10 shrink-0 overflow-hidden"
          alt=""
          src="../terminalsolid-1.svg"
        />
        <div className="relative leading-[160%]">{`< GITHUB BLOG />`}</div>
      </div>
      <div className="absolute top-[5154px] left-[calc(50%_-_454px)] rounded-xxs bg-blue-200 shadow-[0px_2px_28px_rgba(0,_0,_0,_0.2)] w-[864px] h-[212px] overflow-hidden opacity-[0.95] text-xs text-white">
        <b className="absolute top-[calc(50%_-_66px)] left-[220px] leading-[130%]">
          Aakash raj
        </b>
        <div className="absolute top-[79px] left-[220px] text-2xs leading-[160%] inline-block w-[558px]">
          Hi there, I'm a front end developer and a student who loves codes and
          pixels
        </div>
        <img
          className="absolute top-[32px] left-[25px] rounded-lg w-[148px] h-[148px] object-cover"
          alt=""
          src="../rectangle-254@2x.png"
        />
        <img
          className="absolute top-[145px] left-[203px] rounded-large w-[35px] h-[35px] object-cover"
          alt=""
          src="../github2-11@2x.png"
        />
        <div className="absolute top-[147px] left-[248px]">easyans</div>
        <img
          className="absolute top-[133px] left-[345px] rounded-xxs w-[59px] h-[59px] object-cover"
          alt=""
          src="../rectangle-2@2x.png"
        />
        <div className="absolute top-[147px] left-[402px]">Pull Shark</div>
        <img
          className="absolute top-[143px] left-[528px] w-[35px] h-[35px] object-cover"
          alt=""
          src="../image-1@2x.png"
        />
        <div className="absolute top-[147px] left-[573px]">Quickdraw</div>
      </div>
      <div
        className="absolute top-[5704px] left-[475px] leading-[160%] font-medium cursor-pointer"
        onClick={onVisitMyGitHubClick}
      >{`< Visit My GitHub Page for More.../>`}</div>
      <img
        className="absolute top-[5395px] left-[147px] rounded-lg w-[1146px] h-[280px] object-cover"
        alt=""
        src="../image-2@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1440px] h-[103px] opacity-[0.1] border-[0.5px] border-solid border-gray-500" />
    </div>
  );
};

export default BlogPageAkr;
