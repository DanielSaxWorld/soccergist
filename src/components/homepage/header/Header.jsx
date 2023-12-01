import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "../dropdown/Dropdown";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isVisisble, setIsVisible] = useState(false);
  return (
    <>
      <nav className="navbar">
        <img src="./Logo2.png" className="navbar-logo" />
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <div>
            <li
              // onMouseEnter={() => setIsVisible(true)}
              onMouseOver={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
              className="nav-item"
            >
              <Link to="/">
                Soccer
                <img src="./arrowdown.svg" className="arrow-d1" />
              </Link>
            </li>{" "}
            {isVisisble && (
              <div
                className="soccer-popup"
                onMouseOver={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
              >
                <div>
                  <div className="soccer-house">
                    <h2 className="soccer-text-1">Soccer</h2>
                    <div className=" soccer-text-2">
                      <p className="soccer-text-2-1">Teams</p>
                      <p className="soccer-text-2-2">Transfer</p>
                      <p className="soccer-text-2-3">Latest News</p>
                      <p className="soccer-text-2-4">Fixtures</p>
                      <p className="soccer-text-2-5">Standings</p>
                      <p className="soccer-text-2-6">Stats</p>
                    </div>
                  </div>
                  <div className="club-house">
                    <p className="club-house-text-1">
                      <img src="./premierleague.svg" /> Premier League
                    </p>
                    <p className="club-house-text-2">
                      <img src="./laliga.svg" /> La Liga
                    </p>
                    <p className="club-house-text-3">
                      <img src="./italy.svg" /> Serie A
                    </p>
                    <p className="club-house-text-4">
                      <img src="./bundesliga.svg" /> Bundesliga
                    </p>
                    <p className="club-house-text-5">
                      <img src="./ligue1.svg" />
                      Ligue 1
                    </p>
                    <p className="club-house-text-6">
                      <img src="./ucl.svg" /> European Competition
                    </p>
                    <p className="club-house-text-7">
                      <img src="./fifa.svg" /> International Competition
                    </p>
                  </div>
                </div>
                <h1 className="top-club">Top Club</h1>
                <div className="english-clubs">
                  <p className="english-clubs-text-1">
                    <img src="./manu.svg" /> Manchester United FC
                  </p>
                  <p className="english-clubs-text-2">
                    <img src="./Chelsea.svg" /> Chelsea FC
                  </p>
                  <p className="english-clubs-text-3">
                    <img src="./pool2.svg" /> Liverpool FC
                  </p>
                  <p className="english-clubs-text-4">
                    <img src="./city.svg" />
                    Machester City FC
                  </p>
                  <p className="english-clubs-text-5">
                    <img src="./arsenal.svg" /> Arsenal FC
                  </p>
                  <p className="english-clubs-text-6">
                    <img src="./spurs.svg" /> Tottenham Hotspur FC
                  </p>
                </div>

                <div className="spanish-clubs">
                  <p className="spanish-clubs-text-1">
                    <img src="./madrid.svg" /> Real Madrid
                  </p>
                  <p className="spanish-clubs-text-2">
                    <img src="./barcel.svg" /> FC Barcelona
                  </p>
                  <p className="spanish-clubs-text-3">
                    <img src="./atm.svg" /> Atletico Madrid
                  </p>
                  <p className="spanish-clubs-text-4">
                    <img src="./juve.svg" />
                    Juventus FC
                  </p>
                  <p className="spanish-clubs-text-5">
                    <img src="./ac.svg" /> AC Milan
                  </p>
                  <p className="spanish-clubs-text-6">
                    <img src="./inter.svg" /> Inter Milan
                  </p>
                </div>

                <div className="german-clubs">
                  <p className="german-clubs-text-1">
                    <img src="./bayern.svg" /> Bayern Munich
                  </p>
                  <p className="german-clubs-text-2">
                    <img src="./psg.svg" /> Paris Saint-Germain
                  </p>
                  <p className="german-clubs-text-3">
                    <img src="./dort.svg" /> Borussia Dortmund
                  </p>
                  <p className="german-clubs-text-4">
                    <img src="./castle.svg" />
                    Newcastle FC
                  </p>
                  <p className="german-clubs-text-5">
                    <img src="./napoli.svg" /> SSC Napoli
                  </p>
                  <p className="german-clubs-text-6">
                    <img src="./roma.svg" /> AS Roma
                  </p>
                </div>
              </div>
            )}
          </div>
          <li className="nav-item">
            <Link to="/livescore">Live Scores</Link>
          </li>
          <li className="nav-item">
            <Link to="/kitsbazaar">Kits Bazaar</Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link to="/">
              Others
              <img src="./arrowdown.svg" className="arrow-d2" />
            </Link>
            {dropdown && (
              <Dropdown
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

// // import React, { useState } from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";
// // import styled from "styled-components";

// // const DropDownContainer = styled("div")``;

// // const DropDownHeader = styled("div")`
// //   margin-bottom: 0.8em;
// //   padding: 0.4em 2em 0.4em 1em;
// //   font-weight: 500;
// //   font-size: 1.3rem;
// //   color: black;
// //   position: relative;
// //   top: 9px;
// //   left: -17px;
// // `;

// // const DropDownListContainer = styled("div")``;

// // const DropDownList = styled("ul")`
// //   padding: 0;
// //   margin: 0;
// //   padding-left: 1em;
// //   background: #ffffff;
// //   color: black;
// //   font-size: 1.3rem;
// //   font-weight: 500;
// //   position: relative;
// //   left: -1011px;
// //   top: 129px;
// //   width: 1500px;
// // `;

// // const ListItem = styled("li")`
// //   list-style: none;
// //   margin-bottom: 0.8em;
// // `;

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggling = () => setIsOpen(!isOpen);
//   const [isVisisble, setIsVisible] = useState(false);
//   return (
//     <section>
//       <nav className="navbar">
//         <div>
//           <img src="./Logo2.png" className="nav-logo" />
//         </div>
//         <div className="nav-contents">
//           <Link to="/home">Home</Link>
//           <div>
//             <a onClick={() => setIsVisible(!isVisisble)}>Soccer</a>{" "}
//             {isVisisble && <div className="soccer-popup">popup</div>}
//           </div>
//           <a>Live score</a>
//           <Link to="/kitsbazaar">Kits Bazzar</Link>
//           <DropDownContainer>
//             <DropDownHeader onClick={toggling}>Others</DropDownHeader>
//           </DropDownContainer>
//           {isOpen && (
//             <DropDownListContainer>
//               <DropDownList>
//                 <ListItem>Polls</ListItem>
//                 <ListItem>Quiz</ListItem>
//                 <ListItem>FPL Updates</ListItem>
//               </DropDownList>
//             </DropDownListContainer>
//           )}

//           <div className="dark-mode">
//             <img src="./Vector2.svg" className="dark-mode1" />
//             <img src="./Vector1.svg" className="dark-mode2" />
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default Header;
