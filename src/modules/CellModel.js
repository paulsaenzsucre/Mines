class CellModel {
  #position;

  #value;

  #state;

  constructor(posX, posY, value) {
    this.#position = {
      x: posX,
      y: posY,
    };
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  get state() {
    return this.#state;
  }

  set state(newState) {
    this.#value = newState;
  }
}
export default CellModel;