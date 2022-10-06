import { distance } from 'fastest-levenshtein'

const deAccent = (s) =>
  s
    .replaceAll('á', 'a')
    .replaceAll('é', 'e')
    .replaceAll('í', 'i')
    .replaceAll('ó', 'o')
    .replaceAll('ú', 'u')

export default (a, b) => distance(deAccent(a), deAccent(b))
