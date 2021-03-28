import React from 'react'
import PropTypes from 'prop-types'


const PreviewCompatibleSVG = ({ imageInfo, size }) => {
  const imageStyle = {height: `${size}px` , width: `${size}px`}
  const { alt = '', image } = imageInfo

  if (!image.childImageSharp && image.extension === 'svg' ) {
       return  <img style={imageStyle} src={image.publicURL} />
    }


  if (!!image && typeof image === 'string'){
    return <img  style={imageStyle} src={image} alt={alt} />
  }
  return null
}

PreviewCompatibleSVG.propTypes = {
  imageInfo: PropTypes.shape({
    //alt: PropTypes.string,
    //childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    //style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleSVG
