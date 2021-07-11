import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

import { SITE_CONTENT } from './Gallery/constants/site_content'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
      <strong> California Woodworx </strong>
      Custom Cabinetry and Refacing professionals.
      <strong> You dream it we build it.</strong>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
