import React from 'react'
//import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import LanguageSelect from './LanguageSelect'
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }
  
  
  
  render() {
  
  const phone_number = "+48 664 478 788" 
    return (
      <nav
        className="navbar"
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
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/o-nas">
                O nas
              </Link>
              <Link className="navbar-item" to="/oferta">
                Usługi
              </Link>
              <Link className="navbar-item" to="/">Realizacje</Link>
              <Link className="navbar-item" to="/kontakt">
                Kontakt
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/kontakt#gmap">Znajdź nas</Link>
              <a className="navbar-item">{phone_number}</a>
            </div>
              <LanguageSelect />
           
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar



export const getNumberQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/kontakt" } } }) {
      edges {
        node {
          frontmatter {
            contact{
                telefon1
            }
          }
        }
      }
    }
  }
  `