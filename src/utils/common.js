export function getScore(user) {
  return Object.keys(user['answers']).length + user['questions'].length;
}

export function objectSize(obj) {
  return Object.getOwnPropertyNames(obj).length
}

export function isEmpty(obj){
    return (objectSize(obj) === 0);
}
