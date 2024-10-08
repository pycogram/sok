export default function Contact( props ){
    let justLogo = props.logo2;
    let justImg4 = props.allImg4;
    let justImg = props.allImg;

    return(
        <div className="contactPage">
            <h2>Memes</h2>

            <div className="memeSection">  
                <div className="memePic">
                    <span>
                        <img src={justImg4.m1} alt="meme1"/>
                    </span>
                    <span>
                        <img src={justImg4.m2} alt="meme2"/>
                    </span>
                    <span>
                        <img src={justImg4.m3} alt="meme3"/>
                    </span>
                    <span>
                        <img src={justImg4.m4} alt="meme4"/>
                    </span>
                    <span>
                        <img src={justImg4.m5} alt="meme5"/>
                    </span>
                    <span>
                        <img src={justImg4.m6} alt="meme6"/>
                    </span>
                    <span>
                        <img src={justImg4.m7} alt="meme7"/>
                    </span>
                    <span>
                        <img src={justImg4.m8} alt="meme8"/>
                    </span>
                    <span>
                        <img src={justImg4.m10} alt="meme10"/>
                    </span>
                </div>
            </div>

            <div className="socialPrivate">
                <span>
                    <img src={justLogo} alt="Sok Logo" />
                </span>
            </div>
            <footer className="footText">
                <span></span>
                <p>© 2024 $SOK. All rights reserved.</p>
            </footer>
        </div>
    )
}