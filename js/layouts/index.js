import Header from "./header/header.js";
import Sidebar from "./sidebar/sidebar.js";

function DefaultLayout() {
    return `${Header()}${Sidebar()}`
}

export default DefaultLayout