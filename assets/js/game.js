

//Define Variables, funtions and log in the order you want it to apper
//let or var are only to create new variables
let fight= function() {
    //alert players that fight's starting
    window.alert("Welcome to Robot Gladiators" + " " + playerName + "!");
    
 };

 //player
let playerName = window.prompt("What's your robot's name?");
console.log("Our robot's name is" + " "+ playerName);
let playerHealth= 100;
  
let playerAttack= 10;

//enemy
let enemyName= "Roborto";
let enemyHealth= 70;
let enemyAttack= 12;


fight();{
//substract playerAttack from enemyHealth = updated enemyHealth <= scooping var

enemyHealth= enemyHealth - playerAttack;
console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + 
enemyHealth + " health remainig.");
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

//substract enemyAttack form playerHealth = updated playerHealth
playerHealth = playerHealth - enemyAttack;
console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remainig.");
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  } 
}