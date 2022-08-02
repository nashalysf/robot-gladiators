
//random func before objs si variable is defined
let randomNumber = function(min, max){
  let value = Math.floor(Math.random() * (max - min + 1) + 40);
  return value;
};
//player vars by object
let player = {
  Name: window.prompt("What's your robot's name?"),
  Health: 100,
  Attack: 10,
  Money: 10,
  reset: function(){
    this.Health = 100;
    this.Money = 10;
    this.Attack = 10;
  },
  refillHealth: function() {
    this.Health += 20;
    this.Money -= 7;
    alert(this.Health);
  },
  upgradeAttack: function() {
    this.Attack += 6;
    this.Money -= 7;
    alert(this.Attack);
  }
  };
  //enemy vars by object
  let enemy = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];
window.alert("Welcome to Robot Gladiators " + player.Name + "!");
console.log("Our robot's name is " + player.Name);
//shop func
let shop = function() {
  var shopOption= prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  //switch = if
  switch(shopOption) {
    //option 1
    case "REFILL":
    case "refill":
      window.confirm("Refill player's health by 20 for 7 dollars? Current Balance: " + player.Money);
      if (player.Money >= 7){
        player.refillHealth();
      }
      else if (player.Money < 7){
        alert("Sorry! Not enough money");
        fight();
      }
      else {
        shop();
      };
      break;
      //option 2
      case "UPGRADE":
      case "upgrade":
        window.confirm("Upgrade player's attack by 6 for 7 dollars? Current Balance: " + player.Money);
        if(confirm && player.Money >= 7){
          player.upgradeAttack();
        }
        else if (player.Money < 7){
        alert("Sorry! Not enough money");
        fight();
      }
        else {
          shop();
        }
        break;
        //option 3
        case "leave":
          window.alert("Leaving the store, bye!");
          break;
          //else
          default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
  }
};//end shop
//
//for loop to combat enemy array (func w/ an argument)
let startGame = function () {
  for (let i = 0; i < enemy.length; i++) {
    if (player.Health > 0) {
      player.reset();
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      let pickedEnemyObj = enemy[i];
      pickedEnemyObj.Health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      if(player.Health > 0 && i <= enemy.length - 1){
        let storeConfirm = confirm("The fight is over, visit the store before the next round?");
        if (confirm && player.Money >= 7) {
          alert("Welcome to the shop!");
          shop();
        }
        else {
          alert("Sorry! Not enough money");
          fight();
        }
        
      }
    } 
    
  };
  endGame();
};
// func end game
let endGame = function () {
  if (player.Health > 0) {
    alert(
      "Great job, you've survived the game! You now have a score of " + player.Money + ".");
  } else if(player.Health <= 0) {
    window.alert("The game has now ended. Let's see how you did!");
    let playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon:)");
  }
  }
  else {
    fight();
  }
//
};
//fight expression func with parameter
let fight = function (enemies) {
  let promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    debugger;
    while (player.Health > 0) {
    if (promptFight === "fight" || promptFight === "FIGHT") {
      //player's parameters attacks at random # 
      let damage = randomNumber(player.Attack - 3, player.Attack);
      enemies.Health = Math.max(0, enemies.Health - damage);

      if (enemies.Health > 0) {
        console.log(player.Name + " attacked " + enemies.name + ". " +  enemies.name + " now has " + enemies.Health + " health remaining.");
      } else if (enemies.Health <= 0) {
        player.Money = player.Money + 3;
        alert(enemies.name + " has died");
        console.log("Player's money: " + player.Money);
        break;
      }
      //enemy attack
       let attacks = randomNumber (enemies.attack - 3, enemies.attack);
      player.Health = Math.max(0, player.Health - attacks);
      if (player.Health > 0) {
        console.log(enemies.name + " attacked " + player.Name + ". " + player.Name + " now has " + player.Health + " health remaining.");
      } else if (player.Health <= 0) {
        alert("you died");
        break;
      }
    } //end if fight
    else if (promptFight === "skip" || promptFight === "SKIP") {
      let confirmSkip = window.confirm("Are you sure you want to skip?");
      if (confirmSkip && player.Money > 0) {
        player.Money = Math.max(0, player.Money - 5);
        alert(player.Name + " has chosen to skip. Good bye!");
        console.log("Player's money: " + player.Money);
        if (player.Money <= 0){
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
//
//CALL
startGame();
fight();
endGame();