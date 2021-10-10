import React,{useState} from 'react'
import header from '../images/header.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../css/Products.css';
import $ from "jquery"
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import un from '../images/un.png'
import pr from '../images/pr.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
var card = [{
    image: un, name: "5% discount ocream ordersn ", title: " 2000 Point "
}, {
    image: pr, name: "10% discount ocream ordersn ", title: " 1500 Point "
},
{
    image: pr, name: "20% discount ocream ordersn ", title: " 1000 Point "
}
];
function Headers() {
    const [t, i18n] = useTranslation();
    const [language, setLanguage] = useState('EN');

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const handleOnclick=(e)=>{
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
        if (e.target.value == "العربية"){
            document.body.dir = "rtl";

          }
          else   
            document.body.dir = "ltr";

          
    }
const changeLanguage =()=>{
        i18n.changeLanguage('العربية')
     document.body.dir = "rtl";
    }
    
    $(document).ready(function () {



        $('#noti_Button').click(function () {

            // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
            $('#notifications').fadeToggle('fast', 'linear', function () {
                if ($('#notifications').is(':hidden')) {
                    $('#noti_Button').css('background-color', '#2E467C');
                }
                // CHANGE BACKGROUND COLOR OF THE BUTTON.
                else $('#noti_Button').css('background-color', '#FFF');
            });

            $('#noti_Counter').fadeOut('slow');     // HIDE THE COUNTER.

            return false;
        });

        // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
        $(document).click(function () {
            $('#notifications').hide();

            // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
            if ($('#noti_Counter').is(':hidden')) {
                // CHANGE BACKGROUND COLOR OF THE BUTTON.
                $('#noti_Button').css('background-color', '#2E467C');
            }
        });

        $('#notifications').click(function () {
            return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
        });
    });
    return (
        <div className="header"  >
            <div className="header__containrt">
                <div className="im__ge">
                    <img src={header} />
                    <nav>
                        <select className="select">
                            <option className="active" selected disabled>{t("Products")}</option>



                        </select>
                    </nav>
                </div>

               
                <div className="items">
                    <div className="items__image">
                    </div>
                    <div className="products__P">

                        <p className="p1">Mohammed3mera</p>

                        <p className="p2">2000 Point</p>

                    </div>

                </div>
                <ExpandMoreIcon id="noti_Button" className="expands" />
                <select   className="select__lan"   onChange={handleOnclick}>
             
                                 
             <option value="العربية"  onClick={changeLanguage}>            العربية 
             </option>
       <option value="EN"  onClick={() => i18n.changeLanguage(' EN')}> 
       EN
                
        </option> 
 </select >
            </div >



            <div id="notifications">
                <div className="colo">
                    <h3>Your points balance :</h3>
                    <h2>2000 Point</h2>
                    <div class="p__note"><p>
                        Receive exclusive benefits and rewards when you
                        complete 12 more services by May 31
                    </p>
                    </div>
                </div>
                <div className="j___ust">
                    <p> Transport : </p>
                    <div className="see__al">

                        <p className=" ">sell all</p>

                        <ChevronRightIcon />
                    </div>
 


                </div>
                <div className=" a">

                    <Slider {...settings}>
                        {card.map((cards) => (

                            <Card sx={{ maxWidth: 125, maxHeight: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="105"
                                        image={cards.image}
                                        alt=" img"
                                    />

                                    <p className="change"> {cards.name}</p>
                                    <span className="s__mal">  {cards.title}</span>



                                </CardActionArea>
                            </Card>

                        ))}
                    </Slider>
                </div>
                <div className="j___ust">
                    <p> Pastime :  </p>
                    <div className="see__al">
                        <p>sell all</p>
                        <ChevronRightIcon />
                    </div>
                </div>
                <div className=" a">

                    <Slider {...settings}>
                        {card.map((cards) => (

                            <Card sx={{ maxWidth: 125, maxHeight: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="105"
                                        image={cards.image}
                                        alt=" img"
                                    />

                                    <p className="change"> {cards.name}</p>
                                    <span className="s__mal">  {cards.title}</span>




                                </CardActionArea>
                            </Card>

                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Headers
