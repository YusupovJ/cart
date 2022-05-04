import React from "react";
import { itemListLength } from "./Item";
import "./../css/components/App.css"
import Item from "./Item"

export default class App extends React.Component {
	constructor() {
		super() 
		this.state = {
			itemsCount: itemListLength || 0,
		}
	}
	render() {
		return (
			<div className="wrapper">
				<div className="container">
					<div className="info">
						<h1 className="info__title">Shopping Cart</h1>
						<h2 className="info__count">{this.state.itemsCount} Items</h2>
					</div>
					<Item />
				</div>
			</div>
		)
	}
}