import React from 'react'
import social from '../images/social.png'
 
 import phone from '../images/phone.png'
import Maskk from '../images/Maskk.png'
// import Group from '../images/Group.png'
import MaskG from '../images/MaskG.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import Bodys from'./Bodys';
   function BodyHome() {
    const [t, i18n] = useTranslation();
    return (
        <div className="body___home">
            <div className="body___home__body">
                <div className="all"> 
<div className="body___home__one">
<img src={social} alt="" />
    </div>           
    
    <div className="body___home__two">
      <h1 className="h1">  {t("can")}
</h1>
<h1 className="h1">  {t("help")}</h1>
<div className="p__all"> 
<p className="p__h">  {t("A")}   
</p>
<p className="p__h">  {t("A") }
 </p>
     <p className="p__h">  {t("A")}   </p> 
     </div>
 
    </div>    
    </div>
    <div  className="body___home__therd">
    <br />     
    <p className="p__P">  {t("Our")}</p>
    <br />
<div className="cards">
    <div className="card">
    <div className="card__p">

<p>Computer </p>
<p>Repair</p>
</div>

<div className="shape3">
<img src={Maskk} alt="" />
 </div>
 

</div>
<div className="card">

<div className="card__p">

<p>Mobile
</p>
<p>Repair</p>
</div>
<div className="shape3">
<img src={phone} alt="" />
 </div>
 </div>
 
<div className="card">
<div className="card__p">

<p>Tablet</p>
<p>Repair</p>
</div>

<div className="shape3">
<img src={Maskk} alt="" />
 </div>
</div>
<div className="card">
<div className="card__p">

<p>Online
 </p>
<p>Support</p>
</div>

<div className="shape3">
<img src={MaskG} alt="" />
 </div>
</div>
 
 
 
</div>
        
        
        </div>  
         <div className="section">
 <div className="section__right">
{/* <img src={Group} alt="" />  */}
</div>
 <div className="section__leaft">
<p className="p__spacing">  {t("guaranteed")} </p>
 
 <p  className="p__spacings">  {t("refund")} 
</p>
<p  className="p__spacings">  {t("required")} </p>
 
 
 </div>
 </div>
      </div>
      <Bodys />
        </div>
    )
}

export default BodyHome
