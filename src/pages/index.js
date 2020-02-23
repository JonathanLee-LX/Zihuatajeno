import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>欢迎来到我的个人博客</h1>
    <p>我是一个前端程序员，这个博客记录了我的工作生活和学习</p>
    <p>
      我的日常工作是web开发，因此这个博客的绝大多数内容都是和web开发有关的，我享受写代码时创造事物的成就感。
    </p>
    <p>
      知识是需要积累的，我相信坚持写博客会是一个很好的积累方式，另外如果这个方式能帮助到其他需要的人就再好不过了。
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
