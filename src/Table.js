import React from 'react'
import LineItem from './LineItem.js'
import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: [
                false, false, false, false, false, false, false, false
            ]
        }

        console.log("Initial state:", this.state.checkboxes);

        this.checkHandler.bind(this);
    }

    toggleCheckbox(idx) {
        this.setState((state, props) => {
            state.checkboxes[idx] = !state.checkboxes[idx];
            console.log("Next state:", this.state.checkboxes);
        });
    }

    checkHandler(idx) {
        return () => this.toggleCheckbox(idx);
    }

    render() {
        return (
            <div className="app-table-wrapper">
                <p>{this.props.title}</p>
                <div className="app-table">
                    <LineItem onCheck={this.checkHandler(0)} header="C-001" value="Intra Urban">
                        <LineItem onCheck={this.checkHandler(1)} header="2019 / 12 / 01" value="Daily Report">
                            <LineItem onCheck={this.checkHandler(2)} header="" value="HSE Safety Checklist" />
                        </LineItem>
                    </LineItem>
                    <LineItem onCheck={this.checkHandler(3)} header="C-002" value="Poco Rec Center PH2">
                        <LineItem onCheck={this.checkHandler(4)} header="2019 / 12 / 01" value="Purchase Order" />
                    </LineItem>
                    <LineItem onCheck={this.checkHandler(5)} header="C-003" value="Central City Brewery">
                        <LineItem onCheck={this.checkHandler(6)} header="2019 / 12 / 01" value="Purchase Order">
                            <LineItem onCheck={this.checkHandler(7)} header="" value="Reoccuring Items" />
                        </LineItem>
                    </LineItem>
                </div>
            </div>
        );
    }
}

export default Table;
