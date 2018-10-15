export function getScore(user) {
  return Object.keys(user['answers']).length + user['questions'].length;
}

export function objectSize(obj) {
  return Object.getOwnPropertyNames(obj).length
}

export function isEmpty(obj){
    return (objectSize(obj) === 0);
}

export function toPrecisionString(number, precision=2) {
  let [left, right] = number.toString().split('.');
  if (!right)
    return left;
  return `${left}.${(right || '').slice(0,precision)}`
}
