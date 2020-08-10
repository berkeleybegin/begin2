import { Link } from "gatsby"
import React from 'react';
import PropTypes from "prop-types"

/**
 * Takes in details as a prop, consisting of the author, the title, the date, 
 * the excerpt, and if this is an editor's spotlight.
 * */
class ArticleCard extends React.Component {
    render() {
        return (
            <a href="#">
            {this.props.spotlight &&
                <p>EDITOR'S SPOTLIGHT</p>
            }
            <h1>{this.props.title}</h1>
            <p>{this.props.author} | {this.props.date}</p>
            <p>{this.props.excerpt}</p>
            </a>
        );
    }
}

export default ArticleCard;