import CellModel from './CellModel.js';
import CellState from './CellState.js';
import CellView from './CellView.js';

class CellPresenter {
  #model;

  #view;

  constructor(mineCount, state) {
    this.#model = new CellModel(mineCount, state);
    this.#view = new CellView(this);
  }

  clickListener = (evt) => {
    evt.preventDefault();

    if (this.#model.mineCount === CellModel.MINE_VALUE) {
      this.#model.state(CellState.Exploded);
      this.#view.explode();

      const explode = new CustomEvent('explode', {
        detail: {},
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      this.#view.dispatchEvent(explode);
    } else {
      this.#model.state(CellState.Uncovered);
      this.#view.uncover();
    }
  }

  rightClickListener = (evt) => {
    evt.preventDefault();

    if (this.#model.state === CellState.Covered) {
      this.#model.state(CellState.Flagged);
      this.#view.flag();
    } else if (this.#model.state === CellState.Flagged) {
      this.#model.state(CellState.Suspected);
      this.#view.suspect();
    } else if (this.#model.state === CellState.Suspected) {
      this.#model.state(CellState.Covered);
      this.#view.cover();
    }
  }
}
export default CellPresenter;