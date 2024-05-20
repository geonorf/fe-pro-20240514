// Get user option
let PlayerOption = prompt('Enter your option ("Камінь", "Ножиці", "Папір"), please');

let rand_options = ["Камінь","Ножиці","Папір"];
let rand_val = Math.floor(Math.random()*rand_options.length);
let rand_option  = rand_options[rand_val];

if (PlayerOption === rand_option)
    alert(`NPC: ${rand_option}. Draw`);
else if ((PlayerOption === "Камінь") && (rand_option === "Ножиці"))
    alert(`NPC: ${rand_option}. Player WIN`);
else if ((PlayerOption === "Камінь") && (rand_option === "Папір"))
    alert(`NPC: ${rand_option}. Player LOSE`);
else if ((PlayerOption === "Ножиці") && (rand_option === "Папір"))
    alert(`NPC: ${rand_option}. Player WIN`);
else if ((PlayerOption === "Ножиці") && (rand_option === "Камінь"))
    alert(`NPC: ${rand_option}. Player LOSE`);
else if ((PlayerOption === "Папір") && (rand_option === "Камінь"))
    alert(`NPC: ${rand_option}. Player WIN`);
else if ((PlayerOption === "Папір") && (rand_option === "Ножиці"))
    alert(`NPC: ${rand_option}. Player LOSE`);
else
    alert("Something wrong!");

