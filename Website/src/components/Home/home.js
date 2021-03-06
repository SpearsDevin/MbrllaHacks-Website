import "./home.css"
import prin from "./../../Assets/prin.svg"
import nick from "./../../Assets/nick.svg"
import home_blur from './../../Assets/home_blur.svg'
import plus from './../../Assets/plus.svg'
import umbrella from './../../Assets/umbrella_2.svg'
import {Container, Row, Col, Particle} from "react-bootstrap"
import React, { useState, useEffect} from 'react'


function Home(){
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })
    return (
        <section>
        <Container id="home">
          <Container className="home-section">
            <Row>
                <Col lg={6} id='home_left' >

                    {/* Heading */}

                    <div className="quote">
                        A virtual hackathon to turn ideas into 
                        <span className="blackPart"> reality</span>
                    </div>

                    <div className="dates">
                        OCT 08 - OCT 09
                    </div>
                    

                    {/* Register Button */}
    
                    <div style={{ padding: 20 }}>
                        <a href="https://forms.gle/Nw7pjuKdSwySp1Wf8">
                        <button className="register">Get notified!</button>
                        </a>
                        <img src={prin} className="prin"></img>
                    </div>
                </Col>

                    {/* Nick image */}

                <Col lg={6} id='images' className="background">
                    <img src={home_blur} 
                    alt="Blur behind nick holding a computer"
                    className="img-fluid home_blur background-group"
                    style={{transform: `translateY(-${offsetY * 0.15}px)`}}
                    ></img>

                    <img src={home_blur} 
                    alt="Blur behind nick holding a computer"
                    className="img-fluid home_blur_3 background-group"
                    style={{transform: `translateY(-${offsetY * 0.15}px)`}}
                    ></img>

                    <img src={home_blur} 
                    alt="Blur behind nick holding a computer"
                    className="img-fluid home_blur_2 background-gorup"
                    style={{transform: `translateY(-${offsetY * 0.15}px)`}}
                    ></img>

                    <img src={nick} 
                    alt="Nick holding a computer"
                    className="home-nick"
                    style={{transform: `translateY(-${offsetY * 0.2}px)` }}
                    ></img>

                    <div className="float_imgs_top">
                        <img src={plus} 
                            alt="plus sign"
                            className="img-fluid plus"
                            style={{transform: `translateY(-${offsetY}px)`}}
                            ></img>
                        <img src={umbrella} 
                            alt="umbrella"
                            className="img-fluid umbrella"
                            style={{transform: `translateY(-${offsetY * 0.5}px)`}}
                            ></img>
                    </div>

                    <div className="float_imgs_mid">
                        <img src={plus} 
                            alt="plus sign"
                            className="img-fluid plus"
                            style={{transform: `translateY(-${offsetY}px)`}}
                            ></img>
                    </div>

                    <div className="float_imgs_bottom">
                        <img src={umbrella} 
                            alt="umbrella"
                            className="img-fluid umbrella"
                            style={{transform: `translateY(-${offsetY}px )`}}
                            ></img>
                        <img src={plus} 
                            alt="plus sign"
                            className="img-fluid plus"
                            style={{transform: `translateY(-${offsetY}px)`}}
                            ></img>
                    </div>
                </Col>
            </Row>

          </Container>
        </Container>
      </section>
    )
}

export default Home


