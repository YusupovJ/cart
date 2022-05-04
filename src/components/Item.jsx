import React from "react";
import "./../css/components/Item.css";

export default class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			itemInfo: [
				{ title: "Fifa 19", subtitle: "PS4", count: 0, price: 44, totalPrice: 0 },
				{ title: "Glacier White 500GB", subtitle: "PS4", count: 0, price: 249.99, totalPrice: 0 },
				{ title: "Platinum Headset", subtitle: "PS4", count: 0, price: 119, totalPrice: 0 },
			],
			totalSum: 0,
		};
	}
	render() {
		const calcSum = () => {
			let sum = 0;
			for (let i = 0; i < this.state.itemInfo.length; i++) {
				const elem = this.state.itemInfo[i];
				sum += elem.totalPrice;
			}
			this.setState({ totalSum: sum });
		};

		const increment = (i) => {
			this.setState(Object.assign(this.state.itemInfo[i], { count: this.state.itemInfo[i].count + 1 }));
			this.setState(Object.assign(this.state.itemInfo[i], { totalPrice: this.state.itemInfo[i].count * this.state.itemInfo[i].price }));
			calcSum();
		};

		const decrement = (i) => {
			if (this.state.itemInfo[i].count > 0) {
				this.setState(Object.assign(this.state.itemInfo[i], { count: this.state.itemInfo[i].count - 1 }));
				this.setState(Object.assign(this.state.itemInfo[i], { totalPrice: this.state.itemInfo[i].count * this.state.itemInfo[i].price }));
				calcSum();
			}
		};

		return (
			<div className="items">
				<div className="item__names">
					<h5 className="item__name">Product Details</h5>
					<h5 className="item__name">Quality</h5>
					<h5 className="item__name">Price</h5>
					<h5 className="item__name">Total</h5>
				</div>
				{this.state.itemInfo.map((item, index) => {
					return (
						<div key={index} className="items__item">
							<div className="items__info">
								<div className="items__image"></div>
								<div className="items__body">
									<h3 className="items__title">{item.title}</h3>
									<h4 className="items__subtitle">{item.subtitle}</h4>
									<button className="items__remove">Remove</button>
								</div>
							</div>
							<div className="items__count">
								<button onClick={decrement.bind(this, index)} className="items__button">
									-
								</button>
								<p>{this.state.itemInfo[index].count}</p>
								<button onClick={increment.bind(this, index)} className="items__button">
									+
								</button>
							</div>
							<p className="items__price">$ {this.state.itemInfo[index].price}</p>
							<p className="items__total-price">$ {this.state.itemInfo[index].totalPrice}</p>
						</div>
					);
				})}
				<h2 className="total-sum">Total: {this.state.totalSum}</h2>
			</div>
		);
	}
}

const item = new Item();
export const itemListLength = item.state.itemInfo.length;
