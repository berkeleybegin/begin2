import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CategoryScroller from "../components/articles-category-scroller"
import ArticlesList from "../components/articles-list"

class ArticleDisplay extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          tags: ["all", "highlights", "begin", "from:scet", "from:haas", "from:ird", "from:thinking"],
          currentTag: "all",
          articles: {
            "begin": {
              "begin-22-06-2020": {
                "title": "Lorem",
                "author": "John Doe",
                "excerpt": "Cheers to the Details",
                "editor-spotlight": true,
                "date": "date date"
              }
            },
            "scet": {
              "scet-25-08-2020": {
                "title": "Lorem",
                "author": "Jane Doe",
                "excerpt": "lorem ipsum",
                "editor-spotlight": false,
                "date": "date date"
              }
            }
          }
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
          <ArticlesList current={this.state.currentTag} articles={this.state.articles}></ArticlesList>
        </>
      );
    }
  }
  
  export default ArticleDisplay
  