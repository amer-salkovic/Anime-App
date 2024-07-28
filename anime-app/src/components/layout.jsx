import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import SideBar from "../components/SideBar"
import "./layout.css"
function Layout(){
    return(
        <>
            <Header/>
            <SideBar/>
            <div className="warp">
            
            
            <main>
                <Outlet /> 
            </main>
            <Footer/>
            </div>
            
        </>
    )
}   

export default Layout;