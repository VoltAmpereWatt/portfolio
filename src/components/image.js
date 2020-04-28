import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = (props) => {
  const data = useStaticQuery(graphql`
   query Images {
    bg: file(relativePath: {eq: "bg.png"}) {
      id
      childImageSharp {
        fixed(width:400, height:400) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profile: file(relativePath: {eq: "profile.jpg"}){
      id
      childImageSharp{
        fixed(width:200,height:200){
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth:300,maxHeight:300){
          ...GatsbyImageSharpFluid
        }
      }
    }
 }`)

  return <Img fixed={data.profile.childImageSharp.fixed}
              fluid={data.profile.childImageSharp.Fluid}
              className={props.class_name}/>
}

export default Image
