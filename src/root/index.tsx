import React from "react";
import Products from "@components/Products";

const Root: React.FC = () => {
	return (
		<div className="wrapper">
			<h1>Products:</h1>
			<Products />
		</div>
	);
};

export default Root;
