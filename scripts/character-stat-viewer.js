import { statShortHand } from "./character.js";
document.onload = () => {
    for (let stat of statShortHand) {
        document.getElementById(`character-stat-view-${stat}-inc-btn`).onclick = function () {
            document.getElementById(`character-stat-view-${stat}`).value++;
        };
        document.getElementById(`character-stat-view-${stat}-dec-btn`).onclick = function () {
            document.getElementById(`character-stat-view-${stat}`).value--;
        };
    }
};
