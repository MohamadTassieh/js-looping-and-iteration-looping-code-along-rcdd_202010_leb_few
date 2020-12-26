// Code your solutions in this file
let name = ["Lisa", "Kaitlin", "Jan"];
let eventName = "surprise";
function writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise') {
for (let i=0; i<name.length ;i++){
  console.log(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
}
}
writeCards(name);
