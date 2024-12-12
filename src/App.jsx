import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import logo_sm from './assets/images/icons/logo-sm.png'
import search_icon_sm from './assets/images/icons/search-icon-sm.png'
import {Link} from 'react-router-dom'
import cart_sm from './assets/images/icons/cart-sm.png'
import mac_laptop from './assets/images/home/mac-laptop.jpg'
import watch_series5_logo from './assets/images/home/watch-series-5.jpg'
import watch_lg from './assets/images/home/watch-lg.jpg'
import apple_card_logo from './assets/images/icons/apple-card-logo.png'
import apple_tv_logo from './assets/images/icons/apple-tv-logo.png'
import air_pods from './assets/images/home/air-pods.jpg'
import macbook_pro from './assets/images/home/macbook-pro.jpg'
import new_ipad_logo from './assets/images/icons/new-ipad-logo.png'
import sixteen from './assets/images/icons/16.png' 






function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    {/* <!-- Header navigation --> */}
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse" // Updated for Bootstrap 5
            data-bs-target="#navbarCollapse" // Updated for Bootstrap 5
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <Link className="navbar-brand mx-auto" to="#">
            <img src={logo_sm} alt="Logo" />
          </Link>

          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/mac/">Mac</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/iphone/">iPhone</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/ipad/">iPad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/watch/">Watch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/tv/">TV</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/music/">Music</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/support/">Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/">
                  <img src={search_icon_sm} alt="Search Icon" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart/">
                  <img src={cart_sm} alt="Cart Icon" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  
    {/* <!-- Your code goes in here --> */}


    {/* <!--********** main section******** --> */}

    <main className="container-fluid">
      {/* <!-- section-1 --> */}
      <section className="first-section">
        <div className="text-center">
          <div className="">
            <h6>16-inch Model</h6>
          </div>
          <div >
            <h1 className="font-weight-bold">Macbook pro</h1>
          </div>
          <div>
            <h3>The best for the brightest.</h3>
          </div>
          <div className="links">
            <ul >
              <li className="col-6 text-right"><Link to="#" className = "link-with-icon">Learn more <i className="fa-solid fa-greater-than"></i></Link></li>
              <li className="col-6 text-left"><Link to="#" >Buy</Link></li>
            </ul>
          </div>
          <div>
            <img src={mac_laptop} alt="mac pro" />
          </div>
        </div>
      </section>

      {/* <!-- section-2 --> */}

      <section>
        <div className="first-div text-center pt-5">
          <div >
            <h1 className="font-weight-bold">iPhone 11 Pro</h1>
          </div>
          <div>
            <h3>Pro Camera. Pro display. Pro performance. </h3>
          </div>
          <div>
            <p>from $24.95/mo. or $599 with trade-in</p>
          </div>
          <div  className="links">
            <ul>
              <li className="col-6 text-right"><Link to="#">Learn more</Link></li>
              <li className="col-6 text-left"><Link to="#">Buy</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- section-3 --> */}
      <section className="sec3 w-100">
        <div  className="third-div text-center">
          <div>
            <h1 className="font-weight-bold">iPhone 11</h1>
          </div>
          <div>
            <h3>Just the right amount of everything.</h3>
          </div>
          <div>
            <p>from 16.62/mo. or $399 with trade in.</p>
          </div>
          <div  className="links">
            <ul>
              <li className="col-6 text-right"><Link to="#">Learn more</Link></li>
              <li className="col-6 text-left"><Link to="#">Buy</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- section-4 --> */}
      <section className="row  section-4">
        <div className="section-4a sec text-center pr-md-1 col-md p-3  mr-1">
            <div className="py-4">
              <img src={watch_series5_logo} alt="" />
            </div>
            <div className="pb-2">
                <h3>
                  With the new Always on Retina display. You've never seen a watch like this.
                </h3>
            </div>
            <div className="links">
              <ul>
                <li className="col-6 text-right"><Link to="#">Learn more</Link></li>
                <li className="col-6 text-left"><Link to="#">Buy</Link></li>
              </ul>
          </div>
          <div>
            <img src={watch_lg }alt="" />
          </div>
        </div>
        <div className="section-4b sec pt-2 col-md p-3 pl-md-1 ml-1">
          <div className="text-center">
            <div>
              <div className="py-4" >
                <img src={apple_card_logo} alt="" />
              </div>
              <div className="pb-2">
                <h3 className="black">Get 3% Daily cash on purchases from Apple using Apple card</h3>
              </div>
              <div  className="links">
                <ul>
                  <li className="col-6 text-right"><Link to="#">Learn more</Link></li>
                  <li className="col-6 text-left"><Link to="#">Buy</Link></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      </section>

      {/* <!-- section-5 --> */}

      <section className="row section-5 ">
        <div className="section-5a text-center pt-2 col-md mr-1">
          <div className="pt-3 apple-tv">
            <img src={apple_tv_logo} alt="" />
          </div>
          <div className="servant">
            <img src="./images/icons/servant-logo.png" alt="" />
          </div>
          <div className="watch font-weight-bold"> 
            <p><Link to="#">Watch the trailer</Link></p>
          </div>
        </div>
        <div className="section-5b text-white text-center col-md ml-1">
          <div className="pt-3">
            <h1>AirPods Pro</h1>
          </div>
          <div>
            <h3 className="pb-3">Magic like you've never heard</h3>
          </div>
          <div  className="links">
            <ul>
              <li className="col-6 text-right"><Link to="#">Learn more</Link></li>
              <li className="col-6 text-left"><Link to="#">Buy</Link></li>
            </ul>
          </div>
          <div>
            <img src={air_pods} alt="" />
          </div>
        </div>
      </section>

      {/* <!-- section-6 --> */}

      <section className="row section-6 first-section ">
        <div className="text-center col-md mr-1">
          <div className="">
            <h6>16-inch Model</h6>
          </div>
          <div >
            <h1 className="font-weight-bold">Macbook pro</h1>
          </div>
          <div className="pb-3">
            <h3>The best for the brightest.</h3>
          </div>
          <div className="pb-3 links">
            <ul>
              <li className="col-6 "><Link to="#">Learn more</Link></li>
              <li className="col-6 "><Link to="#">Buy</Link></li>
            </ul>
          </div>
          <div>
            <img src={macbook_pro} alt="mac pro" />
          </div>
        </div>
        <div className="text-center section-6b col-md ml-1">
            <div>
              <div className="py-4" >
                <img src={new_ipad_logo} alt=""/>
              </div>
              <div className="pb-2">
                <h3>Get 3% Daily cash on purchases from Apple using Apple card</h3>
              </div>
              <div className="links pb-4">
                <ul>
                  <li className="col-6 text-right"><Link to="#">Learn more</Link></li>
                  <li className="col-6 text-left"><Link to="#">Buy</Link></li>
                </ul>
              </div>
            </div>
        </div>
      </section>
    </main>

    {/* <!-- Footer section stats here --> */}
    <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the <br />
            <Link
              to="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              Customer Agreement </Link>. Additional iPhone Payments terms are 
            <Link
              to="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"
            >
              here</Link>
          </p>
          <p>
            2. Subscription required.<br /><br />
            Magic Keyboard sold separately.<br /><br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <Link to="https://www.apple.com/promo/">terms </Link> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>Shop and Learn</h3>
            <ul >
              <li><Link to="#">Mac</Link></li>
              <li><Link to="#">iPad</Link></li>
              <li><Link to="#">iPhone</Link></li>
              <li><Link to="#">Watch</Link></li>
              <li><Link to="#">TV</Link></li>
              <li><Link to="#">Music</Link></li>
              <li><Link to="#">AirPods</Link></li>
              <li><Link to="#">HomePod</Link></li>
              <li><Link to="#">iPod touch</Link></li>
              <li><Link to="#">Accessories</Link></li>
              <li><Link to="#">Gift Cards</Link></li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>Services</h3>
            <ul>
              <li><Link to="#">Apple Music</Link></li>
              <li><Link to="#">Apple News+</Link></li>
              <li><Link to="#">Apple TV+</Link></li>
              <li><Link to="#">Apple Arcade</Link></li>
              <li><Link to="#">Apple Card</Link></li>
              <li><Link to="#">iCloud</Link></li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li><Link to="#">Manage Your Apple ID</Link></li>
              <li><Link to="#">Apple Store Account</Link></li>
              <li><Link to="#">iCloud.com</Link></li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>Apple Store</h3>
            <ul>
              <li><Link to="#">Find a Store</Link></li>
              <li><Link to="#">Genius Bar</Link></li>
              <li><Link to="#">Today at Apple</Link></li>
              <li><Link to="#">Apple Camp</Link></li>
              <li><Link to="#">Field Trip</Link></li>
              <li><Link to="#">Apple Store App</Link></li>
              <li><Link to="#">Refurbished and Clearance</Link></li>
              <li><Link to="#">Financing</Link></li>
              <li><Link to="#">Apple Trade In</Link></li>
              <li><Link to="#">Order Status</Link></li>
              <li><Link to="#">Shopping Help</Link></li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3>For Business</h3>
            <ul>
              <li><Link to="#">Apple and Business</Link></li>
              <li><Link to="#">Shop for Business</Link></li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li><Link to="#">Apple and Education</Link></li>
              <li><Link to="#">Shop for College</Link></li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li><Link to="#">Manage Your Apple ID</Link></li>
              <li><Link to="#">Apple Store Account</Link></li>
              <li><Link to="#">iCloud.com</Link></li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li><Link to="#">Apple and Education</Link></li>
              <li><Link to="#">Shop for College</Link></li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li><Link to="#">Find a Store</Link></li>
              <li><Link to="#">Genius Bar</Link></li>
              <li><Link to="#">Today at Apple</Link></li>
              <li><Link to="#">Apple Camp</Link></li>
              <li><Link to="#">Field Trip</Link></li>
              <li><Link to="#">Apple Store App</Link></li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li><Link to="#">Find a Store</Link></li>
              <li><Link to="#">Genius Bar</Link></li>
              <li><Link to="#">Today at Apple</Link></li>
              <li><Link to="#">Apple Camp</Link></li>
              <li><Link to="#">Field Trip</Link></li>
              <li><Link to="#">Apple Store App</Link></li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <Link to="#">Find an Apple Store</Link> or
          <Link to="#">other retailer</Link> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div
            className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1"
          >
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Sales and Refunds</Link></li>
              <li><Link to="#">Legal</Link></li>
              <li><Link to="#">Site Map</Link></li>
            </ul>
          </div>
          <div
            className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3"
          >
            <div className="flag-wrapper"><img src={sixteen} /></div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
};



export default App
