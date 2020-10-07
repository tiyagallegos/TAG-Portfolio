import React from "react"
import Layout from '../components/Layout'
import { Link } from "gatsby"

export default function Home() {
  return (
  <Layout>
    <h1>Tiya Gallegos</h1>
    <h2>Full Stack Developer</h2>
    <Link to="/about">About Me</Link>
  </Layout>
  );
}
