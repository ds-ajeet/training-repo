import * as React from "react";
import logo from "../../images/mgmlogo.jpg";
import SearchBar from "../locationDetail/search";
import FilterSearch from "../locatorPage/FilterSearch";
import { StaticData } from "../../../sites-global/staticData";

const Header = (props: any) => {
  // console.log(props)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };
  // const linkDoms = props?._site?.c_headerLinks?.map((link: any) => (
  //   <a
  //     className="navbar-item"
  //     href="#"
  //   >
  //     <span style={{ fontWeight: "bold" }}>{link.label}</span>
  //   </a>
  // ));

  const Headercountact = props?._site?.c_headerMenus?.map((link: any) => (
    <div className="flex">
      <img src={link.headermenu.url} width="30"  alt=""/>
      <a className="navbar-item" href={link?.headermenus?.link} style={{ marginTop: "5px" }}>

        <span style={{ marginLeft: "10px", marginRight: "20px" }}>{link?.headermenus?.label}</span>

      </a>
    </div>
  ));

  return (
    <>
      <div style={{ height: "27px", width: "400px", marginLeft: "902px" }} className="flex">

        <a href="#" className="pt-2"><h3 style={{ fontWeight: "bold", fontSize: "17px" }}>{props._site.c_trustpilot.label}</h3></a>

        <a href="#" className="ml-2 pt-2"><img src={props._site.c_trustpilot.link} width="160" alt=""/></a>

        <a href="#" className="ml-2 pt-2"><img src={props._site.c_trust.url} width="130" alt="logo" /> </a>


        <span className="pt-2 ml-6">{StaticData.Vat}</span>
        <span className="pt-2 font-bold ml-2">{StaticData.Inc}</span>

        <label className="switch ml-4 pt-2">
          <input type="checkbox" />
          <span className="slide round"></span>
        </label>

        <span className="pt-2 ml-4">{StaticData.Ex}</span>
      </div>


      <div
        style={{ background: "white", height: "68px" }}
        id="header"
        className="header-nav"
      >


        <div
          style={{ marginLeft: "25px" }}
          className="container header-content flex items-center justify-between"
        >

          <div className="logo w-auto">
            {/* <img src={props._site.c_trust.url} width="90" alt="logo" style={{marginLeft:"10s00px"}}/>  */}
            <a href="#"><img src={props._site.c_mgmTimberLogo.url} width="150" alt="logo" /></a>


          </div>




          <div>
            <SearchBar />

          </div>
          <div className="flex items-center font-bold text-sm">{Headercountact}</div>


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
          style={{ background: "#02a6db", height: "70px", fontSize: "initial" }}
          className="text-black w-full font-bold"
        >
          <div
            className="flex gap-x-6 text-ml headerLink"
          >
            {props?._site?.c_headerLinks?.map((link: any, index: number) => (
              <div className="navbar-item">
                {/* <a>this is pert of aker tag</a> */}
                {/* <span style={{ fontWeight: "bold" }}></span> */}
                <div className="navbar">
                  <div className="dropdown">
                    <button className="dropbtn" style={{height:"70px"}}>{link.label}
                    
                    </button>
                    <div className="dropdown-content">


                      <div className="rows">
                        <div className="columns">
                          <div>
                              {props?._site?.c_submenu?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">
                                        {item.heading}
                                        </h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                           {props?._site?.c_submenutwo?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                            {props?._site?.c_submenuthree?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                              </div>
                           <div>
                           {props?._site?.c_submenufour?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                           {props?._site?.c_submenufive?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                           {props?._site?.c_submenussix?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>

                    
                        </div>
                        

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
