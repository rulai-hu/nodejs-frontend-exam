import React from 'react'
import LineItem from './LineItem.js'
import './Table.css'

export default function Table(props) {
    return (
        <div className="app-table-wrapper">
            <p>{props.title}</p>
            <div className="app-table">
                <LineItem header="C-001" value="Intra Urban">
                    <LineItem header="2019 / 12 / 01" value="Daily Report">
                        <LineItem header="" value="HSE Safety Checklist" />
                    </LineItem>
                </LineItem>
                <LineItem header="C-002" value="Poco Rec Center PH2">
                    <LineItem header="2019 / 12 / 01" value="Purchase Order" />
                </LineItem>
                <LineItem header="C-003" value="Central City Brewery">
                    <LineItem header="2019 / 12 / 01" value="Purchase Order">
                        <LineItem header="" value="Reoccuring Items" />
                    </LineItem>
                </LineItem>
            </div>
        </div>
    )
}
