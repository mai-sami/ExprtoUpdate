
import React ,{Component} from 'react';

import Header from "../Header/header";
import Footer from "../Header/footer";

export default function BaseLayout({children}) {
    return (
        <>
            <Header/>
                 {children}
            {/* <Footer/> */}
        </>
    )
}
