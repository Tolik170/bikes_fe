export const addCommas = (number) => {
  const numberString = number.toString()
  let startPosition = numberString.length % 3

  if(startPosition === 0) {
    startPosition += 3
  }

  const chunks = numberString.substr(startPosition).match(/\d{3}/g)

  return [numberString.substr(0, startPosition), ...chunks].join(',')
}
