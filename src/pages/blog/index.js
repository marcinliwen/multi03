import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Subheader from '../../components/Subheader'
import Tocontactform from '../../components/Tocontactform'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Subheader title="Nasze realizacje" />
        <section className="section portfolio is-medium">
          <div className="container">
            <div className="content ">
              <BlogRoll isServicesPage={true} />
            </div>
          </div>
        </section>
        <Tocontactform />
      </Layout>
    )
  }
}
