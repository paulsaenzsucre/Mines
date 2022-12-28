import CellState from './CellState.js';
import icons from '../images/icons.min.svg';

class CellView {
  #ui;

  #value;

  #state;

  constructor(value) {
    this.#value = value;
    this.#ui = this.#createDOMElements();
    this.#cover = CellState.Covered;
  }

  get value() {
    return this.#value;
  }

  get ui() {
    return this.#ui;
  }

  #uncover = () => {
    this.#ui.classList.remove('cell-covered');
  }

  #cover = () => {
    this.#ui.classList.add('cell-covered');
  }

  #createDOMElements = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'cell-covered');
    div.addEventListener('click', this.#uncover);

    const svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useTag.setAttribute('class', 'board-cell');

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

    useTag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', sprite);
    div.appendChild(svgTag);
    svgTag.appendChild(useTag);

    return div;
  }
}
export default CellView;