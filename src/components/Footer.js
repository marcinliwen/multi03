import React from 'react'
import { Link, graphql, StaticQuery} from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"

import logo from '../img/logo-light.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = ({data}) =>{

    const intl = useIntl()
    //const { data } = this.props
    
    const { edges: kontakt_info } = data.allMarkdownRemark
    const filteredInfo = kontakt_info.filter(edge =>
      edge.node.frontmatter.lang.includes(intl.locale)
    )
    const {frontmatter: data_info} = filteredInfo[0].node

    const getCurrentYear = () => {
      return new Date().getFullYear();
    };
  

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaja Decor"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/o-nas">
                        O nas
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/oferta">
                        Usługi
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Realizacje
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item footer-title" to="/kontakt">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li className="fotter-title">
                      Kontakt
                    </li>
                    <li className="footer-contact">
                      <div>{data_info.contact.telefon1}</div>
                      <div>{data_info.address.ulica}</div>
                      <div>{data_info.address.kod_pocztowy} {data_info.address.miasto}</div>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              <section>
                  <ul className="menu-list">
                    <li className="fotter-title">{data_info.open_hours.title}:</li>
                    <li className="footer-contact">
                      <div>{data_info.open_hours.day_start}  -  {data_info.open_hours.day_end}</div>
                      <div>{data_info.open_hours.hour_start} -  {data_info.open_hours.hour_end}</div>
                  </li>
                  </ul>
                </section>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {getCurrentYear()} - Kaja Decor</p>
            </div>
          </div>
        </div>
      </footer>
    )
  
}

//export default Footer

export default () => (
  <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { path: { eq: "/kontakt" } } }) {
        edges {
          node {
            frontmatter {
              lang
              title
              subtitle
              address{
                  ulica
                  miasto
                  kod_pocztowy
              }
              contact{
                  telefon1
                  telefon2
                  mail
              }
              open_hours{
                  title
                  day_start
                  day_end
                  hour_start
                  hour_end
              }
            }
          }
        }
      }
    }
    `}
    render={(data, count) => <Footer data={data} count={count} />}
  />
)