import styled from "styled-components";
import { rem } from "@functions";

export const TotalStyle = styled.div`
	text-align: right;
	span {
		display: inline-block;
		font-size: ${rem(20)};
		font-weight: 500;
	}
`;