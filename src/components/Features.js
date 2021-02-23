import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="services-container">
  <div className="services">  
    {gridItems.map((item) => (
      <div key={item.text} className="services-item">
            <div className="services-img">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
       
      </div>
    ))}
  </div>
  </div>
  
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
