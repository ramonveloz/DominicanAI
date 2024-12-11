import { Link } from 'react-router-dom';
import './homePage.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const HomePage = () => {

    const [typingStatus, setTypingStatus] = useState("human1")

    return (
        <div className='homePage'>
            <img src="/orbital.png" alt="" className="orbital"/>
          <div className="left">
            <h1>Dominican AI</h1>
            <h2>Show your creativity, Dominican Style</h2>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae 
                laudantium voluptate libero aspernatur ipsa accusamus repellendus nam, quisquam dolores nesciunt magnam harum.
            </h3>
            <Link to="/dashboard">Empezemos</Link>
          </div>  
          <div className="right">
            <div className="imgContainer">
                <div className="bgContainer">
                    <div className="bg"></div>
                </div>
                <img src="/bot.png" alt="" className="bot" />
                <div className="chat">
                  <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "bot.png"} alt="" />
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Human:Welcome to AI',
                      2000, ()=>{
                        setTypingStatus("bot")
                      },
                      'Bot:KLK manin, cuando vamos al campo',
                      2000, ()=>{
                        setTypingStatus("human2")
                      },
                      'Human2:a dio vea pero y que ehh',
                      2000, ()=>{
                        setTypingStatus("bot")
                      },
                      'Bot:Me gusta la yuca con el arroz con dulce',
                      2000, ()=>{
                        setTypingStatus("human1")
                      },
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation={true}
                  />
                </div>
            </div>
          </div>
           <div className="terms">
            <img src="/logodr.png" alt=""/>
            <div className="links">
              <Link to="/">Terms of Service</Link>
              <span>|</span>
              <Link to="/">Privacy Policy</Link>
            </div>
           </div>
        </div>
    )
}

export default HomePage