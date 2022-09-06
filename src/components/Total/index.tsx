import React, { Dispatch, SetStateAction } from "react";
import { TotalStyle } from "./style";

interface PropTypes {
	total: number;
	setTotal: Dispatch<SetStateAction<number>>;
}

const Total = (props: PropTypes) => {
	const notLessZero = () => {
		const total: number = +props.total.toFixed(2);

		if (total < 0) {
			props.setTotal(0);
			return 0;
		}

		return total;
	};

	return (
		<TotalStyle className="total">
			<span>Total:</span>
			<span>${notLessZero()}</span>
		</TotalStyle>
	);
};

export default Total;