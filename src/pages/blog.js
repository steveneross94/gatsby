import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'

function BlogPage() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        }
                html
                excerpt
                fields {
                    slug
                    }
                }
            }
        }
    }
    `)

    const blogHeader = data.allMarkdownRemark.edges

    return (
        <Layout>
            <h1>Welcome to My Blog</h1>
            <ol className={blogStyles.posts}>
                {
                    blogHeader.map(edge => {
                        return (
                            <li className={blogStyles.post}>
                                <h2>
                                    <Link to={edge.node.fields.slug}>
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage
