class CellModel {
  #mineCount;

  #state;

  constructor(mineCount, state) {
    this.#mineCount = mineCount;
    this.#state = state;
  }

  static get MINE_VALUE() {
    return 9;
  }

  get mineCount() {
    return this.#mineCount;
  }

  get state() {
    return this.#state;
  }

  set state(newState) {
    this.#state = newState;
  }

  layMine = () => {
    this.#mineCount = CellModel.MINE_VALUE;
  }

  mineCountUp = () => {
    this.#mineCount += 1;
  }
}
export default CellModel;