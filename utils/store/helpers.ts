export function listToMap<T>(arr: Array<T>, prop: string): {[key in string | number]: T} {
  return arr
    .filter(_ => !!_[prop])
    .reduce((acc, curr) => { 
      acc[curr[prop]] = curr
      return acc 
    }, {});
}
