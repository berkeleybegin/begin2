import React from "react"
import {Helmet} from "react-helmet"

export default function Head() {
  return (
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/qko1qsv.css" />
      <title>Berkeley Gateway To Innovation</title>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-70509216-4"></script>
      {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-70509216-4');
      </script> */}
    </Helmet>
  )
}
