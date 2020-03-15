import React from 'react'
import './LineItem.css'

class LineItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="line-item-wrapper">
                <div className="line-item">
                    <div className="line-item-header">{this.props.header}</div>
                    <div className="line-item-flex-container">
                        <span>{this.props.value}</span>

                        <label class="line-item-checkbox-wrapper">
                            <input type="checkbox" />
                            <div class="line-item-chk"></div>
                        </label>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default LineItem;
