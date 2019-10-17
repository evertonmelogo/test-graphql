# …or create a new repository on the command line
echo "# test-graphql" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/evertonmelogo/test-graphql.git
git push -u origin master
# …or push an existing repository from the command line
git remote add origin https://github.com/evertonmelogo/test-graphql.git
git push -u origin master

# Graphql query v1
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


# v5
mutation {
  createUser(id: 1) { id, slug, name }
}

query {
	user {
	  id, name, slug
	}
}
