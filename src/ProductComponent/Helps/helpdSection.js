import React from 'react'
import './style.css'
import helpImage from "../../images/helpImage.png"
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import ApplicationImage from '../../images/ApplicationImage.png'
import Website from '../../images/Website.png'
import Design from '../../images/Design.png'
import Maintenance from '../../images/Maintenance.png'
import Security from '../../images/Security.png'

const Data = [{ name: "Application", image: ApplicationImage },
{ name: "Website", image: Website },
{ name: "Design", image: Design },
{ name: "Maintenance", image: Maintenance },
{ name: "Security", image: Security }]
function HelpdSection() {
    const [t, i18n] = useTranslation();

    return (
        <div className="helpdSection">
            <Container>
                <img src={helpImage} className="helpdSection__cell__image" alt="helpImage" />
                <h1 className="helpdSection__title">    {t("How")} </h1>
                <div className="helpdSection__image" >
                    {Data.map((data) => (

                        <div className="helpdSection__cell">
                            <img className="imgs" src={data.image} />
                            <span className="helpdSection__cell__name">{data.name}</span>

                        </div>
                    ))}

                </div>

            </Container>
        </div>
    )
}

export default HelpdSection
