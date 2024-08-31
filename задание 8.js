let fronted = new Map([
    ["html","easy"],
    ["css","medium"],
    ["JavaScript","ultraHard"]
  ])
  for (let name of fronted.keys()) {
  console.log(name);
  }
  for (let level of fronted.values()) {
  console.log(level);
  }
  for (let elem of fronted){
  console.log(elem);
  }