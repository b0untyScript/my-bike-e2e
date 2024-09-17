import React from "react";
import "../../styles/Main.scss";
import bike1 from "../../../public/images/Agile ride 3.png";
import bike2 from "../../../public/images/Ride in town ST.png";
import bike3 from "../../../public/images/Sporty 4.png";
import handlebar1 from "../../../public/images/handlebar 1.png";
import handlebar2 from "../../../public/images/handlebar 2.png";
import frame1 from "../../../public/images/frame 1.png";
import frame2 from "../../../public/images/frame 2.png";
import accessories1 from "../../../public/images/accessories 1.png";
import accessories2 from "../../../public/images/accessories 2.png";

const Main = () => {
    return (
        <main>
            <section className="moveFree">
                <div className="mainText">
                    <p className="headerOfText">Move Free</p>
                    <p className="textContent">Shift your ride, not gears. Find the fastest way to move in the city as the bike adapts intuitively to power the speed you need.</p>
                </div>
            </section>

            <section className="compareBikes">
                <p className="mainHead">Compare Bikes</p>
                <div className="wrapper">
                    <div className="wrapper2">
                        <div className="container">
                            <img className="singlImg" src={bike1} alt="Bike 1" />
                        </div>
                        <div className="underImg">
                            <p className="under">Agile ride 3</p>
                            <p className="under">The lightweight frame that has earned its street tread as a sleek, agile ride.</p>
                            <p className="under">$ 2 090</p>
                        </div>
                    </div>

                    <div className="wrapper2">
                        <div>
                            <div className="container">
                                <img className="singlImg" src={bike2} alt="Bike 2" />
                            </div>
                            <div className="underImg">
                                <p className="under">Ride in town ST</p>
                                <p className="under">An open frame for an upright riding position as the most comfortable ride in town.</p>
                                <p className="under">$ 2 590</p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper2">
                        <div>
                            <div className="container">
                                <img className="singlImg" src={bike3} alt="Bike 3" />
                            </div>
                            <div className="underImg">
                                <p className="under">Sporty 4</p>
                                <p className="under">The iconic frame brought to a new performance height as a sporty, active ride.</p>
                                <p className="under">$ 2 590</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="theDetails">
                <div className="mainText">
                    <p className="firstText">The Details</p>
                </div>

                <div className="firstGallary">
                    <div className="imgContainer">
                        <img className="imgGallary" src={handlebar1} alt="Image 1" />
                        <img className="imgGallary" src={handlebar2} alt="Image 2" />
                    </div>
                    <div className="underImg">
                        <p className="under">Auto Unlock</p>
                        <p className="under">The app senses when you're nearby to unlock automatically. GPS tracking so you know where your bike is and can track it anytime.</p>
                    </div>

                    <div className="imgContainer">
                        <img className="imgGallary" src={frame1} alt="Image 1" />
                        <img className="imgGallary" src={frame2} alt="Image 2" />
                    </div>
                    <div className="underImg">
                        <p className="under">Range & Integrated lights</p>
                        <p className="under">The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.</p>
                    </div>

                    <div className="imgContainer">
                        <img className="imgGallary" src={accessories1} alt="Image 1" />
                        <img className="imgGallary" src={accessories2} alt="Image 2" />
                    </div>
                    <div className="underImg">
                        <p className="under">Hydraulic disc brakes & Lightweight</p>
                        <p className="under">Brakes with total stopping power the second you make contact. The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.</p>
                    </div>
                    <div className="button">
                        <button className="buttonGallary">Explore</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
