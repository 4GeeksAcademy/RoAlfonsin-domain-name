/* eslint-disable */

let pronouns = ["the", "someone", "most", "all"]
let adjs = ["sad", "handsome", "big", "small"]
let nouns = ["car", "computer", "mammal", "tree"]
let extensions = [".com", ".shop", ".org", ".net"]
let domainNames = []

for (let pronoun of pronouns){
  for (let adj of adjs){
    for (let noun of nouns){
      for (let extension of extensions){
        domainNames.push(pronoun+adj+noun+extension)
      }
    }
  }
}

for (let index in domainNames){
  console.log(domainNames[index])
}