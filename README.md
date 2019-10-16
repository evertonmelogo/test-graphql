mutation {
  createUser(name: "Everton", repo:"github", age: 23),
  { id, name }
}

query {
  getUserByName(name: "Everton"),
  { id, name }
}

query {
  getUserByName(name: "Everton"),
  { id, name }
}