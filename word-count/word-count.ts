export function count(words: string) {
  const wordCount = new Map()
  let count: number = 1
  let prev: string;
  let reg = /(\n|\t)/g
  const wordArr = words.replaceAll(reg, ' ').toLowerCase().split(' ').sort().filter(x => x)
   
  wordArr.forEach((ar) => {
    if(prev === ar) {
      count = count + 1
      wordCount.set(ar, count)
    }else {
      count = 1
      prev = ar
      wordCount.set(ar, count)
    }
  })

  return wordCount
}
