// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
//
//
//player
let playerName = window.prompt("What's your robot's name?");
console.log("Our robot's name is " + playerName);
window.alert("Welcome to Robot Gladiators" + " " + playerName + "!");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;
//enemy
let enemyNames = ["Roborto", "Amy Android", "Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

//fight expression func with parameter
let fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    let promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    if (promptFight === "fight" || promptFight === "FIGHT") {
      //player attack
      enemyHealth = enemyHealth - playerAttack;
      if (enemyHealth > 0) {
        console.log(
          playerName +
            " attacked " +
            enemyName +
            ". " +
            enemyName +
            " now has " +
            enemyHealth +
            " health remaining."
        );
      } else if (enemyHealth <= 0) {
        playerMoney = playerMoney + 5;
        alert(enemyName + " has died");
        console.log("Player's money: " + playerMoney);
        break;
      }
      //enemy attack
      playerHealth = playerHealth - enemyAttack;
      if (playerHealth > 0) {
        console.log(
          enemyName +
            " attacked " +
            playerName +
            ". " +
            playerName +
            " now has " +
            playerHealth +
            " health remaining."
        );
      } else if (playerHealth <= 0) {
        alert("you died");
        break;
      }
    } //end if fight
    else if (promptFight === "skip" || promptFight === "SKIP") {
      let confirmSkip = window.confirm("Are you sure you want to skip?");
      if (confirmSkip) {
        playerMoney = playerMoney - 5;
        alert(playerName + " has chosen to skip. Good bye!");
        console.log("Player's money: " + playerMoney);
        if (playerMoney <= 0){
          console.log("Sorry, out of money");
          break;
        }
      } else {
        fight();
      }
    } //end if skip
    else {
      alert("please enter a valid response");
      fight();
    }
  } //end of while loop
}; //end func

//for loop to combat enemy array (func w/ an argument)
var startGame = function () {
  for (let i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      playerHealth = 100;
      playerAttack = 10;
      playerMoney = 10;
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      let pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
    } 
    endGame();
  };
  startGame();
};

//end game
let endGame = function () {
  if (playerHealth > 0) {
    alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("The game has now ended. Let's see how you did!");
  }
  let playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon:)");
  }
};
fight();
endGame();