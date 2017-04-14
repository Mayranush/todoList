import React, { PropTypes, Component } from "react";
import { CotegoryItem } from "./CotegoryItem";

import "./Cotegory.scss";


class Cotegory extends Component {

    static propTypes = {
        toDoList: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="cotegory-container">
                {this.props.toDoList.map(
                    (item, i) => <CotegoryItem
                        item={item}
                        key={item.id}
                        id={item.id}
                        check={this.props.choosenCategoryId == item.id}
                        handleChoosenCategory={this.props.handleChoosenCategory} />
                )}
            </div>
        )
    }
};


export { Cotegory }