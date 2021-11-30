import React from 'react'
import './style.css'
import introduct from "../../images/introduct.png"
import {Button,Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
function Introd() {
    const [t, i18n] = useTranslation();

    return (
        <div className='introduct'>
            <Container>
        <div className='row p-7'>
            
            <div className="col-md-9">
                 <div className="introduct__one">
                    <h1>   {t("Start")}

                    </h1>
                    <h1> {t("project")}
</h1>
                    <h1> {t("with")} </h1>
                    <div className="p__introduct">
                        <p>   {t("Lorem")}   </p>
                             <p>  {t("lor")} </p>
                    </div>
                    <div className="s__p"> 
                    <div class="toggle-switch-container">
    <div class="toggle-switch switch-vertical">
      <input id="toggle-a" type="radio" name="switch" checked="checked" />
       <input id="toggle-b" type="radio" name="switch" />
       <span class="toggle-outside">
        <span class="toggle-inside"></span>
      </span>
      </div>
    
    </div>
    <br />
    <p className="swi__p">  {t("let")}</p>

 </div>
                </div>
             </div>
            <div className="col-md-3 side_img">
                <img src={introduct} alt='introduct' className='w-100'/>
            </div>
        </div>
        </Container>
    </div>
    )
}

export default Introd
