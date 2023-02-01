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
// import logo from "../../images/mgmlogo.jpg";
// import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";
// import pizzaLogo from "../../images/mgmlogo.jpg"

// var currentTime = new Date()
// var year = currentTime.getFullYear()

// type Link = {
//    label: string;
//    url: string;
// };

// const links: Link[] = [
//    {
//       label: "Privacy Policy",
//       url: "/",
//    },
//    {
//       label: "Copyright/Legal Info",
//       url: "/copyright"
//    },
// ];



const Footer = (props: any) => {
   const Aboutm = props?._site?.c_aboutMgm?.headingLink?.map((link: any) => (
      <a  className="navbar-item" href="#" >
        <span>{link.label}</span><br />
      </a>
    ));
    const customerService = props?._site?.c_customer_Services?.headingLink?.map((link: any) => (
      <a  className="navbar-item" href="#" >
        <span>{link.label}</span><br />
      </a>
    ));



   return (
      <>
         <footer  className="site-footer">
            <div></div>
            <div style={{background:"#1e293e"}} className="container bg-red">
               <div className="store-locator">
                  <div className="company-logo mr-2">
                     <img src={props._site.c_mgmTimberLogo.url} alt="logo"/>
 							</div>
                  </div>
                  <div style={{color:"#fff"}}>
                  <h2>{props._site?.c_customer_Services.headerLinkHeading}</h2>
                  <ul>
                     <li><a href="#" title="">{customerService}</a></li>
                  </ul>
                  </div>
                  <div style={{color:"#fff"}} className="column">
                     <h5>{props._site.c_aboutMgm.headerLinkHeading}</h5>
                     <ul>
                        <li><a href="#" title="Main Menu">{Aboutm}</a></li>
                     </ul>
                  </div>
                 
            </div>
            {/* <div style={{background: "#1e293e", color: "white"}} className="footer">
               <div className="footer_links">
                  <div  className="column pb-4">
                  {
                  props?._site?.c_mgmTimberLogo?
                  <img src={props._site.c_mgmTimberLogo.url} alt="logo"/>:
                  <div/>
                
                } 
                     <div className="social-media">
                     <div className="contact-links ml-12 mt-12">
                     </div>   */}
                     {/* <div className="jds-group ml-12 mt-10">
                        <img loading="lazy" src="https://www.mgmtimber.co.uk/static/version1674641584/frontend/mgmtimber/default/en_GB/images/jd-group.png" alt="Part of the JDS Group" width="374" height="21"/>
                     </div>  */}
                
                     {/* </div>
                  </div>
                  <div className="column">
                     <h5>{props._site?.c_customer_Services.headerLinkHeading}</h5>
                     <ul>
                        <li><a href="#" title="Careers">{customerService}</a></li>
        
                     </ul>
                  </div>
                  <div className="column">
                     <h5>{props._site.c_aboutMgm.headerLinkHeading}</h5>
                     <ul>
                        <li><a href="#" title="Main Menu">{Aboutm}</a></li>
                     </ul>
                  </div>
                  <div className="footer-newsletter">
        
                     <div className="otherLinks" >
                        
                       <div>
                        <ul  className="socialmedia" >
                        {props._site.c_socialIcons.map((res: any) => {
                          return (
                            <>
                              <a href="#" >
                                <img style={{width:"30px",height:"30px"}} src={res.icon.url} />
                              </a>
                            </>
                          )
                        })}
                        </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
 */}



         </footer>
      </>
   );
};

export default Footer;