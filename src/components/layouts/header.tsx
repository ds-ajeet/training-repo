// import * as React from "react";
// import Cta from "../commons/cta";

//   type Link = {
//     label: string;
//     url: string;
//   };

//   const links: Link[] = [
//     {
//       label: "Home",
//       url: "/",
//     },
//     {
//       label: "About",
//       url: "/about",
//     },
//     {
//       label: "Menu",
//       url: "/menu.html",
//     },
//     {
//       label: "Locator",
//       url: "/locator",
//     }
//   ];

//   const Header = (props:any) => {
//       console.log(props)
//         React.useEffect(()=>{
//           document.body.setAttribute("id","body");
//         })
//       const linkDoms = props._site.c_headerlinks.map((link:any) => (
//           <a className="navbar-item" href={link.link} >
//             <span>{link.label}</span>
//           </a>
//       ));

//   return (
//     <>
{
  /* <div className="centered-container">
        <nav className="py-3 flex items-center justify-between">
          <img
              src="https://a.mktgcdn.com/p/8esDUBrhKJnkaVztLihLsC3quv_5BjLFG9L6MJ0adcs/150x150.png">
            <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
          <div className="hidden space-x-5 sm:block">
            <Cta buttonText="Order Pickup" url="#" style="primary-cta"></Cta>
            <Cta buttonText="Order Delivery" url="#" style="secondary-cta"></Cta>
          </div>
        </nav>
      </div> */
}
// import { SearchBar } from "@yext/search-ui-react";
//       <div className="container">
//           <nav className="navbar" style={{color:"#F9DDDD"}}>
//              {linkDoms}
//            </nav>
//          </div>
//     </>
//   );
// };

// export default Header;

import * as React from "react";
import logo from "../../images/mgmlogo.jpg";
import SearchBar from "../locationDetail/search";
import FilterSearch from "../locatorPage/FilterSearch";
// type Link = {
//   label: string;
//   url: string;
// };

// const links: Link[] = [
//   {
//     label: "Timber",
//     url: "/",
//   },
//   {
//     label: "Landscaping",
//     url: "#",
//   },
//   {
//     label: "Sheet Materials",
//     url: "#",
//   },
//   {
//     label: "Kitchens & Bathrooms",
//     url: "#",
//   },
//   {
//     label: "Doors, Windows & Joinery",
//     url: "#",
//   },
//   {
//     label: "Flooring",
//     url: "#",
//   },
//   {
//     label: "Insulation & Membranes",
//     url: "#",
//   },
//   {
//     label: "Dry Lining",
//     url: "#",
//   },
//   {
//     label: "Tools",
//     url: "#",
//   }

// ];

const Header = (props: any) => {
  // console.log(props)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };
  const linkDoms = props?._site?.c_headerLinks?.map((link: any) => (
    <a
      style={{ color: "black" }}
      className="navbar-item"
      href="#"
    >
      <span style={{fontWeight:"bold"}}>{link.label}</span>
    </a>
  ));

  const Headercountact = props?._site?.c_headerFirst?.map((link: any) => (
    <a  className="navbar-item px-4" href="#" >
      <span>{link.label}</span><br />
    </a>
  ));

  return (
    <>    
      <div
        style={{ background: "white", height: "100px" }}
        id="header"
        className="header-nav"
      >
        
        <div
          style={{ marginLeft: "25px" }}
          className="container header-content flex items-center justify-between"
        >
          
          
          <div className="logo pt-4 w-auto">
            
              <a href="#"><img src={props._site.c_mgmTimberLogo.url} width="150" alt="logo"/></a>
              
          </div>
          <div>
          <SearchBar/>
          {/* <FilterSearch /> */}
          </div>
          <div className="flex items-center font-bold text-lg">{Headercountact}</div>
        
          
        </div>
        <div className="header-content-right lg:hidden">
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <div className="">
        <div
          style={{ background: "#02a6db", height: "70px" }}
          className="text-black w-full font-bold"
        >
          <div
            style={{ marginLeft: "15px" }}
            className="flex gap-x-16 text-ml  pt-4"
          >
            {linkDoms}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
