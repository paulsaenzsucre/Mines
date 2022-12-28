import CellState from './CellState.js';
import icons from '../images/icons.min.svg';

class CellView {
  #ui;

  #value;

  #state;

  #usetag;

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

  #flagged = () => {
    this.#state = CellState.Flagged;
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${icons}#prefix__j`);
  }

  #uncover = () => {
    this.#ui.classList.remove('cell-covered');
    this.#state = CellState.Uncovered;
    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.#getimgpath());
  }

  #cover = () => {
    this.#ui.classList.add('cell-covered');
  }

  #getimgpath = () => {
    let sprite = '';
    switch (this.#value) {
      case 1:
        sprite = `${icons}#prefix__a`;
        break;

      case 2:
        sprite = `${icons}#prefix__b`;
        break;

      case 3:
        sprite = `${icons}#prefix__c`;
        break;

      case 4:
        sprite = `${icons}#prefix__d`;
        break;

      case 5:
        sprite = `${icons}#prefix__e`;
        break;

      case 6:
        sprite = `${icons}#prefix__f`;
        break;

      case 7:
        sprite = `${icons}#prefix__g`;
        break;

      case 8:
        sprite = `${icons}#prefix__h`;
        break;

      case 9:
        sprite = `${icons}#prefix__i`;
        break;

      default:
      case 0:
        sprite = `${icons}#prefix__k`;
        break;
    }

    return sprite;
  }

  #createDOMElements = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'cell-covered');
    div.addEventListener('click', this.#uncover);
    div.addEventListener('contextmenu', this.#flagged);
    const svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.#usetag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    this.#usetag.setAttribute('class', 'board-cell');
    let sprite = '';
    switch (this.#state) {
      case CellState.Covered:
        sprite = `${icons}#prefix__k`;
        break;

      case CellState.Uncovered:
        sprite = this.#getimgpath();
        break;

      case CellState.Flagged:
        sprite = `${icons}#prefix__j`;
        break;

      default:
    }

    this.#usetag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', sprite);
    div.appendChild(svgTag);
    svgTag.appendChild(this.#usetag);

    return div;
  }
}
export default CellView;