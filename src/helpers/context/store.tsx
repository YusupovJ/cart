import React, { createContext, useState } from "react";

export const Global = createContext({});

const GlobalContext = (props: any) => {
	const [value, setValue] = useState(null);

	return <Global.Provider value={{ value, setValue }}>{props.children}</Global.Provider>;
};

export default GlobalContext;
