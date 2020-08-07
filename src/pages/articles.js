import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CategoryScroller from "../components/category-scroller"
import ArticleCard from "../components/article-card"

class ArticleDisplay extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
          tags: ["all", "highlights", "begin", "from:scet", "from:haas", "from:ird", "from:thinking"],
          currentTag: "all",
       }
       this.handleTagChange = this.handleTagChange.bind(this);
    }

    handleTagChange(e) {
        this.setState({currentTag: e.target.value});
    }
  
    render() {
      return (
        <>
          <CategoryScroller 
                titles={this.state.tags}
                tagChange={this.handleTagChange}>
            </CategoryScroller>
            <ArticleCard tag={this.currentTag}></ArticleCard>
        </>
      )
    }
  }
  
  export default ArticleDisplay
  