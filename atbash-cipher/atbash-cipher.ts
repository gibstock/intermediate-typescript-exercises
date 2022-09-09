export function encode(plainText: string): string {
  let chars:string[] = []
  let plainTextLc = plainText.toLowerCase().replaceAll(/[\s\,\.]/g, '')
  for(let i = 0; i < plainText.length; i++) {
    if(i % 5 === 0 && i > 0) {
      chars.push(' ')
    }
    if(plainTextLc.charCodeAt(i) > 96) {
      let opposite = 219 - plainTextLc.charCodeAt(i)
      let newChar = String.fromCharCode(opposite)
      chars.push(newChar)
    } else {
      chars.push(plainTextLc[i])
    }
  }
  return chars.join('').trim()
}

export function decode(cipherText: string): string {
  let chars:string[] = []
  let cipherTextLc = cipherText.toLowerCase().replaceAll(/[\s\,\.]/g, '')
  for(let i = 0; i < cipherTextLc.length; i++) {
    if(cipherTextLc.charCodeAt(i) > 96) {
      let opposite = 219 - cipherTextLc.charCodeAt(i)
      let newChar = String.fromCharCode(opposite)
      chars.push(newChar)
    } else {
      chars.push(cipherTextLc[i])
    }
  }
  return chars.join('').trim()
}
