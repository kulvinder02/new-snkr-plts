import React from 'react'
import logo from '../assets/images/logo.png'
import addvr from '../assets/images/add-img.png'

function Mynavbar() {
  return (
    <div>
        <section>
      <nav className="container">
        <div class="d-flex justify-content-between navbar-1">
          <img src={logo}  className='logo'/>
          <img src={addvr}  className='d-none d-lg-block'/>
        </div>
      </nav>
      <div className="nav-shadow">
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-12 col-xxl-8 d-flex justify-content-end">
              <ul
                className="d-flex gap-3 navbar2 nav-bar-sm justify-lg-content-end align-items-center"
                id="smal_nav"
              >
                <li>
                  <div className="nav-links clr-black ff-roboto fs-18 fw-400"
                    >HOME </div>
                </li>
                <li>
                  <div className="nav-links clr-black ff-roboto fs-18 fw-400"
                    >SNEAKERS KOPEN </div >
                </li>
                <li>
                  <div className="nav-links clr-black ff-roboto fs-18 fw-400"
                    >INTERVIEWS</div>
                </li>
                <li>
                  <div className="nav-links clr-black ff-roboto fs-18 fw-400"
                    >SALE</div >
                </li>
                <li>
                  <div className="nav-links clr-black ff-roboto fs-18 fw-400"
                    >SNEAKER VAN DE DAG </div>
                  
                </li>
                <li>
                  <div className="nav-links clr-black ff-roboto fs-18 fw-400"
                    >SNEAKER FORUM</div>
                  
                </li>
                <li>
                  <div className="nav-links clr-black ff-roboto fs-18 fw-400"
                    >BLOG</div>
                
                </li>
              </ul>
              <div
                onclick="opennav()"
                id="box"
                class="d-block d-lg-none click_box justify-content-end"
              >
                <span id="span1" class="span-icon"></span>
                <span id="span2" class="span-icon"></span>
                <span id="span3" class="span-icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Mynavbar