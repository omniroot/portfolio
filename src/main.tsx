import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/router.tsx";
import { OmnikitProvider } from "@/theme/components/provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<OmnikitProvider theme="next">
			<RouterProvider router={router} />
		</OmnikitProvider>
	</StrictMode>,
);
