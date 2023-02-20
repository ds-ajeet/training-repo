// import * as React from "react";
// import "../../index.css";
// import logofooter from "../../images/logo-footer.svg";
// import facebook from "../../images/facebook.svg";
// import instagram from "../../images/instagram.svg";
// import twitter from "../../images/twitter.svg";
// import youtube from "../../images/youtube.svg";
// import printest from "../../images/printest.svg";
// import { cookieText, cookiesUrl } from "../../../sites-global/global"
// import CookieConsent from "react-cookie-consent";
// import { StaticData } from "../../../sites-global/staticData";
// import { useEffect, useState } from "react";
// import Link from "../commons/Link";

// const Footer = (props: any) => {
// 	const { footer } = props;
// 	// const [isNavVisible, setNavVisibility] =  useState(false);
// 	const [isSmallScreen, setIsSmallScreen] = useState(false);
// 	console.log(footer)
// 	useEffect(() => {
// 		const mediaQuery = window.matchMedia("(max-width: 1024px)");
// 		mediaQuery.addListener(handleMediaQueryChange);
// 		handleMediaQueryChange(mediaQuery);

// 		return () => {
// 			mediaQuery.removeListener(handleMediaQueryChange);
// 		};
// 	}, []);

// 	const handleMediaQueryChange = mediaQuery => {
// 		if (mediaQuery.matches) {
// 			setIsSmallScreen(true);
// 		} else {
// 			setIsSmallScreen(false);
// 		}
// 	};
// 	if (typeof window !== "undefined") {
// 		mediaQuery = window?.innerWidth;
// 	}

// 	return (
// 		<>

// 			<footer className="site-footer">

// 				<div className="container">

// 					<div className="store-locator">
// 					<div className="company-logo mr-4">
// 							<img src={footer.c_matalan_footer_logo.url} alt="logo"/>
// 							</div>
// 						{footer.c_store_finder.map((storfinder: any) => {
// 							console.log(storfinder)
// 							return (
// 								<>
// 									<div className="store-inner">
// 										<img src={storfinder.icon.url} alt="store-finder" />
// 										<Link props={storfinder.cTA}/>

// 									</div>
// 								</>
// 							)
// 						})}

// 						<div className="store-inner flex flex-raw">
// 							<div>
// 							<img src={footer.c_fAQs.icon.url} alt="faq-icon" />

// 							<Link props={footer.c_fAQs.cTA} />
// 							</div>
// 							<div>

// 							<img src={footer.c_getAQuate.icon.url} alt="faq-icon" />

// 							<Link props={footer.c_getAQuate.cTA} />
// 							</div>
// 						</div>

// 					</div>

// 					<div className="link-sec-footer ">
// 					{footer.c_customer_services?
// 						<div className="footer-block">
// 							<h4 className="footer-block-title">{footer.c_customer_services.headerLinksHeading}</h4>
// 							<ul className="list-none">
// 								{footer.c_customer_services.headerLinks.map((customerService: any) => {
// 									return (<li>
// 											<Link props={customerService}/>
// 										</li>)
// 								})}
// 							</ul>
// 						</div>:''}
// 						{footer.c_about_matalan?
// 						<div className="footer-block">
// 							<h4 className="footer-block-title">{footer.c_about_matalan.headerLinksHeading}</h4>
// 							<ul className="list-none"><li>{footer.c_about_matalan.headerLinksHeading}</li>
// 								{footer.c_about_matalan.headerLinks.map((aboutMatalan: any) => {
// 									return (<li>
// 										<Link props={aboutMatalan}/>
// 										</li>)
// 								})}
// 							</ul>
// 						</div>:''}
// 						{footer.c_our_website?
// 						<div className="footer-block">
// 							<h4 className="footer-block-title">{footer.c_our_website.headerLinksHeading}</h4>
// 							<ul className="list-none">
// 								{footer.c_our_website.headerLinks.map((ourWebsite: any) => {
// 									return (<li>
// 										<Link props={ourWebsite}/>
// 									</li>)
// 								})}
// 							</ul>
// 						</div>:''}
// 						<div className="footer-block">
// 						<ul className="social-media-bx">
// 							{footer.c_socialIcons.map((icon: any) => {
// 								return (

