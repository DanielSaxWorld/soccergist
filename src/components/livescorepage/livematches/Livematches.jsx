import React from "react";
import "./Livematches.css";

const Livematches = () => {
  return (
    <div>
      <div className="live-matches-house">
        <div className="live-house">
          <img src="./live.svg" />
          <p>Live Matches (12)</p>
        </div>
        <input
          type="text"
          placeholder="Search For Matches"
          className="search-inp"
        />
        <img src="./iconcalendar.svg" />
      </div>
      <div className="date-house">
        <div className="date-1">
          Thu <br />
          Aug 2
        </div>
        <div className="date-2">
          Fri
          <br /> Aug 3
        </div>
        <div className="date-3">
          Sat <br />
          Aug 4
        </div>
        <div className="date-4">
          Today <br />
          Aug 5
        </div>
        <div className="date-5">
          Mon
          <br /> Aug 6
        </div>
        <div className="date-6">
          Tue
          <br /> Aug 7
        </div>
        <div className="date-7">
          Wed <br />
          Aug 8
        </div>
      </div>

      <div className="tag-card-live">
        <h3 className="txt1-live">Trending</h3>
        <img className="img1-live" src="./Line2.png" />
        <div className="side-text-live">
          <p className="side-text2-live">
            Elanga joins Nottingham Forest from Utd
          </p>
          <p className="side-text2-live">
            Elanga joins Nottingham Forest from Utd
          </p>
          <p className="side-text2-live">
            Kylian Mbappe told he has 'every right' to run down PSG contract
          </p>
          <p className="side-text2-live">
            Liverpool drop defensive disasterclass
          </p>
          <p className="side-text2-live">
            The Dramatic Fall of senegalese Sadio Mane
          </p>
          <p className="side-text2-live">
            Liverpool captain says goodbyes ahead of Al Ettifaq move under
            Steven Gerrard
          </p>
          <p className="side-text2-live">
            Erik ten Hag: Man Utd have made progress in striker pursuit.
          </p>
        </div>
      </div>

      <div className="social-card-live">
        <h3 className="tixt1-live">Connect with us</h3>
        <img className="imgi1-live" src="./Line2.png" />

        <p className="social-textt1-live">
          <img src="./facebook.svg" />
          <p>Facebook</p>
        </p>
        <p className="social-textt1-live">
          <img src="./instagram.svg" />
          <p>Instagram</p>
        </p>
        <p className="social-textt1-live">
          <img src="./twitter.svg" />
          <p>Twitter</p>
        </p>
        <p className="social-textt1-live">
          <img src="./Vector.svg" />
          <p>Whatsapp</p>
        </p>
        <p className="social-textt1-live">
          <img src="gmail.svg" />
          <p>Soccergistonline@gmail</p>
        </p>
        <p className="social-textt1-live">
          <img src="youtube.svg" />
          <p>Youtube</p>
        </p>
      </div>
    </div>
  );
};

export default Livematches;
