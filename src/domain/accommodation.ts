class Accommodation {
  #name!: string;
  #cost!: number;
  constructor(
    name: string,
    cost: number,
  ) {
    this.setName(name);
    this.setCost(cost);
  }

  getName(): string {
    return this.#name;
  }

  setName(name: string): void {
    this.#name = name.trim();
  }

  getCost(): number {
    return this.#cost;
  }

  setCost(cost: number): void {
    if (cost === null || cost === undefined || cost < 0) {
      throw new Error("Costo debe ser mayor a 0");
    }
    this.#cost = cost;
  }
}
export default Accommodation;
