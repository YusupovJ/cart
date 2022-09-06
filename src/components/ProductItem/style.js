import styled from "styled-components";
import { em, rem } from "@functions";

export const ProductItemStyle = styled.li`
	border: 2px solid #ccc;
	padding: 20px;
	margin: 0 0 50px 0;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.product-item__content {
		display: flex;
		align-items: center;
		max-width: 600px;
	}
	.product-item__image {
		margin: 0 20px 0 0;
		img {
			width: 200px;
		}
	}
	.product-item__button {
		padding: 10px;
		line-height: 0.5;
		background-color: transparent;
		border: 1px solid #ccc;
		border-radius: 3px;
		font-size: ${rem(40)};
		cursor: pointer;
		transition: all .3s;
		:hover {
			transform: scale(1.1);
		}
		:active {
			transform: scale(1);
		}
	}
	.product-item__title {
		font-size: ${rem(24)};
		font-weight: 700;
		margin: 0 0 ${em(10, 24)} 0;
	}
	.product-item__price {
		font-size: ${rem(20)};
	}
	.product-item__actions {
		display: flex;
		align-items: center;
		gap: 10px;
		span {
			font-size: ${rem(18)};
		}
	}
`;