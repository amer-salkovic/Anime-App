import React from "react";

function Footer(){
    const godina = new Date().getFullYear();
    return(
        <>
            <div className="footer">
                <div className="footer-menu">
                    
                    <img src="https://anime-application.netlify.app/static/media/fuji-logo.b2e177cb35db12ecb859.png"></img>
                    <h1>Anime App</h1>
                    <ul>
                        
                        <a href="/"><li>Home</li></a>
                        <a href="/anime"><li>Anime</li></a>
                        <a href="/manga"><li>Manga</li></a>
                        <a href="/about-us"><li>About us</li></a>
                        <a href="/favorites"><li>Favourites</li></a>
                    </ul>
            
                </div>
                <div className="footer-copyright">
                        <h3>© {godina} Nit. All Rights Reserved.</h3>
                </div>
            </div>
        </>
    )
}   

export default Footer;