export function round(x: number, digitsAfterComma = 0) {
 return Math.round((x + Number.EPSILON) * Math.pow(10, digitsAfterComma)) / Math.pow(10, digitsAfterComma);
}
