import React, { Dispatch, SetStateAction, useState } from "react";
import { ProductItemStyle } from "./style";
import { IProduts } from "@/helpers/types";

interface PropTypes extends IProduts {
	setTotal: Dispatch<SetStateAction<number>>;
}

const ProductItem = (props: PropTypes) => {
	const [count, setCount] = useState<number>(0);

	const addToCart = () => {
		setCount((count) => count + 1);
		props.setTotal((total) => total + props.price);
	};

	const removeFromCart = () => {
		setCount((count) => count > 0 ? count - 1 : 0);
		props.setTotal((total) => count > 0 ? total - props.price : total);
	};

	return (
		<ProductItemStyle className="product-item">
			<div className="product-item__content">
				<div className="product-item__image">
					<img src={props.image} alt={props.title} />
				</div>
				<div className="product-item__body">
					<h3 className="product-item__title">{props.title}</h3>
					<span className="product-item__price">${props.price}</span>
				</div>
			</div>
			<div className="product-item__actions">
				<button onClick={addToCart} className="product-item__button">+</button>
				<span>{count}</span>
				<button onClick={removeFromCart} className="product-item__button">-</button>
			</div>
		</ProductItemStyle>
	);
};

export default ProductItem;