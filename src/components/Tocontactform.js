import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-intl'
import Modal from 'react-modal';
import ContactForm from './ContactForm'
import Cancel from '../assets/close.svg'
Modal.setAppElement(`#___gatsby`);
const customStyles = {
    overlay: {
        backgroundColor: '#2d2d2fdb',
        zIndex: '99'
      },
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : 'transparent',
      maxWidth: '100%',
      width: '500px',
      border: 'none'
    }
  };

const Tocontactform =({data})=>{
    const img_cover  = data.file
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal(){
      setIsOpen(false);
    }
    return(
        <section className="tocontactform">
        <Img className="img_cover" width="100%" height="400px" fluid={img_cover.childImageSharp.fluid} alt="zasłony" decoding="async"/>
        <div className="container tocontactform-content content has-text-centered">
            <h3 style={{color:'#fff', fontSize: '44px'}}>Umów się na darmowe konsultacje</h3>
            <p style={{color:'#fff', padding: '0 15px'}}>
              Zadzwoń do nas lub wypełnij formularz a my się z Tobą skontaktujemy
            </p>
            <p>
            <a onClick={openModal} className="btn second" to="/kontakt#contact_form">
                Zamawiam kontakt
            </a>
            </p>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >  
              <div className="box" style={{background: '#d9c693'}}>
                  <div className="content">
                    <button onClick={closeModal} className="btn" style={{ padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'}}><Cancel width="16px" fill="#d9c693" style={{dusplay: 'block'}}/></button>
                    <ContactForm />
                  </div>
                   
                </div>
        </Modal>
      </section>
    )
}

 
export default () => (
    <StaticQuery
      query={graphql`
      query {
        file(relativePath: {eq: "portfolio-cover.png"}){
            childImageSharp {
              fluid (maxWidth: 1920, quality: 100){
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
      }
      `}
      render={(data) => <Tocontactform data={data}  />}
      />
    )