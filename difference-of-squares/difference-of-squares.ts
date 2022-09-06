export class Squares {
  count: number;
  totalSumOfSquares: number;
  totalSquareOfSums: number;

  constructor(count: number) {
    this.count = count
    this.totalSumOfSquares = 0;
    this.totalSquareOfSums = 0;
  }

  get sumOfSquares(): number {
    this.totalSumOfSquares = 0;
    for(let i = 1; i <= this.count; i++) {
      this.totalSumOfSquares = this.totalSumOfSquares + (i ** 2)
    } 
    return this.totalSumOfSquares
  }

  get squareOfSum(): number {
    this.totalSquareOfSums = 0
    for(let i = 1; i <= this.count; i++) {
      this.totalSquareOfSums = this.totalSquareOfSums + i
    }
      this.totalSquareOfSums = this.totalSquareOfSums ** 2

    return this.totalSquareOfSums
  }

  get difference(): number {
    return this.totalSquareOfSums - this.totalSumOfSquares
  }
}
