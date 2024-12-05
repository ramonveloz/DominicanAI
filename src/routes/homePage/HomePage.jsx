import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
    return (
        <div className='homePage'>
            <img src="/orbital.png" alt="" className="orbital"/>
          <div className="left">
            <h1>Dominican AI</h1>
            <h2>Show your creativity, Dominican Style</h2>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae 
                laudantium voluptate libero aspernatur ipsa accusamus repellendus nam, quisquam dolores nesciunt magnam harum.
            </h3>
            <a to="/dashboard">Empezemos</a>
          </div>  
          <div className="right">
            <div className="imgContainer">
                <div className="bgContainer">
                    <div className="bg"></div>
                </div>
                <img src="/bot.png" alt="" className="bot" />
            </div>
          </div> 
        </div>
    )
}

export default HomePage