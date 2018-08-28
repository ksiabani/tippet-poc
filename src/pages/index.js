/* global graphql */

import React from 'react'
import Banner from '../components/banner'
import Grid from '../components/grid'

const IndexPage = props =>
  (
    <main>
      <Banner
        title={props.data.allDataJson.edges[0].node.banner[0].title}
        text={props.data.allDataJson.edges[0].node.banner[0].text}
        btnTxt={props.data.allDataJson.edges[0].node.banner[0].btnTxt}
      />
    </main>
  );

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          banner {
            title
            text
            btnTxt
          }
        }
      }
    }
  }
`