// 									<>
// 										<li className=""> <a href={icon.cTA.link} target="_blank"><img src={icon.icon.url} height="20" alt="social" width="21" className="inline-block w-5 h-auto" /> </a> </li>
// 									</>
// 								)
// 							})}
// 						</ul>
// 						</div>

// 					</div>
// 					<div className="copyright-bx">
// 						<span className="text-xs flex-wrap" data-copyright="">
// 							{footer.c_footerDescription}</span>

// 					</div>

// 				</div>

// 			</footer>

// 			<CookieConsent
// 				buttonText={"Accept"}
// 				buttonStyle={{
// 					marginLeft: "100px",
// 				}}
// 			>
// 				<p>
// 					{cookieText}
// 					<a className="text-cookies-link" href={cookiesUrl}>
// 						{StaticData.cookie}
// 					</a>
// 					.
// 				</p>
// 			</CookieConsent>
// 		</>
// 	);
// };

// export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
// 	throw new Error("Function not implemented.");
// }

import * as React from "react";
import SubscribeForm from "../commons/Newsletter";

const Footer = (props: any) => {
  const Aboutm = props?._site?.c_aboutMgm?.headingLink?.map((link: any) => (
    <a className="navbar-item" href="#">
      <span>{link.label}</span>
      <br />
    </a>
  ));
  const customerService = props?._site?.c_customer_Services?.headingLink?.map(
    (link: any) => (
      <a className="navbar-item" href="#">
        <span>{link.label}</span>
        <br />
      </a>
    )
  );
   const countact = props?._site?.c_countact?.map((link: any) => (
     <a  className="navbar-item" href="#" >
       <span>{link.label}</span><br/>
     </a>
   ));
  return (
    <>
      <footer
        style={{ background: "#1e293e" }}
        className="inline-block w-full site-footer"
      >
        <div className="container">
          <div className="store-locator">
            <div className="company-logo">
              <img src={props._site.c_mgmTimberLogo.url} alt="logo" />
            </div>
            <div className="countact">{countact}</div>
          </div>
          <div style={{ color: "#fff" }}>
            <h2>{props._site?.c_customer_Services.headerLinkHeading}</h2>
            <ul className="pt-4">
              <li className="pt-4">
                <a href="#" title="">
                  {customerService}
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h2>{props._site.c_aboutMgm.headerLinkHeading}</h2>
            <ul className="f_abouts pt-4">
              <li style={{ paddingTop: "15px" }}>
                <a href="#" title="">
                  {Aboutm}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="otherLinks">
          <h2 style={{color:"white", font:"bold"}}>{props._site.c_newsletterHeading}</h2>
           <div style={{width:"360px" }} className="pt-4"><h6 style={{color:"#7b7b7b"}}>{props._site.c_newsletter}</h6> </div>
               
                  <div className="subscribe"><SubscribeForm/></div>
            <div className="socialmediaData">
              <h4 style={{ color: "white" }} className="socialmedias">
                {props._site.headline}
              </h4>
              <ul className="socialmedia grid grid-cols-6 gap-x-4 gap-y-4">
                {props._site.c_socialIcons.map((res: any) => {
                  return (
                    <>
                      <a href="#">
                        <img
                          style={{ width: "50px", height: "35px" }}
                          src={res.icon.url}
                        />
                      </a>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          
          <div><img src={props._site.c_jdGroups.url} width="260px" alt="logo" /></div>
          <div style={{ color: "#7b7b7b" }}>
            <div
              style={{ width: "1150px", color: "#e9e9e9" }}
              className="policy grid grid-cols-2"
            >
               <div className="termcondition">
              <a href="#">{props._site.c_cookiePolicy.label}</a>
              <a href="#">{props._site.c_privacyPolicy.label}</a>
              <a href="#">{props._site.c_termAndConditioon.label}</a>
              </div>
              <div className="paymentImg">
                <img src={props._site.c_payment.url} alt="logo" />
              </div>
            </div>

            <div className="mt-2">{props._site.c_footerDescription}</div>
          </div>
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
