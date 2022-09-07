export function nth(index: number): number | Error | undefined {
  const isPrime = (n:number) => {
    if(n === 1) return false
    let m = Math.floor(Math.sqrt(n))
    for (let i = 2; i <= m; i++) {
      if(n % i === 0) {
        return false
      }
    }
    return true;
  }

  let primes: number[] = [];
  for(let i = 2; primes.length < index; i++) {
    if(isPrime(i)) {
      primes.push(i)
    }
  }

  // let currentNum = 2;
  ///// This works for all but the big prime ///////
  // while(primes.length < index) {
    // if(currentNum === 2) {
    //   primes.push(currentNum)
    //   currentNum++
    // } else if(currentNum % Math.ceil(Math.sqrt(currentNum)) === 0 || currentNum % 2 === 0) {
    //   currentNum++
    // } else if(currentNum % Math.ceil(Math.sqrt(currentNum)) !== 0) {
    //   primes.push(currentNum)
    //   currentNum++
    // }
  // }

  if(primes.length < 1 ){
    throw new Error('Prime is not possible')
  } else {
    return primes.at(-1)
  }
}
