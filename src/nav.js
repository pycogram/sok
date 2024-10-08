import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar( props ){

    const justImg = props.logo1;

    let [ isMenuActive, setMenuActive ] = useState(false);
    const [menuButton, setMenuButton] = useState("menuBtn");
    const [menuOption, setMenuOption] = useState("menuOptionInactive");

    const MenuActive = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    const closeOption = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    return(
        <div className="homePage">
            <nav>
                <img src={justImg} alt="Sok Logo"></img>
                <ul className={menuOption}>
                    <Link to={"/home"} onClick={() => closeOption()} ><li><h3>Home</h3></li></Link>
                    <Link to={"/about"} onClick={() => closeOption()}><li><h3>About</h3></li></Link>
                    <Link to={"/rmap"} onClick={() => closeOption()}><li><h3>Roadmap</h3></li></Link>
                    <Link to={"/tokeno"} onClick={() => closeOption()}><li><h3>Tokenomics</h3></li></Link>
                    <Link to={"/contact"} onClick={() => closeOption()}><li><h3>Meme</h3></li></Link> 
                </ul>
                <button><a href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R" target="_blank">Buy $Sok</a></button>
                <span className={menuButton}  onClick={() => MenuActive()}></span>
            </nav>
        </div>
    )
}