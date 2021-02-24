import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

const languageName = {
  pl: 'Pl',
  de: 'De',
}

const Language = () => {
  return (
    <div style={{}} className="navbar-end has-text-centered lang-select">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language, index) => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#D9C693` : `#2D2D2F`,
                backgroundColor: currentLocale === language ? `#2D2D2F` : ``,
                textDecoration: `none`,
                cursor: `pointer`,
                width: `48px`,
                textAlign: `center`,
                display: `flex`,
                justifyContent: `center`,
              }}
              className="navbar-item"
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
