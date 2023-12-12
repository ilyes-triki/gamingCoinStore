// import React from 'react';
// import './midSection.css';
// import character from './ressources/Fortnite Battlehawk - 1100x1100.png';
// function midSection() {
//   return (
//     <div className="midSection">
//       <div class="midSection-container">
//         <div className="midSection-container-text">
//           <span class="sign">Start Selling</span>
//           <span className="subText"> your ingame resource :</span>
//           <p className="paragraph">
//             fortnite , world of warcraft , league of legends and more ! our
//             website helps you to get real life value for your game items !
//           </p>
//           <button className="btn-grad midSection-btn"> Start Selling</button>
//         </div>
//       </div>
//       <img className="character" src={character}></img>
//     </div>
//   );
// }
// export default midSection;
import React from 'react';
import './midSection.css';
import Carousel from './carousel';

function midSection() {
  return (
    <section className="mid-section">
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="column">
        <div className="column-content">
          <h2>Column 1</h2>
          <p>This is some content in column 1.</p>
        </div>
      </div>
      <div className="column">
        <div className="column-content">
          <h2>Column 2</h2>
          <p>This is some content in column 2.</p>
        </div>
      </div>
    </section>
  );
}

export default midSection;
