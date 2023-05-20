export const addCommas = (number) => {
  const numberString = number.toString()
  const startPosition = numberString.length % 3
  const chunks = numberString.substr(startPosition).match(/\d{3}/g)
  
  return [numberString.substr(0, startPosition), ...chunks].join(',')
}
