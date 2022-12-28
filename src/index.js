import './style.css';
import CellView from './modules/CellView.js';

const container = document.getElementById('cont');
const cell = new CellView(5);
container.appendChild(cell.ui);