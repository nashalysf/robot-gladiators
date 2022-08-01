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
window.alert("Welcome to Robot Gladiators " + playerName + "!");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;
//enemy
let enemyNames = ["Roborto", "Amy Android", "Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;
debugger;
let shop = function() {
  var shopOption= prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  switch(shopOption) {
    case "REFILL":
    case "refill":
      window.confirm("Refilling player's health by 20 for 7 dollars? Current Balance: " + playerMoney);
      if (playerMoney >= 10){
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 10;
        alert(playerMoney);
      }
      else if (playerMoney < 10){
        alert("Sorry! Not enough money");
        fight();
      }
      else {
        shop();
      };
      break;
      //
      case "UPGRADE":
      case "upgrade":
        window.confirm("Upgrading player's attack by 6 for 7 dollars? Current Balance: " + playerMoney);
        if(confirm && playerMoney >= 10){
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 10;
        }
        else if (playerMoney < 10){
        alert("Sorry! Not enough money");
        fight();
      }
        else {
          shop();
        }
        break;
        //
        case "leave":
          window.alert("Leaving the store, bye!");
          break;
          default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
  }
};
//end game
//end game
//fight expression func with parameter
let fight = function (enemyName) {
  let promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  while (playerHealth > 0 && enemyHealth > 0) {
  
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
        playerMoney = playerMoney + 3;
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
      if (confirmSkip && playerMoney > 0) {
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
// func end game
let endGame = function () {
  if (enemyHealth <= 0 && playerHealth > 0) {
    alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else if(playerHealth <= 0) {
    window.alert("The game has now ended. Let's see how you did!");
    let playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon:)");
    shop();
  }
  }
  else {
    fight();
  }
//
};
//for loop to combat enemy array (func w/ an argument)
let startGame = function () {
  for (let i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      playerHealth = 100;
      playerAttack = 10;
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      let pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
      if(playerHealth > 0 && i < enemyNames.length - 1){
        let storeConfirm = confirm("The fight is over, visit the store before the next round?");
        if (confirm) {
          alert("Welcome to the shop!")
          shop();
        }
        else {
          fight();
        }
      }
    } 
    endGame();
  };
};
 startGame();
//
//CALL
fight();
endGame();