import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Fade } from "react-awesome-reveal";
import { InView } from 'react-intersection-observer';



const FeatureGrid = ({ gridItems }) =>{ 
  const [inView, setInView] = React.useState(false)
  
  return (
  <div className="services-container">
    <div className="services">
      <Fade  triggerOnce  className="services-item" cascade childClassName="services-wrap"  damping={0.3}>
      {gridItems.map((item, index) => (
        <div key={"features"+index}>
            <div className="services-img">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p> 
        </div>
      ))}
      </Fade>
    </div>
  </div>
)}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
