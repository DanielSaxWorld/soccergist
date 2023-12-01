import React from "react";
import "./Messi.css";
import Header from "../../components/homepage/header/Header";
import Messireads from "../../components/messipage/messireads/Messireads";
import Topsidecard from "../../components/messipage/topsidecard/Topsidecard";
import Socialsidecard from "../../components/messipage/socialsidecard/Socialsidecard";
import Mchatbox from "../../components/messipage/mchatbox/Mchatbox";
import Mfullcomment from "../../components/messipage/mfullcomment/Mfullcomment";
import Mfeaturednews from "../../components/messipage/mfeaturednews/Mfeaturednews";
import Footer from "../../components/messipage/footer/Footer";
const Messi = () => {
  return (
    <div className="messi-page">
      <Header />
      <Messireads
        Headtext1="'Messi is not human': Inter Miami star scores twice, his third straight game with a goal"
        image1="./icontime.svg"
        text1="20 minutes"
        image2="iconcomment.svg"
        text2="16"
        image3="./Ellipseblack.png"
        image4="./link.png"
        image5="./Ellipseblack.png"
        image6="./twitterblack.png"
        image7="./Ellipseblack.png"
        image8="./facebookblack.png"
        image9="./Ellipseblack.png"
        image10="./instagramblack.png"
        image11="./Ellipseblack.png"
        image12="./whatsappblack.png"
        image13="./messi1.png"
        Headtext2="Messi scored in his third straight game and had his second consecutive multi-goal performance for Inter Miami in a 3-1 victory over Orlando City."
        Paragraph1="There is no stopping Lionel Messi. The Argentine superstar continued his red-hot form for Inter Miami and scored a brace against Orlando City on Wednesday night to guide his side to the round of 16 of the Leagues Cup. Inter Miami clinched a convincing 3-1 win to qualify for the next stage of the knockout competition. Following a rain-enforced 95-minute delay, 

Messi needed just seven minutes to score the opening goal of the night at the DRV PNK Stadium in Miami. Lionel Messi of Inter Miami CF celebrates after scoring a goal during the Leagues Cup 2023 Round of 32 match between Orlando City SC.
"
        image14="./messi2.png"
        Paragraph2="Inter Miami’s Rob Taylor came up with a through ball which found Messi in the penalty box. The seven-time Ballon d’Or winner made no mistake in finding the back of the net with a left-footed shot. The official Twitter handle of the Major League Soccer (MLS) shared a clip of Messi’s first goal of the fixture. “That man Messi. Robert Taylor drops a dime to Messi for the Inter Miami CF goal,” the tweet read.

The hosts put the final nail in the coffin in the 72nd minute as Lionel Messi bagged the second goal of the game in sublime fashion. The World Cup winner pulled off a right-footed shot from the centre of the box to seal the win for Inter Miami. Lionel Messi has so far netted five goals making three appearances for Inter Miami. The game against Orlando City marked Messi’s first full 90 minutes on the pitch in Inter Miami jersey"
      />
      <Topsidecard
        word="Top Tags"
        img="./Line2.png"
        word1="Transfers"
        word2="Breaking News"
        word3="Stories"
        word4="Latest News"
        word5="Opinion and Analysis"
        word6="Top Videos"
        word7="Player Lifestyles"
        word8="Rumours"
        word9="FPL Updates"
      />
      <Socialsidecard />
      <Mchatbox />
      <Mfullcomment />
      <Mfeaturednews />
      <Footer />
    </div>
  );
};

export default Messi;
