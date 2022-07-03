//Define Variables, funtions and log in the order you want it to apper
//let or var are only to create new variables
let fight = function () {
  //alert players that fight's starting
  window.alert("Welcome to Robot Gladiators" + " " + playerName + "!");
};

//player
let playerName = window.prompt("What's your robot's name?");
console.log("Our robot's name is" + " " + playerName);
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

//enemy
let enemyNames= ["Roborto", "Amy Android", "Trumble"];
  let enemyHealth = 70;
  let enemyAttack = 12;
 for(var i = 0; i < enemyNames.length; i++) {
fight(enemyNames[i]);
  

  //substract playerAttack from enemyHealth = updated enemyHealth <= scooping var
  //stay or go option
  let promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  console.log(promptFight);

  if (promptFight === "fight" || promptFight === "FIGHT") {
    
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remainig.");
    if (enemyHealth <= 0) {
      window.alert(enemyNames[i] + " has died!");
     } 
     else {
      window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
    }

    //substract enemyAttack form playerHealth = updated playerHealth
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " +  playerHealth + " health remainig.");
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
     } 
     else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
     }
     }
     //skipped
    else if (promptFight === "skip" || promptFight === "SKIP") {
     let confirmSkip = window.confirm("Are you sure you'd like to quit?");

     if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight. Goodbye!");
      playerMoney = playerMoney - 2;
     } 
     else {
      fight();
     }
     } 
    else {
     window.alert("You need to choose a valid option. Try again!");
     }
}