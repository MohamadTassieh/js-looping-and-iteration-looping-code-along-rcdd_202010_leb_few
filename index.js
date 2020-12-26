// Code your solutions in this file
let name = ["Lisa", "Kaitlin", "Jan"];
let eventName = "surprise";
function writeCards(name,eventName) {
for (let i=0; i<name.length ;i++){
  console.log(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
}
return name;
}
writeCards(name);
