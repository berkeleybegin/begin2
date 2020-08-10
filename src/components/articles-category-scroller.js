import { Link } from "gatsby"
import React from 'react';
import PropTypes from "prop-types"

/**
 * Creates a category scroller 
 */
class CategoryScroller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryDisplayStart: 0,
            categoryDisplayEnd: 4,
        }
        this.getCategories = this.getCategories.bind(this);
        this.handleLeftSelect = this.handleLeftSelect.bind(this);
        this.handleRightSelect = this.handleRightSelect.bind(this);
    }

    getCategories() {
        var displayArray = this.props.titles.slice(this.state.categoryDisplayStart, this.state.categoryDisplayEnd);
        var displayList = []
        displayArray.forEach(item => {
            displayList.push(<li key={item}><button value={item} onClick={this.props.tagChange}>{item}</button></li>)
        })
        return displayList;
    }

    handleLeftSelect(e) {
        if (this.state.categoryDisplayStart!==0) {
            this.setState((prevState) => ({
                categoryDisplayStart: prevState.categoryDisplayStart-4,
                categoryDisplayEnd: prevState.categoryDisplayEnd-4
            }));
        }
        event.preventDefault();
    }

    handleRightSelect(e) {
        if (this.state.categoryDisplayEnd < this.props.titles.length) {
            this.setState((prevState) => ({
                categoryDisplayStart: prevState.categoryDisplayStart+4,
                categoryDisplayEnd: prevState.categoryDisplayEnd+4
            }));
        }
    }

    render() {
        return (
            <>
            <button onClick={this.handleLeftSelect}>Go left</button>
            <ul>{this.getCategories()}</ul>
            <button onClick={this.handleRightSelect}>Go Right</button>
            </>
        );
    }
}

export default CategoryScroller;