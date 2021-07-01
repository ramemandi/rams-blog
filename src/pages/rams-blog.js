import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'

class BlogRam extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulRamsblog.edges')
console.log(posts,'posts');
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title="Rams Blog" />
          <div className={styles.hero}>{posts[0].node.nameOfTheUser} Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">About Blogger</h2>
            <div>
           {posts[0].node.aboutTheBlog.content.map((item,index)=>{
                           
                
                   return ( <p key={item.content[0].value}> {item.content[0].value} </p> )
               
            })}
      

            </div>
            {/* { <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul> } */}
      
            <h3>{posts[0].node.nameOfTheUser}</h3>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogRam


export const query = graphql `query MyQuery {
  allContentfulRamsblog {
    edges {
      node {
        spaceId
        nameOfTheUser
        blogPhoto {
          file {
            contentType
            fileName
            url
          }
          fluid(maxHeight: 196, maxWidth: 350, resizingBehavior: SCALE) {
            tracedSVG
          }
        }
        aboutTheBlog {
            content {
              content {
                value
                nodeType
              }
            }
          }
      }
    }
  }
}`;
// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             fluid(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
