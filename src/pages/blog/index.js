import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Subheader from '../../components/Subheader'
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Subheader title="Nasze realizacje" />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
