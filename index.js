// Code your solutions in this file
let name = ["Lisa", "Kaitlin", "Jan"];
let eventName = "surprise";
function writeCards(name, eventName) {
let array=[];
for (let i=0; i<name.length ;i++){
  array.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
}
return array;
}

