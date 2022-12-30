import './style.css';
import CellView from './modules/CellView.js';

const container = document.getElementById('cont');

let cell;

for (let i = 0; i < 9; i += 1) {
  for (let j = 0; j < 9; j += 1) {
    cell = new CellView(j);
    container.appendChild(cell.ui);
  }
}