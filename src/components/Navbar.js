import React, { useState, useEffect } from 'react'
//import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import LanguageSelect from './LanguageSelect'
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const toggleHamburger = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    if (menu) {
      document.querySelector('html').classList.add('menu-open')
      //console.log(document.querySelector("html"))
    } else {
      //console.log(document.querySelector("html"))
      document.querySelector('html').classList.remove('menu-open')
    }
  })
  const phone_number = '+48 664 478 788'

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="logo" title="Logo">
            <img src={logo} alt="KAJA decor" style={{ width: '100px' }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${menu ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${menu ? 'is-active' : ''}`}>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/o-nas">
              O nas
            </Link>
            <Link className="navbar-item" to="/oferta">
              Usługi
            </Link>
            <Link className="navbar-item" to="/">
              Realizacje
            </Link>
            <Link className="navbar-item" to="/kontakt">
              Kontakt
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/kontakt#gmap">
              Znajdź nas
            </Link>
            <a className="navbar-item">{phone_number}</a>
          </div>
          <LanguageSelect />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

export const getNumberQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/kontakt" } } }) {
      edges {
        node {
          frontmatter {
            contact {
              telefon1
            }
          }
        }
      }
    }
  }
`
