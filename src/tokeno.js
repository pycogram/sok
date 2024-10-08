export default function Token( props ){
    const justImg3 = props.allImg3;
    return(
        <div className="tokenPage">
            <h2>TOKENOMICS</h2>
            <div className="AllP1Box">
                <img className="AllP AllP1" src={justImg3.pepeR3} alt="sok"/>
            </div>
            <div className="AllocatePic">
                <div>
                    <h4>100% - Liquidity burned</h4>
                    <h4>0% - CTO Team</h4>
                </div>
                <img src={justImg3.rmCircle} alt="allocation of tokens"/>
            </div>
            <div className="AllP2Box">
                <img className="AllP AllP2" src={justImg3.pepeR4} alt="sok2"/>
            </div>
        </div>
    )
}