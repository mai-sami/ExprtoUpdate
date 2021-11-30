import React from 'react'
// import introduct from "../image/aboutImg.png"
import {Button} from "react-bootstrap";
import "./style.css"

function introduction() {
    return (
        <div className='about-us'>
        <div className='row container p-5'>
            <div className="col-md-5 side_img">
                {/* <img src={introduct} alt='about' className='w-100'/> */}
            </div>
            <div className="col-md-5">
                <h1 className='title'>من نحن</h1>
                <p  className='sub-title-about'>
                    لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                </p>
                <Button variant='success' className='subscribe'> اشترك الان</Button>
            </div>
        </div>
    </div>
    )
}

export default introduction
