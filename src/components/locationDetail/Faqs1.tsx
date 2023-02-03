import * as React from "react"
import "./styles.css";
export default function FAQs(props:any){
    console.log(props.faqs,"c_f")
 return(
    <>
<div className="flex w-full" style={{backgroundColor:"white"}}>
<div className="flex w-full">
   { props.faqs && props.faqs?.map((j:any)=>{
        return(
            <>           
            <div className="flex w-full">
                {/* <div className="nearby-sec-inner">   */}
            <div className="nearby-card"> 
            <details>
            <summary>{j.question}</summary>
             {j.answer}
             </details>        
             </div>
             </div>             
             {/* </div> */}
            </>
        )
    })}

   </div>
  
 </div>   
    </>
 )
}