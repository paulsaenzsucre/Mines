import CellState from './CellState.js';
import icons from '../images/icons.min.svg';

class CellView {
  #ui;

  #value;

  #state;

  #usetag;

  #svgTag;

  constructor(value) {
    this.#value = value;
    this.#state = CellState.Covered;
    this.#ui = this.#createDOMElements();
  }

  get value() {
    return this.#value;
  }

  get ui() {
    return this.#ui;
  }

  #flagged = (evt) => {
    evt.preventDefault();
    this.#state = CellState.Flagged;
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#state-flagged`);
  }

  #uncover = () => {
    this.#state = CellState.Uncovered;
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#value-${this.#value}`);
    this.#svgTag.removeEventListener('click', this.#uncover);
    this.#svgTag.removeEventListener('contextmenu', this.#flagged);
  }

  #covered = () => {
    this.#state = CellState.Flagged;
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#state-covered`);
  }

  #createDOMElements = () => {
    this.#svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.#svgTag.setAttributeNS(null, 'viewBox', '0 0 512 512');
    this.#svgTag.addEventListener('click', this.#uncover);
    this.#svgTag.addEventListener('contextmenu', this.#flagged);
    this.#usetag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    let sprite = '';

    switch (this.#state) {
      case CellState.Covered:
        sprite = `${icons}#state-covered`;
        break;

      case CellState.Uncovered:
        sprite = `${icons}#value-${this.#value}`;
        break;

      case CellState.Flagged:
        sprite = `${icons}#state-flagged`;
        break;

      default:
    }

    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', sprite);
    // div.appendChild(svgTag);
    this.#svgTag.appendChild(this.#usetag);

    return this.#svgTag;
  }
}
export default CellView;