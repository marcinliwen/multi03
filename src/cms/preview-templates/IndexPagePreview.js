import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  const entryFeatures = entry.getIn(['data', 'features'])
  const features = entryFeatures ? entryFeatures.toJS() : []

  const entryServicesSteps = entry.getIn(['data', 'services_steps', 'steps'])
  const servicesSteps = entryServicesSteps ? entryServicesSteps.toJS() : []
  if (data) {
    return (
      <IndexPageTemplate
        bg_image={data.bg_image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        features={features}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
        brands={data.brands}
        counter={data.counter}
        home_btn={data.home_btn}
        location="admin"
        services_steps={{
          title: entry.getIn(['data', 'services_steps', 'title' ]),
          steps: servicesSteps
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
