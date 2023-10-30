import Header from "./header.js";
import Sidebar from "./sidebar.js";
import Player from "./player.js";

export default function DefaultLayout() {
    return `
        ${Header()}
        ${Sidebar()}
        ${Player()}
    `
}