import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";

function Home() {
  const controls = useAnimation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 style={{ paddingBottom: 15 }} className="heading">

                Hi there <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>, i'm

              </h1>

              <h1 className="heading-name">                
                <strong className="main-name"> DELPHINE NWAWUZIE</strong>
              </h1>

              <h1 className="heading-name">
              <Typography
                    component={motion.p}
                    animate={controls}
                    custom={2}
                    variant="h3"
                    color="primary"
                    //className={classes.subTitle}
                >
                    I make awesome websites
                </Typography>           
                
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}


export default Home;
