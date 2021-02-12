import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'



const ContactPagePreview = ({ entry, widgetFor }) => {
  
return(
  <ContactPageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    ulica={entry.getIn(['data', 'address','ulica'])}
    miasto={entry.getIn(['data', 'address','miasto'])}
    kod_pocztowy={entry.getIn(['data', 'address','kod_pocztowy'])}
  
  
    telefon1={entry.getIn(['data',  'contact', 'telefon1'])}
    telefon2={entry.getIn(['data',  'contact', 'telefon2'])}
    mail={entry.getIn(['data', 'contact', 'mail'])}
   
    open_title={entry.getIn(['data', 'open_hours', 'title'])}
    day_start={entry.getIn(['data', 'open_hours', 'day_start'])}
    day_end={entry.getIn(['data', 'open_hours', 'day_end'])}
    hour_start={entry.getIn(['data', 'open_hours', 'hour_start'])}
    hour_end={entry.getIn(['data', 'open_hours', 'hour_end'])}
  />
)}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
