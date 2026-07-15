import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import BlogDetailsOne from '../Components/Blog/BlogDetailsOne'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import { findArticle } from '../cms/articles'

function BlogDetails() {
    const { id } = useParams()
    const article = findArticle(id)

    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title={article?.breadcrumb || 'Insight not found'}
            />
            <BlogDetailsOne article={article} />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default BlogDetails
