import './style.css';
import CellPresenter from './modules/CellPresenter.js';
import CellState from './modules/CellState.js';

const container = document.getElementById('cont');

let cellPresenter;

for (let i = 0; i < 9; i += 1) {
  for (let j = 0; j < 9; j += 1) {
    cellPresenter = new CellPresenter(Math.round(Math.random() * 10), CellState.Covered);
    container.appendChild(cellPresenter.view.ui);
  }
}