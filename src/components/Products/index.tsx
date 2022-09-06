import React, { useEffect, useState } from "react";
import { ProductsStyle } from "./style";
import ProductsList from "@components/ProductsList";
import { IProduts } from "@/helpers/types";
import Total from "@components/Total";

const Products = () => {
	const [products, setProducts] = useState<IProduts[]>([]);
	const [total, setTotal] = useState<number>(0);

	useEffect(() => {
		const request = fetch(`https://fakestoreapi.com/products?limit=3`).then(res => res.json());

		request.then(res => {
			setProducts(res);
		}).catch(err => console.error(err));
	}, []);

	return (
		<ProductsStyle className="products">
			<ProductsList products={products} setTotal={setTotal} />
			<Total setTotal={setTotal} total={total} />
		</ProductsStyle>
	);
};

export default Products;