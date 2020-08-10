import { Link } from "gatsby"
import React from 'react';
import PropTypes from "prop-types"

/**
 * Takes in details as a prop, consisting of the author, the title, the date, 
 * the excerpt, and if this is an editor's spotlight.
 * */
class ArticlesList extends React.Component {
    constructor(props) {
        super(props);
    }

    getArticles() {
        
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