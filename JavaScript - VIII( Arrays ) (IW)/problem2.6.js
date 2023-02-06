let character = "a";
let lower_case =["a","b","c"];
let capital_case =["A","B","C"];

for(let i=0; i<lower_case.length; i++){
  if(character==lower_case[i]){
    (character=capital_case[i])
  }
}
console.log(character);