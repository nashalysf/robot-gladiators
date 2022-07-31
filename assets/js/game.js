// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
//
//
//player
let playerName= window.prompt("What's your robot's name?");
console.log("Our robot's name is " + playerName);
window.alert("Welcome to Robot Gladiators" + " " + playerName + "!");
let playerHealth= 100;
let playerAttack= 10;
let playerMoney= 10;
//enemy
let enemyNames= ["Roborto", "Amy Android", "Trumble"];
let enemyHealth= 50;
let enemyAttack= 12;

//fight expression func with parameter
let fight= function(enemyName){
  let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  if (promptFight === "fight" || promptFight === "FIGHT"){
  //player attack
  enemyHealth= enemyHealth - playerAttack;
   if(enemyHealth > 0){
  console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');
 }
  else if (enemyHealth <= 0){
    playerMoney = playerMoney + 5;
  alert(enemyName[0] + " has died");
  console.log("Player's money: " + playerMoney)
 }
  //enemy attack
  playerHealth= playerHealth - enemyAttack;
 if (playerHealth > 0){
  console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');
 }
 else if (playerHealth <= 0){
  alert("you died");
 }
 } //end if fight

 else if (promptFight === "skip" || promptFight === "SKIP"){
  let confirmSkip= window.confirm("Are you sure you want to skip?");
  if (confirmSkip){
    playerMoney = playerMoney - 5;
  alert(playerName + " has chosen to skip. Good bye!");
  console.log("Player's money: " + playerMoney);
  }
   else{
    fight();
   }
 } //end if skip

 else {
  alert("please enter a valid response");
  fight();
 }

} //end func


// let fight= function (enemyName) {
//   while (playerHealth > 0 && enemyHealth > 0){
//    //ask player
//     let promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//      //answers
//     if (promptFight === "skip" || promptFight === "SKIP") {
//         let confirmSkip= window.confirm("Are you sure you'd like to quit?");
//       //confirm
//         if (confirmSkip) {
//       window.alert(playerName + " has chosen to skip the fight. Goodbye!");
//       playerMoney= playerMoney -10;
//       console.log("Player Money:", playerMoney);
//       break;
//         } //end if confirm skip
//         } //end if skip
//     if (promptFight === "fight" || promptFight === "FIGHT") { 
//         // remove enemy's health by subtracting the amount set in the playerAttack variable
//         enemyHealth = enemyHealth - playerAttack;
//         console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');
//         // check enemy's health
//      if (enemyHealth <= 0) {
//        window.alert(enemyName + ' has died!');
//        // award player money for winning
//        playerMoney = playerMoney + 20;
//        // leave while() loop since enemy is dead
//        break;
//      } else {
//         window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
//         }
//      // remove players's health by subtracting the amount set in the enemyAttack variable
//         playerHealth = playerHealth - enemyAttack;
//         console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');
//      // check player's health
//      if (playerHealth <= 0) {
//        window.alert(playerName + ' has died!');
//        // leave while() loop if player is dead
//        break;
//      } else {
//        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
//      }
//         } //promptfight
//     } // end of while loop
// }; // end of fight function

//for loop to combat enemy array (func w/ an argument)
for(let i=0; i<3; i++){
  fight(enemyNames[i]);
}