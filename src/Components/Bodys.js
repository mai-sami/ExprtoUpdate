import React from 'react'

import quote from '../images/quote.png'
import { HomeWrapper } from "./style";

import Maskk from '../images/Maskk.png'
import Sliders from './Sliders'
import hand from '../images/hand.png'

import Groupall from '../images/Groupall.png'
import Groups from '../images/Groups.png'
// import Groupp from '../images/Groupp.png'
import surface from '../images/surface.png'
import Groupas from '../images/Groupas.png'
import GroupAllss from '../images/GroupAllss.png'
 import face from '../images/face.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
function Bodys() {
  const [t, i18n] = useTranslation();

    return (
        <div className="section__body__thireds">
       <div className="section__body__thireds__continer">
         <br />
           <div className="quote">
           < img src={quote}  alt="" /> 

           </div>
           <br />

           <div className="all__p__h"> 
 <h2 className="h__2">{t("Trusted")}
</h2>
<h2 className="h__2"> {t("Companies")}</h2>
</div>
 
<hr className="hr"/>
     <HomeWrapper>
    <Sliders />
    </HomeWrapper >
<input className="feedback" type ="submit" value={t("Give")}/>
  <br />
     </div>
     <div className="box__shadow">
     <div className="box__shadow__container">
     <div className="box__shadow__part1">
<img src={hand}  alt=""/>
 <div className="text__part">
<p>{t("Trusted")}
</p>
<p>{t("Companies")}</p>
 </div>
   </div> <div className="box__shadow__paert2">
       <br />
   <img className="Groups" src={Groups}  alt=""/>
    <div className="text__parts">
   {/* <img src={Groupp}  alt=""/> */}

   <img src={surface}  alt=""/>
   <img src={Groupas}  alt=""/>
 </div>


 
   </div> 
 
   </div>
 </div>
 <br />

 <div className="end__section">
 <div className="end__section__continer">

 <img src={Groupall}  alt=""/>
<div className="absu">
<p>{t("Join")}
</p>
<p>{t("receive")}</p>
<br />
<input className="feedback__enf__section"  placeholder="Enter your email to join"/>

</div>
 
     </div>

     
 </div>
 
 <div className="section__end__parts">
 
    <div className="section__end__parts__right">

    
    <img className="pickt" src={GroupAllss}  alt=""/>

 
</div>

 
<div className="section__end__parts__left">
<div className="body___home__two">
      <h1 className="h1">  {t("Ours")}

</h1>
<h1 className="h1">    {t("Clients")}</h1>
<div className="prg__end__section "> 
<p className=" "> {t("Lorem")} 
 
     </p>
     </div>
 
    </div>    

    
      </div> 
    
 

 
     </div>
     <img className="face" src={face}  alt=""/>

        </div>
    )
}

export default Bodys
