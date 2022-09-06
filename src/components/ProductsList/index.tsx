import React, { Dispatch, SetStateAction } from "react";
import ProductItem from "@components/ProductItem";
import { IProduts } from "@/helpers/types";

interface PropTypes {
	products: IProduts[];
	setTotal: Dispatch<SetStateAction<number>>;
}

const ProductsList = (props: PropTypes) => {
	return (
		<ul className="products-list">
			{props.products.map((product) => {
				return <ProductItem
					key={product.id}
					setTotal={props.setTotal}
					id={product.id}
					title={product.title}
					image={product.image}
					price={product.price}
				/>;
			})}
		</ul>
	);
};

export default ProductsList;