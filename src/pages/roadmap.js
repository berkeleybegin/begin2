import React from "react"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"

export default function main() {
  return (
    <Layout>
      <PageTitle sx={{ mb: 5 }}>RoadMap</PageTitle>
      <iframe
        style={{ border: "none" }}
        width="800"
        height="450"
        src="https://whimsical.com/embed/WbBT6tK6cbwqTtKHWVr7tq"
      ></iframe>
    </Layout>
  )
}
