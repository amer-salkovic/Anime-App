import React from "react";

function SideBar(){
    return(
        <div    className="sidebar">
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/anime"><li>Anime</li></a>
                <a href="/manga"><li>Manga</li></a>
                <a href="/about-us"><li>About us</li></a>
                <a href="/favorites"><li>Favourites</li></a>

            </ul>
        </div>
    )
}   

export default SideBar;