export function get_score(user) {
  return Object.keys(user['answers']).length + user['questions'].length;
}

export function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}
