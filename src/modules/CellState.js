class CellState {
  static Covered = new CellState('Covered');

  static Flagged = new CellState('Flagged');

  static Suspected = new CellState('Suspected');

  static Uncovered = new CellState('Uncovered');

  constructor(name) {
    this.name = name;
  }
}
export default CellState;