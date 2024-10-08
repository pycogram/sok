import Home from "./home";
import logo1 from "./img/soklogo.png";
import logo2 from "./img/soklogo2.png";
import About from "./about";
import Token from "./tokeno";
import Roadmap from "./rmap";
import Contact from "./contact";
import Navbar from "./nav";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const allImg = {
  tw: require("./soc-logo/twitter.png"),
  tg: require("./soc-logo/tg.png"),
  pf: require("./soc-logo/pumpfun.png"),
  ray: require("./soc-logo/ray.png"),
  dexs: require("./soc-logo/dexs.png"),
  dext: require("./soc-logo/dext.png"),
  pepeR1: require("./img/socf.png"),
  sokd: require("./img/sokd.png"),
  sokb: require("./img/sokb.png"),
  soka: require("./img/soka.png"),
  soce: require("./img/soce.png")
}

const allImg2 = {
  pepeR2: require("./img/sokd.png"),
  blob: require("./img/htbuy.png")
}

const allImg3 = {
  pepeR3: require("./img/soka.png"),
  pepeR4: require("./img/sokc.png"),
  rmCircle: require("./img/ATcircle.png")
}

const allImg4 = {
  m1: require("./img/sok1.png"),
  m2: require("./img/sok2.png"),
  m3: require("./img/sok3.png"),
  m4: require("./img/sok4.png"),
  m5: require("./img/sok5.png"),
  m6: require("./img/sok6.png"),
  m7: require("./img/sok7.png"),
  m8: require("./img/sok8.png"),
  m9: require("./img/sok9.png"),
  m10: require("./img/sok10.png"),
}

const rmPic = require("./img/roadMapSec.png");

function App() {
    return (
      <Router>
        <div className="App">
            <Navbar logo1={logo1} />
            <div className="AllPage">
              <Switch>
                <Route exact path="/home">
                  <Home ObjImg={ allImg } />
                  <About allImg2={allImg2} />
                  <Roadmap rmPic={rmPic} />
                  <Token allImg3={allImg3} />
                  <Contact logo2={logo2} allImg={allImg} allImg4={allImg4} />
                </Route>
                <Route exact path="/about">
                  <About allImg2={allImg2} />
                </Route>
                <Route exact path="/tokeno">
                  <Token allImg3={allImg3} />
                </Route>
                <Route exact path="/rmap">
                  <Roadmap rmPic={rmPic} />
                </Route>
                <Route exact path="/contact">
                  <Contact logo2={logo2} allImg={allImg} allImg4={allImg4} />
                </Route>
                <Route path="*">
                <Home ObjImg={ allImg } />
                  <About allImg2={allImg2} />
                  <Roadmap rmPic={rmPic} />
                  <Token allImg3={allImg3} />
                  <Contact logo2={logo2} allImg={allImg} allImg4={allImg4} />
                </Route>
              </Switch>
            </div>
      </div>
      </Router>
    );
}

export default App;
