import Header from "~/components/header";
import React from "react";
import Catalog from "~/components/catalog";
import LeftBar from "~/components/leftbar";
import RightBar from "~/components/rightbar";
import Footer from "~/components/footer";

export default function Home(){
    return (
        <div id="pagewrapper">
            <Header></Header>
            <div id="wrapper">
                <LeftBar></LeftBar>
                <Catalog></Catalog>
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </div>
    );
}