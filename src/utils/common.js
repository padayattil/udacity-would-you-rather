export function get_score(user) {
  return Object.keys(user['answers']).length + user['questions'].length;
}
