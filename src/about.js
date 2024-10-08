export default function About( props ){
    let justImg2 = props.allImg2;
    return(
        <div className="aboutPage">
            <h2>about $Sok</h2>
            <div className="aboutPic">
                <span>
                    <img src={justImg2.pepeR2} alt="sok on a rock 2"/>
                </span>
                <h4>
                    $Sok came out of pumpfun, contemplating his next move in the crypto market. 
                    As he surveyed the landscap,he realised that just like a 
                    rock-solid blockchain, he needed to HODL onto his investments 
                    and stay resilient amidst the market fluctuations. $Sok understood 
                    the importance of findings stability, much like the stability of a 
                    rock in the ever-changing crypto terrain...
                </h4>
            </div>
            <h3>HOW TO BUY</h3>
            <span className="blobAll">
                <img src={justImg2.blob} alt="steps on how to buy"/>
            </span>
        </div>
    )
}