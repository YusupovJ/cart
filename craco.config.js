const path = require("path");
module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/components"),
			"@functions": path.resolve(__dirname, "src/helpers/functions/functions"),
			"@hooks": path.resolve(__dirname, "src/helpers/hooks/hooks"),
			"@store": path.resolve(__dirname, "src/helpers/context/store"),
			"@img": path.resolve(__dirname, "src/assets/img"),
			"@svg": path.resolve(__dirname, "src/assets/svg"),
		},
	},
};
