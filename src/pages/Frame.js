import { useCallback, useEffect } from "react";

const Frame = () => {
  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='home']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end" });
    }
  }, []);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end" });
    }
  }, []);

  const onPredictClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='predict']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end" });
    }
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end" });
    }
  }, []);

  return (
    <div className="relative bg-gray-200 w-full h-[8000px] overflow-hidden text-left text-81xl text-white font-open-sans sm:w-[1440px] mq1024:w-[1416%]">
      <div className="absolute top-[0px] left-[0px] w-[1416px] h-[1026px] bg-[url('/public/frame-7@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[29px] left-[164px] rounded-21xl bg-gray-100 w-[1097px] h-24 lg:w-[1097px] md:w-full md:[transform:rotate(0deg)]">
          <div className="absolute top-[1px] left-[996px] rounded-21xl bg-white w-[101px] h-[93px]" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[49px] text-4xl font-bold font-open-sans text-white text-left inline-block w-[133px] h-[49px]"
            onClick={onHomeClick}
          >
            Home
            <div
              className="absolute left-[0] bottom-[-4303px]"
              data-scroll-to="home"
            />
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[203px] text-4xl font-bold font-open-sans text-white text-left inline-block w-[133px] h-[49px]"
            onClick={onAboutClick}
          >
            About
            <div
              className="absolute left-[0] bottom-[-1700px]"
              data-scroll-to="about"
            />
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[375px] text-4xl font-bold font-open-sans text-white text-left inline-block w-[132px] h-[49px]"
            onClick={onPredictClick}
          >
            Predict
            <div
              className="absolute left-[0] bottom-[-4350px]"
              data-scroll-to="predict"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[668px] text-4xl font-bold font-open-sans text-white text-left inline-block w-[133px] h-[49px]">
            FAQs
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[840px] text-4xl font-bold font-open-sans text-white text-left inline-block w-[133px] h-[49px]">
            Login
          </button>
          <img
            className="absolute top-[13px] left-[528px] w-20 h-[70px] object-cover [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
            alt=""
            src="/screenshot-20230921-at-929-1@2x.png"
            data-animate-on-scroll
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[28px] left-[1028px] w-[38px] h-[38px] bg-[url('/public/account@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </div>
        <b className="absolute top-[237px] left-[49px] inline-block w-[579px] h-[358px]">
          <p className="m-0">{`Diagnostic Expert System `}</p>
        </b>
        <div className="absolute top-[622px] left-[49px] text-[55px] font-clash-display inline-block w-[579px] h-[134px]">
          at your finger tips
        </div>
        <div
          className="absolute top-[737px] left-[49px] w-[493px] h-[86px] cursor-pointer hover:animate-[3s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
          onClick={onFrameContainer2Click}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] rounded-6xl [background:linear-gradient(91.64deg,_#ced2f6,_#083677)] w-[457px] h-[71px]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[15px] left-[115px] text-11xl leading-[145.59%] font-bold font-open-sans text-white text-left inline-block w-[378px] h-[71px]">
            Start Program
          </button>
          <div
            className="absolute left-[0] bottom-[-5800px]"
            data-scroll-to="frameContainer2"
          />
        </div>
      </div>
      <div className="absolute top-[1089px] left-[-25px] w-[1501px] h-[1041px] text-41xl">
        <div className="absolute top-[0px] left-[471px] rounded-6xl bg-darkslateblue-100 shadow-[0px_371px_104px_rgba(0,_0,_0,_0),_0px_238px_95px_rgba(0,_0,_0,_0.01),_0px_134px_80px_rgba(0,_0,_0,_0.05),_0px_59px_59px_rgba(0,_0,_0,_0.09),_0px_15px_33px_rgba(0,_0,_0,_0.1)] w-[540px] h-[118px]" />
        <h1 className="m-0 absolute top-[20px] left-[494px] text-inherit font-bold font-inherit inline-block w-[504px] h-[76px]">
          Our Technology
        </h1>
        <h1 className="m-0 absolute top-[181px] left-[74px] text-81xl font-bold font-inherit inline-block w-[552px] h-60">
          Disease Prediction
        </h1>
        <div className="absolute top-[443px] left-[74px] text-6xl leading-[248%] font-clash-display inline-block w-[806px] h-60">
          Disease prediction is the process of using various data sources and
          analytical techniques to anticipate the likelihood of an individual or
          a population developing a particular medical condition or illness.
          This proactive approach to healthcare aims to identify potential
          health risks and provide early intervention or preventive measures,
          ultimately improving health outcomes and reducing the burden on
          healthcare systems.
        </div>
        <img
          className="absolute top-[145px] left-[835px] w-[606px] h-[784px] object-cover [&.animate]:animate-[3s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
          alt=""
          src="/disease@2x.png"
          data-animate-on-scroll
        />
        <div className="absolute top-[956px] left-[48px] w-[1417px] h-[85px] text-11xl text-cornflowerblue">
          <b className="absolute top-[2.07px] left-[0px] leading-[274.58%] inline-block w-[806px] h-60">
            Disease Prediction
          </b>
          <b className="absolute top-[1.38px] left-[357.76px] leading-[274.58%] inline-block w-[806px] h-60">
            Disease Prediction
          </b>
          <b className="absolute top-[0.69px] left-[715.52px] leading-[274.58%] inline-block w-[806px] h-60">
            Disease Prediction
          </b>
          <b className="absolute top-[0px] left-[1073.28px] leading-[274.58%] inline-block w-[806px] h-60">
            Disease Prediction
          </b>
        </div>
        <img
          className="absolute top-[950px] left-[25px] w-[1501px] h-3"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[1035px] left-[25px] w-[1501px] h-3"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className="absolute top-[4408px] left-[-206px] bg-gray-200 w-[1742px] h-[1330px] text-41xl">
        <div className="absolute top-[35px] left-[635px] rounded-6xl bg-darkslateblue-100 shadow-[0px_371px_104px_rgba(0,_0,_0,_0),_0px_238px_95px_rgba(0,_0,_0,_0.01),_0px_134px_80px_rgba(0,_0,_0,_0.05),_0px_59px_59px_rgba(0,_0,_0,_0.09),_0px_15px_33px_rgba(0,_0,_0,_0.1)] w-[540px] h-[118px]">
          <b className="absolute top-[21px] left-[51px] inline-block w-[462px] h-[76px]">
            Our Expertise
          </b>
        </div>
        <div className="absolute top-[245px] left-[1001px] w-[581px] h-[452px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-6xl w-[560px] h-[452px] object-cover"
            alt=""
            src="/unsplashcuqp2jzz-ly@2x.png"
          />
          <b className="absolute top-[359px] left-[214px] inline-block w-[367px] h-[86px]">
            <p className="m-0">Chemistry</p>
          </b>
        </div>
        <div className="absolute top-[739px] left-[271px] w-[662px] h-[452px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-6xl w-[560px] h-[452px] object-cover"
            alt=""
            src="/unsplashiy7qyzos1bo@2x.png"
          />
          <b className="absolute top-[363px] left-[295px] inline-block w-[367px] h-[71px]">
            Genetic
          </b>
        </div>
        <div className="absolute top-[739px] left-[998px] w-[686px] h-[452px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-6xl w-[560px] h-[452px] object-cover"
            alt=""
            src="/unsplashdjo3injpaoe@2x.png"
          />
          <b className="absolute top-[363px] left-[319px] inline-block w-[367px] h-[71px]">
            Bionics
          </b>
        </div>
        <div className="absolute top-[245px] left-[271px] w-[753px] h-[474px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-6xl w-[560px] h-[452px] object-cover"
            alt=""
            src="/unsplashghbjk2pnelq@2x.png"
          />
          <b className="absolute top-[359px] left-[230px] inline-block w-[523px] h-[115px]">
            Genomics
          </b>
        </div>
      </div>
      <div className="absolute top-[2191px] left-[40px] w-[1364px] h-[722px]">
        <button className="cursor-pointer [border:none] p-0 bg-darkslateblue-100 absolute top-[651px] left-[777px] rounded-6xl w-[443px] h-[71px]">
          <b className="absolute top-[15px] left-[164px] text-11xl leading-[145.59%] inline-block font-open-sans text-white text-left w-[121px] h-[38px]">
            Predict
          </b>
        </button>
        <div className="absolute top-[0px] left-[0px] inline-block w-[1024px] h-60">
          <p className="m-0">
            <b>{`Disease Prediction `}</b>
          </p>
          <p className="m-0 text-[73px] font-clash-display">
            at your door steps
          </p>
        </div>
        <div className="absolute top-[240px] left-[0px] text-6xl leading-[248%] font-clash-display inline-block w-[614px] h-60">
          {" "}
          "Disease Prediction at Your Doorstep" is a forward-looking healthcare
          approach that leverages technology and data to provide personalized
          health insights and early intervention options to individuals and
          communities. It aims to make healthcare more accessible, convenient,
          and proactive, ultimately leading to better health outcomes and a
          reduced burden on the healthcare system.
        </div>
        <img
          className="absolute top-[191px] left-[680px] w-[684px] h-[456px] object-cover"
          alt=""
          src="/knockknock-delivery-arrived@2x.png"
        />
      </div>
      <div className="absolute top-[5774px] left-[40px] w-[1317px] h-[767px] text-xl font-poppins">
        <div className="absolute top-[0px] left-[0px] rounded-6xl bg-darkslateblue-200 w-[1308px] h-[767px]" />
        <div className="absolute top-[219px] left-[786px] h-[415px] flex flex-col items-start justify-start gap-[38px]">
          <div className="relative w-[440px] h-[84px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[179px] h-[49px]">
              Age
            </div>
            <input
              className="[border:none] bg-white absolute top-[28px] left-[0px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[440px] h-14"
              type="text"
            />
          </div>
          <div className="relative w-[440px] h-[83px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[302px] h-[49px]">
              Second Symptom*
            </div>
            <input
              className="[border:none] bg-white absolute top-[27px] left-[0px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[440px] h-14"
              type="text"
            />
          </div>
          <div className="relative w-[440px] h-[84px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[179px] h-[49px]">
              Fourth Symptom*
            </div>
            <input
              className="[border:none] bg-white absolute top-[28px] left-[0px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[440px] h-14"
              type="text"
            />
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-darkslateblue-100 absolute top-[595px] left-[786px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[440px] h-14">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[10px] left-[151px] text-xl font-bold font-poppins text-white text-left inline-block w-[163px] h-[35px]">
            Predict Disease
          </button>
        </button>
        <div className="absolute top-[220px] left-[82px] flex flex-col items-start justify-start gap-[39px]">
          <div className="relative w-[504px] h-[83px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[179px] h-[49px]">
              Name
            </div>
            <input
              className="[border:none] bg-white absolute top-[27px] left-[0px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[504px] h-14"
              type="text"
            />
          </div>
          <div className="relative w-[504px] h-[84px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[179px] h-[49px]">
              First Symptom*
            </div>
            <input
              className="[border:none] bg-white absolute top-[28px] left-[0px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[504px] h-14"
              type="text"
            />
          </div>
          <div className="relative w-[504px] h-[84px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[179px] h-[49px]">
              Third Symptom*
            </div>
            <input
              className="[border:none] bg-white absolute top-[28px] left-[0px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[504px] h-14"
              type="text"
            />
          </div>
          <div className="relative w-[504px] h-[62px] text-black">
            <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[0px] left-[0px] rounded-3xs shadow-[81px_55px_27px_rgba(0,_0,_0,_0),_52px_35px_25px_rgba(0,_0,_0,_0.01),_29px_20px_21px_rgba(0,_0,_0,_0.05),_13px_9px_16px_rgba(0,_0,_0,_0.09),_3px_2px_9px_rgba(0,_0,_0,_0.1)] w-[504px] h-14" />
            <div className="absolute top-[13px] left-[16px] inline-block w-[232px] h-[49px]">
              Add more symptoms
            </div>
            <div className="absolute top-[12px] left-[459px] inline-block w-[22px] h-[26px]">
              +
            </div>
          </div>
        </div>
        <div className="absolute top-[24px] left-[12px] w-[1296px] h-[108px] text-[70px] font-open-sans">
          <div className="absolute top-[0px] left-[344px] rounded-6xl bg-darkslateblue-100 w-[643px] h-[108px]" />
          <b className="absolute top-[9px] left-[441px] leading-[131.5%] inline-block w-[531px] h-[57.78px]">
            Let’s Predict
          </b>
        </div>
      </div>
      <div className="absolute top-[3747px] left-[93px] w-[1288px] h-[572px] text-26xl">
        <b className="absolute top-[0px] left-[463px] text-[50px] leading-[131.5%] inline-block text-cornflowerblue w-[492px] h-[41px]">
          Predict Menu
        </b>
        <div className="absolute top-[213px] left-[681px] w-[583px] h-[90px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] rounded-6xl [background:linear-gradient(130.06deg,_#e4e7ff,_#083677)] w-[572px] h-[90px]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[16px] left-[140px] text-26xl leading-[131.5%] font-bold font-open-sans text-white text-left inline-block w-[443px] h-[58px]">
            View history
          </button>
        </div>
        <div
          className="absolute top-[213px] left-[0px] rounded-6xl [background:linear-gradient(130.06deg,_#e4e7ff,_#083677)] w-[572px] h-[90px] cursor-pointer"
          onClick={onFrameContainer1Click}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[16px] left-[84px] text-26xl leading-[131.5%] font-bold font-open-sans text-white text-left inline-block w-[443px] h-[58px]">
            Predict Disease
          </button>
          <div
            className="absolute left-[0] bottom-[-2600px]"
            data-scroll-to="frameContainer1"
          />
        </div>
        <div
          className="absolute top-[482px] left-[0px] w-[601px] h-[90px] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] w-[601px] h-[90px]">
            <div className="absolute top-[0px] left-[0px] rounded-6xl [background:linear-gradient(130.06deg,_#e4e7ff,_#083677)] w-[572px] h-[90px]" />
            <b className="absolute top-[16px] left-[158px] leading-[131.5%] inline-block w-[443px] h-[58px]">
              Feedback
            </b>
          </div>
          <div
            className="absolute left-[0] bottom-[-3250px]"
            data-scroll-to="frameContainer"
          />
        </div>
        <div className="absolute top-[482px] left-[687px] w-[601px] h-[90px]">
          <div className="absolute top-[0px] left-[0px] rounded-6xl [background:linear-gradient(130.06deg,_#e4e7ff,_#083677)] w-[572px] h-[90px]" />
          <b className="absolute top-[16px] left-[158px] leading-[131.5%] inline-block w-[443px] h-[58px]">
            Contact Us
          </b>
        </div>
      </div>
      <div className="absolute top-[6696px] left-[64px] rounded-6xl bg-gainsboro w-[1317px] h-[745px] text-21xl text-black">
        <b className="absolute top-[25px] left-[556.75px] text-41xl inline-block w-[239.02px] h-[85px]">
          Rate Us
        </b>
        <b className="absolute top-[155px] left-[50.88px] inline-block w-[358.05px] h-[52px]">
          Give Rating to us
        </b>
        <b className="absolute top-[153px] left-[958.95px] inline-block w-[358.05px] h-[52px]">
          User Experience
        </b>
        <div className="absolute top-[214px] left-[965.67px] w-[320.61px] flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-[58px] h-[58px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="relative w-[58px] h-[58px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="relative w-[58px] h-[58px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="relative w-14 h-14 object-cover"
            alt=""
            src="/star1@2x.png"
          />
          <img
            className="relative w-14 h-14 object-cover"
            alt=""
            src="/star1@2x.png"
          />
        </div>
        <input
          className="[border:none] bg-white absolute top-[311px] left-[50.88px] rounded-mini w-[318.69px] h-[203px]"
          type="text"
        />
        <input
          className="[border:none] bg-white absolute top-[309px] left-[968.55px] rounded-mini w-[318.69px] h-[203px]"
          type="text"
        />
        <div className="absolute top-[323px] left-[64.31px] text-mini font-clash-display text-darkgray inline-block w-[99.83px] h-[21px]">
          Review Here
        </div>
        <div className="absolute top-[323px] left-[982.95px] text-mini font-clash-display text-darkgray inline-block w-[99.83px] h-8">
          Review Here
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-cornflowerblue absolute top-[442px] left-[506.83px] rounded-6xl w-[339.81px] h-[72px]" />
        <b className="absolute top-[450px] left-[597.07px] text-26xl inline-block text-white w-[201.58px] h-14">
          Submit
        </b>
        <div className="absolute top-[220px] left-[50.88px] w-[320.61px] flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-[58px] h-[58px] object-cover"
            alt=""
            src="/star2@2x.png"
          />
          <img
            className="relative w-[58px] h-[58px] object-cover"
            alt=""
            src="/star2@2x.png"
          />
          <img
            className="relative w-[58px] h-[58px] object-cover"
            alt=""
            src="/star2@2x.png"
          />
          <img
            className="relative w-14 h-14 object-cover"
            alt=""
            src="/star3@2x.png"
          />
          <img
            className="relative w-14 h-14 object-cover"
            alt=""
            src="/star3@2x.png"
          />
        </div>
      </div>
      <section className="absolute top-[2966px] left-[50px] w-[1387px] h-[653px] text-left text-106xl text-white font-open-sans">
        <div className="absolute top-[0px] left-[0px] w-[1387px] h-[653px]">
          <div className="absolute top-[20px] left-[580.74px] w-[806.26px] h-[269px]">
            <div className="absolute top-[25px] left-[263px] rounded-6xl [background:linear-gradient(179.74deg,_#9ca6ff,_rgba(0,_25,_255,_0.55))] w-[171px] h-[122px]" />
            <b className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[125.46%] inline-block whitespace-pre-wrap w-[808px] h-[269px]">
              <p className="m-0">
                <span className="text-106xl">{`Let  `}</span>
                <span className="text-81xl">AI</span>
                <span>{`   do `}</span>
              </p>
              <p className="m-0">the work!</p>
            </b>
          </div>
          <div className="absolute top-[362px] left-[580.74px] text-6xl leading-[248%] font-clash-display inline-block w-[728.42px]">
            Using artificial intelligence (AI) for disease prediction has
            revolutionized healthcare by enabling more accurate and proactive
            identification of disease risks. Here are key ways in which AI is
            employed for disease prediction:
          </div>
          <div className="absolute top-[0px] left-[0px] w-[516.88px] h-[653px]">
            <img
              className="absolute top-[197px] left-[0px] w-[516.88px] h-[456px] object-cover"
              alt=""
              src="/lettering-artificial-intelligence-with-tablet-robot-and-gears-text@2x.png"
            />
            <img
              className="absolute top-[0px] left-[115.75px] w-[175.62px] h-[291px] object-cover"
              alt=""
              src="/down-arrows@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
