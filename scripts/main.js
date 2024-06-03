
import { database } from "./database.js";
import { display } from "./moods.js";

export const displayMacho = () => {
    const container = document.getElementById('container');

    database.forEach(macho => {
        const machoBlock = display(macho);
        container.appendChild(machoBlock);
    });
};

// Call the pikoDex function on page load
document.addEventListener('DOMContentLoaded', displayMacho);
