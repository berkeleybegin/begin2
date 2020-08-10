import { Link } from "gatsby"
import React from 'react';
import PropTypes from "prop-types"

import ArticleCard from "./article-card";

/**
 * Takes in details as a prop, consisting of the author, the title, the date, 
 * the excerpt, and if this is an editor's spotlight.
 * */
class ArticlesList extends React.Component {
    constructor(props) {
        super(props);
    }

    getArticles() {
        var articles= this.props.articles
        var current = this.props.current
        var input = []
        if (current === "all") {
            for (var category in articles) {
                var subtags = articles[category];
                if (subtags === undefined) {
                    return null;
                }
                for (var article in subtags) {
                    let details = subtags[article];
                    input.push(
                        <ArticleCard 
                            title={details.title} 
                            editor-spotlight={details.editorspotlight}
                            author={details.author}
                            date = {details.date}
                            excerpt = {details.excerpt}
                        />
                    );
                }
            }
        }
        else {
            articles = articles[current];
            if (articles === undefined) {
                return null;
            } else {
                for (var article in articles) {
                    let details = articles[article];
                    input.push(
                        <ArticleCard 
                            title={details.title} 
                            editor-spotlight={details.editorspotlight}
                            author={details.author}
                            date = {details.date}
                            excerpt = {details.excerpt}
                        />
                    );
                }
            }
        }
        return input;
    }

    render() {
        return (
            <>
                {this.getArticles()}
           </>
        );
    }
}

export default ArticlesList;