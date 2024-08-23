import "./App.css";
import mainimg from "../src/assets/Frame 7.png";
import luxury from "../src/assets/Frame 34.png";
import union from "../src/assets/Union.png";
import Rectangle from "../src/assets/res/rectangle 1.png";
import gym from "../src/assets/res/Frame 29.png";
import supermarket from "../src/assets/res/rectangle 2.png";
import tour from "../src/assets/res/Frame 50.png";
import Xlogo from "../src/assets/res/devicon_twitter.png";
import Whatsapplogo from "../src/assets/res/logos_whatsapp-icon.png";
import IGLogo from "../src/assets/res/Group.png";
import FBlogo from "../src/assets/res/Vector (1).png";

function App() {
  return (
    <>
      <header>
        <div className="head">
          <div className="head1">
            <h1>
              SUNNY <br /> Vale
            </h1>
          </div>
          <div className="navlist">
            <a href="Home">Home</a>
            <a href="About Us">About Us</a>
            <a href="Gallery">Gallery</a>
            <a href="Contact Us">Contact Us</a>
          </div>
          <div className="head3">
            <button id="but1">Blog/News</button>
          </div>
        </div>
      </header>
      <section>
        <div className="main">
          <div className="main1">
            <h1 id="main2">DELIVERING PREMIUM SERVICES</h1>
            <p id="main3">
              Exceeding expectations with every detail, delivering premium
              services that define excellence.
            </p>
          </div>
          <div id="main4">
            <img src={mainimg} alt="Houses in SunnyVale" />
          </div>
        </div>
      </section>
      <section>
        <div className="mid">
          <div className="mid1">
            <h1 id="mid2">
              EXPERIENCE THE ALLURE OF <br /> SUNNYVALE ESTATE
            </h1>
            <div className="midd">
              <p id="mid3">
                Experience the timeless elegance of Sunnyvale, where
                architectural grandeur
                <br />
                meets luxurious comfort. Stroll through manicured gardens
                indulge in opulent interiors, and savor unique amenities
                designed for ultimate relaxation and refinement.
                <br />
                Discover a sanctuary where
                <br />
                every detail invites you to create unforgettable moments.
              </p>
              <div id="mid4">
                <img src={luxury} alt="Image" />
              </div>
            </div>
            <div id="mid5">
              <img src={union} alt="A Right Arrow" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="nearfooter">
          <div className="nearfooter1">
            <h1 id="nearfooter2">
              UNVEIL THE HIGHLIGHTS <br /> OF OUR NEIGHBOURHOOD
            </h1>
            <p id="nearfooter3">
              Enjoy unparalleled peace of mind with
              <br /> state-of- the-art security ensuring <br /> your safety
              around the clock. <br /> Maintain your wellness routine in fully
              <br />
              neighborhood park and benefit from <br /> on-site health equipped
              facilities. Plus, <br /> with convenient access to nearby <br />
              supermarkets, everything you need is <br /> just moments away.
            </p>
          </div>
          <div className="nearfooter4">
            <div className="nearfoot1">
              <div id="nearfoot1b">
                <div className="nearfoot2">
                  <div id="nearfoot4">
                    <div id="nearfoott4">
                      <h1 id="nearfoot4a">24/7 SECURITY</h1>
                      <div id="nearfoot4b">
                        <img src={Rectangle} alt="Security Officer" />
                      </div>
                    </div>
                    <div className="nearfoot3">
                      <p id="nearfoot3a">
                        Experience total peace of mind with 24/7 security at
                        Sunnyvale. Advanced surveillance systems, security
                        personnel, and secure entry points to ensure your safety
                        and privacy are always prioritized.
                      </p>
                      <div>
                        <button id="but2">View More</button>
                      </div>
                    </div>
                  </div>
                  <div className="nearfoot5">
                    <h1 id="nearfoot5a">GYMS & HEALTH</h1>
                    <div id="nearfoot5b">
                      <img src={gym} alt="Gym Equipments" />
                    </div>
                  </div>
                  <div className="nearfoot6">
                    <h1 id="nearfoot6a">SUPERMARKETS</h1>
                    <div id="nearfoot6b">
                      <img src={supermarket} alt="Supermarket" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="basfooter">
          <div className="basfooter1">
            <h1 id="basfooter2">
              VISUAL TOUR OF <br /> OUR SUNNYVALE ESTATE
            </h1>
            <p id="basfooter3">
              Embark on a captivating visual tour of Sunnyvale, where stunning
              architecture and lush landscapes come to life. Explore elegant
              interiors, manicured gardens, and luxurious amenities through
              high-definition imagery that showcases every exquisite detail and
              enchanting view. Witness the seamless blend of sophistication and
              comfort, and let the visuals transport you to a world of
              unparalleled elegance. Experience the estate's charm and grandeur
              from the comfort of your home.
            </p>
          </div>
          <div id="basfooter4">
            <img src={tour} alt="Tour Pictures" />
          </div>
        </div>
      </section>
      <section>
        <div className="finfooter">
          <div className="finfooter1"></div>
          <div className="finfooter2">
            <h1 id="finfooter3">
              LET'S START <br /> A CONVERSATION
            </h1>
            <p id="finfooter4">
              Invest in more than just a house; <br /> discover a place where
              your future <br /> begins and cherished memories are <br /> made.
              Find your perfect home and <br /> create a haven that embraces
              your <br /> unique vision of comfort and happiness
            </p>
          </div>
          <div className="finfooter5">
            <div>
              <h1 id="finfooter5a">Send an Inquiry</h1>
            </div>
            <div className="finfooter6">
              <input type="text" id="name" name="Name" placeholder="Name" />
              <br />
              <input
                type="text"
                id="emailaddress"
                name="Email"
                placeholder="Email Address"
              />
              <br />
              <input
                type="text"
                id="phonenumber"
                name="Phone"
                placeholder="Phone Number"
              />
              <br />
              <input
                type="text"
                id="message"
                name="Message"
                placeholder="Message"
              />
              <br />
            </div>
            <div className="finfooter7">
              <button id="but3">Submit Inquiry</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer">
          <div className="footer1">
            <h1 id="footer2">SunnyVale Estate</h1>
            <p id="footer3">
              Privacy Policy
              <br />
              Terms and Conditions
            </p>
          </div>
          <div className="footer4">
            <div id="footer5">
              <div>
                <img src={Xlogo} alt="X logo" />
              </div>
              <div>
                <img src={Whatsapplogo} alt="Whatsapp logo" />
              </div>
              <div>
                <img src={IGLogo} alt="Instagram logo" />
              </div>
              <div>
                <img src={FBlogo} alt="Facebook logo" />
              </div>
            </div>
            <div id="footer6">
              <p id="footer7">
                © 2024 BEU SunnyVale Estate All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
