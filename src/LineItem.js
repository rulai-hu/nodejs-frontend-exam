import React from 'react'
import './LineItem.css'

class LineItem extends React.Component {
    render() {
        return (
            <div className="line-item-wrapper">
                <div className="line-item">
                    <div className="line-item-header">{this.props.header}</div>
                    <div className="line-item-flex-container">
                        <span>{this.props.value}</span>

                        <label className="line-item-checkbox-wrapper">
                            <input onClick={this.props.onCheck} type="checkbox" />
                            <div className="line-item-chk"></div>
                        </label>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default LineItem;
