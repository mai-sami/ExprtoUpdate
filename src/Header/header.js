import React, { useState } from 'react'
import './style.css';
import expertos from '../images/expertos.png'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
function Header() {
    const [t, i18n] = useTranslation();
    const [checked, setChecked] = useState(true);
    const [language, setLanguage] = useState('EN');
 
    const current = window.location.href;
    const muneItem = document.querySelectorAll('a');
    const menuLengh = muneItem.length;
    for (let i = 0; i < menuLengh; i++) {
		
        if (muneItem[i].href === current) {
            muneItem[i].className = "active"
        }
    }
    const handleOnclick = (e) => {
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
        if (e.target.value == "العربية") {
            document.body.dir = "rtl";

        }
        else
            document.body.dir = "ltr";


    }
    const changeLanguage = () => {
        i18n.changeLanguage('العربية')
        document.body.dir = "rtl";
    }


    
    return (
        <div className="header">
            <div className="header__containrt">
                <div className="im__ge">
                    <img src={expertos} alt="" />
                </div>


                <nav>

                    <ul className="header__ul" >
                        <li><a   className="active" href="/">   {t("Personal")} </a></li>
                        <li><a id="a" href="/product">   {t("Business")}    </a></li>
                        <li><a id="a" href="/login">     {t("Joins")}   </a></li>

                    </ul>
                </nav>
                <div className="com__ul">
                    <button className="order__noe"> {t("Order")}   </button>
                    <Link to="/login">

                        <div className="circle">
                            <PersonIcon className="personal" style={{ fontSize: 14 }} />
                        </div>
                    </Link>

                    <select className="select__lan" onChange={handleOnclick}>
                        <option  > EN</option>

                        <option value="العربية" onClick={changeLanguage}>            العربية
                        </option>
                        <option value="EN" onClick={() => i18n.changeLanguage('EN')}>
                            EN

                        </option>



                    </select >
                </div>


            </div>
        </div>
    )
}

export default Header
