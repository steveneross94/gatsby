import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'
import Head from '../components/head'

function BlogPage() {


    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
            sort: {
                fields: publishedDate,
                order: DESC
            }
        ) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString:"YYYY-MM-DD")
                }
            }
        }
    }
    `)

    const blogHeader = data.allContentfulBlogPost.edges

    return (
        <Layout>
            <Head title='Blog'/>
            <h1>I Know Words. I Have The Best Words.</h1>
            <ol className={blogStyles.posts}>
                {
                    blogHeader.map(edge => {
                        return (
                            <li className={blogStyles.post}>
                                <h2>
                                    <Link to={edge.node.slug}>
                                        {edge.node.title}
                                    </Link>
                                </h2>
                                <p>{edge.node.publishedDate}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage
