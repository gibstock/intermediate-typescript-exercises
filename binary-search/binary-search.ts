export function find(haystack: Array<number>, needle: number): number | never {
  let starting: number = 0;
  let ending: number = haystack.length - 1;

  while (starting <= ending) {
    let midPoint: number = Math.floor((starting + ending) / 2)

    if(haystack[midPoint] === needle) {
      return midPoint;
    }
    if(haystack[midPoint] < needle) {
      starting = midPoint + 1
    }
    if(haystack[midPoint] > needle) {
      ending = midPoint - 1
    }
  }
  throw new Error('Value not in array') 
}
