import path from "node:path";
import tanstackRouter from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svgr(),
		Unfonts({
			google: {
				display: "swap",

				families: [
					{
						name: "Poppins",
						// styles: "400, 500, 600, 700",
					},
				],
			},
			// custom: {
			// 	families: [
			// 		{
			// 			name: "Poppins", // ← именно это имя будешь использовать
			// 			src: "./src/assets/fonts/Poppins/Poppins-*.{ttf,woff,woff2}", // glob — все файлы сразу!
			// 			// Можно добавить transform, если имена нестандартные
			// 			transform(font) {
			// 				if (font.basename.includes("Bold")) font.weight = 700;
			// 				if (font.basename.includes("Italic")) font.style = "italic";
			// 				return font;
			// 			},
			// 		},
			// 	],
			// 	display: "swap", // обязательно для хорошей производительности
			// 	preload: true, // preload всех файлов
			// 	injectTo: "head",
			// },
		}),
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			routesDirectory: "./src/pages/",
		}),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"~": path.resolve(__dirname),
		},
	},
});
