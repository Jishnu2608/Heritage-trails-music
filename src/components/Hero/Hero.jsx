import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Music
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"Music is the universal language that speaks to the soul, 
                       echoing the emotions and stories of humanity across time and space."</span>
                       <span className="secondaryText"><i>~ Ludwig van Beethoven</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-music-hero-img.jpeg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero