import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ProjectContextProvider } from "./store/project-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider >
			<ProjectContextProvider>
				<App />
			</ProjectContextProvider>
		</ChakraProvider>
	</React.StrictMode>,
);
