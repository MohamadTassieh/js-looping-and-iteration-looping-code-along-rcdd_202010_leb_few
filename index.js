// Code your solutions in this file
let name = [];
let eventName = "surprise";
function writeCards(name =["Lisa", "Kaitlin", "Jan"],eventName) {
for (let i=0; i<name.length ;i++){
  console.log(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
}
return name;
}
writeCards(name);
