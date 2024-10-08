import React, {useState, useEffect} from "react";

const Home = ( props ) => {
    const justImg = props.ObjImg;

    const images = [
        justImg.pepeR1,
        justImg.sokd,
        justImg.sokb,
        justImg.soka,
        justImg.soce
    ] 
    console.log(images);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1 * 1000); 

        return() => clearInterval(interval);
    }, [images.length]);

    return(
        <div className="homePage">
            <div className="homeTextPic">
                <div className="homeText">
                    <h1>$SOK</h1>
                    <div className="homePic2">
                        <img src={images[currentImageIndex]} alt="$Sok pic" />
                    </div>
                    <h4>
                        "When you realize your $sok bags are worth more than your entire crypto portfolio..."    
                    </h4>
                    <p>
                        CA:
                        4uzbSwHSJRA43VErKVPWnBySc3stG2CsDwypQ6xVpump
                    </p>
                    <div className="allSC-Btn">
                        <div className="allSocHandle">
                            <span><a href="https://x.com/sokcoinsol?s=21" target="_blank"><img src={justImg.tw} alt="twitter logo" /></a></span>
                            <span><a href="https://t.me/sokcoinsol"><img src={justImg.tg} alt="telegram logo" /></a></span>
                            <span><a href="https://pump.fun/4uzbSwHSJRA43VErKVPWnBySc3stG2CsDwypQ6xVpump#p16429794" target="_blank"><img src={justImg.pf} alt="pumpfun logo" /></a></span>
                            <span><a href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R" target="_blank"><img src={justImg.ray} alt="raydium logo" /></a></span>
                            <span><a href="https://dexscreener.com/solana/b2vykkvu3qbm5rj2gqgzllv4gcyxdzobqwwnczpgqrs2" target="_blank"><img src={justImg.dexs} alt="dexscreener logo" /></a></span>
                            <span><img src={justImg.dext} alt="dextools logo" /></span>
                        </div>
                        <button><a href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R" target="_blank">Buy $Sok</a></button>
                    </div>
                </div>
                <div className="homePic">
                    <img src={images[currentImageIndex]} alt="$Sok pic" />
                </div>
            </div>
        </div>
    )
}

export default Home;