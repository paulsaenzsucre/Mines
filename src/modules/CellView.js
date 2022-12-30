import CellState from './CellState.js';
import icons from '../images/icons.min.svg';

class CellView {
  #presenter;

  #ui;

  #usetag;

  #svgTag;

  constructor(cellPresenter) {
    this.#presenter = cellPresenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  flag = () => {
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#state-flagged`);
  }

  /**
   * @param {number} mineCount
   */
  uncover = (mineCount) => {
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#value-${mineCount}`);
  }

  cover = () => {
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#state-covered`);
  }

  suspect = () => {
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#state-suspected`);
  }

  #createDOMElements = () => {
    this.#svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.#svgTag.setAttributeNS(null, 'viewBox', '0 0 512 512');
    this.#svgTag.addEventListener('click', this.#presenter.clickListener);
    this.#svgTag.addEventListener('contextmenu', this.#presenter.rightClickListener);
    this.#usetag = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    switch (this.#presenter.state) {
      case CellState.Suspected:
        this.suspect();
        break;

      case CellState.Uncovered:
        this.uncover();
        break;

      case CellState.Flagged:
        this.flag();
        break;

      case CellState.Covered:
      default:
        this.cover();
        break;
    }
    this.#svgTag.appendChild(this.#usetag);

    return this.#svgTag;
  }
}
export default CellView;