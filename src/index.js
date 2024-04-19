import * as reactDOM from "react-dom/client";
import App from "../src/Components/App.jsx";

const container = document.getElementById("root");
const root = reactDOM.createRoot(container);

root.render(<App />);