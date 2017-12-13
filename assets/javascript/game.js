function setUpEvents() {

  var buttonAlert;
  var gameStarted = false;
  var characterSelected;
  var enemiesCharactersObjects;
  var characterSelectedObject;
  var buttonAlert2;
  var fightStarted = false;
  var enemySelected;
  var enemySelectedObject;


  // creating the objects
  function Character(name, healtPoints, attackPower, counterAttackPower, brief, image100, image75, image50, image25, image0, imageGif) {
    this.name = name;
    this.healtPoints = healtPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.brief = brief;
    this.image100 = image100;
    this.image75 = image75;
    this.image50 = image50;
    this.image25 = image25;
    this.image0 = image0;
    this.imageGif = imageGif;
  }

  var character1 = new Character("Luke Skywalker", 100, 25, 25, "Human male Jedi Master", "luke100", "luke75", "luke50", "luke25", "luke0", "lukeGif")
  var character2 = new Character("Yoda", 125, 50, 50, "Mysterious species male Jedi Master", "yoda100", "yoda75", "yoda50", "yoda25", "yoda0", "yodaGif")
  var character3 = new Character("Palpatine", 150, 75, 75, "Human male Dark Lord of the Sith", "palpatine100", "palpatine75", "palpatine50", "palpatine25", "palpatine0", "palpatineGif")
  var character4 = new Character("Darth Vader", 125, 50, 50, "Human male Sith Lord", "darthVader100", "darthVader75", "darthVader50", "darthVader25", "darthVader0", "darthVaderGif")

  // var character1 = new Character("Luke Skywalker", 100, 25, 25, "Human male Jedi Master", "luke100", "luke75", "luke50", "luke25", "luke0", "lukeGif")
  // var character2 = new Character("Yoda", 125, 50, 50, "Mysterious species male Jedi Master", "yoda100", "yoda75", "yoda50", "yoda25", "yoda0", "yodaGif")
  // var character3 = new Character("Palpatine", 150, 75, 75, "Human male Dark Lord of the Sith", "palpatine100", "palpatine75", "palpatine50", "palpatine25", "palpatine0", "palpatineGif")
  // var character4 = new Character("Darth Vader", 125, 50, 50, "Human male Sith Lord", "darthVader100", "darthVader75", "darthVader50", "darthVader25", "darthVader0", "darthVaderGif")


  // ends creating objects

  // Building the initial screen.  - Step 1

  function selectCharacterSetUp() {

    document.getElementById("selectPosition1Title").innerHTML = character1.name;
    //$(#selectPosition1Title).html(character1.name);
    document.getElementById("selectPosition1Image").src = "assets/images/" + character1.image100 + ".jpg";
    document.getElementById("selectPosition1Footer").innerHTML = "HP: " + character1.healtPoints;

    document.getElementById("selectPosition2Title").innerHTML = character2.name;
    document.getElementById("selectPosition2Image").src = "assets/images/" + character2.image100 + ".jpg";
    document.getElementById("selectPosition2Footer").innerHTML = "HP: " + character2.healtPoints;

    document.getElementById("selectPosition3Title").innerHTML = character3.name;
    document.getElementById("selectPosition3Image").src = "assets/images/" + character3.image100 + ".jpg";
    document.getElementById("selectPosition3Footer").innerHTML = "HP: " + character3.healtPoints;

    document.getElementById("selectPosition4Title").innerHTML = character4.name;
    document.getElementById("selectPosition4Image").src = "assets/images/" + character4.image100 + ".jpg";
    document.getElementById("selectPosition4Footer").innerHTML = "HP: " + character4.healtPoints;
    console.log("Initial value of Var gameStarted: " + gameStarted);
  } //End selectCharacterSetUp function

  selectCharacterSetUp()

  //  Start on click to Select a character. - Step 2

  $(".buttonCharacters").on("click", function(e) {
    var values = $(this).val();
    buttonAlert = values;
    buttonAlert = parseInt(buttonAlert);
    gameStarted = true;
    console.log("Value of Var gameStarted insite function clicked: " + gameStarted);
    initializer();

  });

  // Use this function to initialize our game. - Step 3
  function initializer() {
    console.log("Value of Var gameStarted outsite function clicked: " + gameStarted);
    console.log("Value of the button clicked: " + buttonAlert);
    characterSelected = buttonAlert
    console.log("character selected Number inside initiazer: " + characterSelected);
    startSelectCharacter();
    console.log("Character selected Name :" + characterSelectedObject.name);
  }

// Use this function to select your character to play. - Step 4

  function startSelectCharacter() {
    console.log("characterSelected " + characterSelected);
    var availableCharactersObjects = [character1, character2, character3, character4]
    characterSelectedObject = availableCharactersObjects[characterSelected]
    availableCharactersObjects.splice(characterSelected, 1);
    enemiesCharactersObjects = availableCharactersObjects
    printCharacterSelected()
    printEnemySelected()
  } //End startSelectCharacter function


  // Function print on screen the character selected. - Step 5

  function printCharacterSelected() {
    document.getElementById("messageSelectCharacter").innerHTML = "Your Character";

    for (var i = 1; i < 5; i++) {
      document.getElementById("selectPosition" + i + "Title").innerHTML = "";
      document.getElementById("selectPosition" + i + "Image").src = "assets/images/orangeButton.jpeg"
      document.getElementById("selectPosition" + i + "Footer").innerHTML = "";
    }
    document.getElementById("selectPosition2Title").innerHTML = characterSelectedObject.name;
    document.getElementById("selectPosition2Image").src = "assets/images/" + characterSelectedObject.image100 + ".jpg";
    document.getElementById("selectPosition2Footer").innerHTML = "HP: " + characterSelectedObject.healtPoints;
    document.getElementById("selectPosition3Title").innerHTML = characterSelectedObject.brief;


  } // Ends Function  print Character Selected
//------------------------------------------------------------------------------------

// Function print on screen enemies avalable to attack - Step 6

  function printEnemySelected() {
    console.log(enemiesCharactersObjects);
    var enemy1 = enemiesCharactersObjects[0]
    var enemy2 = enemiesCharactersObjects[1]
    var enemy3 = enemiesCharactersObjects[2]

    console.log("Enemies lenght" + enemiesCharactersObjects.length);
    // console.log("enemy1.name " + enemy1.name);
    // console.log("enemy2.Name " + enemy2.Name);
    // console.log("enemy3.Name" + enemy3.name);
    var lenght = enemiesCharactersObjects.length;
    var a
    console.log("var lenght " + lenght);
    a = lenght
    console.log("log A :" + a);

    if (a > 0) {
      console.log("logging count" + a);
      document.getElementById("attackCharacter1Title").innerHTML = enemy1.name;
      document.getElementById("attackCharacter1Image").src = "assets/images/" + enemy1.image100 + ".jpg";
      document.getElementById("attackCharacter1Footer").innerHTML = "HP: " + enemy1.healtPoints;
    } else {
      document.getElementById("attackCharacter" + 1 + "Title").innerHTML = "";
      document.getElementById("attackCharacter" + 1 + "Image").src = "";
      document.getElementById("attackCharacter" + 1 + "Footer").innerHTML = "";
    }
    if (a > 1) {
      document.getElementById("attackCharacter2Title").innerHTML = enemy2.name;
      document.getElementById("attackCharacter2Image").src = "assets/images/" + enemy2.image100 + ".jpg";
      document.getElementById("attackCharacter2Footer").innerHTML = "HP: " + enemy2.healtPoints;
    } else {
      document.getElementById("attackCharacter" + 2 + "Title").innerHTML = "";
      document.getElementById("attackCharacter" + 2 + "Image").src = "";
      document.getElementById("attackCharacter" + 2 + "Footer").innerHTML = "";
    }
    if (a > 2) {
      document.getElementById("attackCharacter3Title").innerHTML = enemy3.name;
      document.getElementById("attackCharacter3Image").src = "assets/images/" + enemy3.image100 + ".jpg";
      document.getElementById("attackCharacter3Footer").innerHTML = "HP: " + enemy3.healtPoints;
    } else {
      document.getElementById("attackCharacter" + 3 + "Title").innerHTML = "";
      document.getElementById("attackCharacter" + 3 + "Image").src = "";
      document.getElementById("attackCharacter" + 3 + "Footer").innerHTML = "";
    }

  } // End function printEnemySelected

  //  Start on click to Select a character. - Step 7

  $(".buttonEnemies").on("click", function(e) {
    var values = $(this).val();
    buttonAlert2 = values;
    buttonAlert2 = parseInt(buttonAlert2);
    fightStarted = true;
    console.log("Value of Var fightStarted insite function clicked: " + fightStarted);
    initializerCombat();

  });

  // Use this function to initialize combat. - Step 8
  function initializerCombat() {
    console.log("Value of Var gameStarted outsite function clicked: " + fightStarted);
    console.log("Value of the button clicked: " + buttonAlert2);
    enemySelected = buttonAlert2
    console.log("Enemy selected Number inside initiazer: " + enemySelected);
    startSelectEnemy();
    console.log("Enemy selected Name :" + enemySelectedObject.name);
  }

  // Use this function to select your enemy to play. - Step 9

    function startSelectEnemy() {
      console.log("EnemySelected " + enemySelected);
      enemySelectedObject = enemiesCharactersObjects[enemySelected]
      enemiesCharactersObjects.splice(enemySelected, 1);
      console.log("new array of enemies " + enemiesCharactersObjects);
      printEnemySelected()
      fightCharacters()

    } //End startSelectEnemy function

    // display de fighters on the fight Section  - Step 9

    function fightCharacters() {
      document.getElementById("fightCharacter1Image").src = "assets/images/" + characterSelectedObject.imageGif + ".gif";
      document.getElementById("fightCharacter2Image").src = "assets/images/" + enemySelectedObject.imageGif + ".gif";
    } // end Function Gif fight Section


    $(".attackButton").on("click", function(e) {
      var values = $(this).val();
      buttonAlert3 = values;
      buttonAlert3 = parseInt(buttonAlert3);
      attackStarted = true;
      console.log("Value of Var attackStarted insite function clicked: " + attackStarted);
      attacking ();

    });

function attacking (){


  console.log("Your HP before attack"+ characterSelectedObject.healtPoints);
  characterSelectedObject.healtPoints = characterSelectedObject.healtPoints - enemySelectedObject.attackPower
  console.log("Your HP after attack"+ characterSelectedObject.healtPoints);
  console.log("your counter Attack Power before attack"+characterSelectedObject.counterAttackPower);
  characterSelectedObject.counterAttackPower = characterSelectedObject.counterAttackPower+characterSelectedObject.attackPower
  console.log("your counter Attack Power after attack"+characterSelectedObject.counterAttackPower);
  console.log("enemy HP before Attack" + enemySelectedObject.healtPoints);
  enemySelectedObject.healtPoints = enemySelectedObject.healtPoints - characterSelectedObject.counterAttackPower
  console.log("enemy HP After Attack" + enemySelectedObject.healtPoints);

  fightMessajes()
}


    // Function fightMessajes

    function fightMessajes() {
      document.getElementById("message1").innerHTML = "You attacked " + enemySelectedObject.name + " for " + characterSelectedObject.counterAttackPower + " damage";
      document.getElementById("message2").innerHTML = enemySelectedObject.name + " attacked you back for " + enemySelectedObject.attackPower + " damage"
      document.getElementById("selectPosition2Footer").innerHTML = "HP: " + characterSelectedObject.healtPoints;

    } // end Function fightMessajes



  // // Function images defeaded Characters
  //
  // function defeadedCharacters() {
  //
  //   document.getElementById("defeadedCharacter1Title").innerHTML = character1.name;
  //   document.getElementById("defeadedCharacter1Image").src = "assets/images/" + character1.image0 + ".jpg";
  //   document.getElementById("defeadedCharacter1Footer").innerHTML = "HP: " + character1.healtPoints;
  //
  //   document.getElementById("defeadedCharacter2Title").innerHTML = character2.name;
  //   document.getElementById("defeadedCharacter2Image").src = "assets/images/" + character2.image0 + ".jpg";
  //   document.getElementById("defeadedCharacter2Footer").innerHTML = "HP: " + character2.healtPoints;
  //
  //   document.getElementById("defeadedCharacter3Title").innerHTML = character3.name;
  //   document.getElementById("defeadedCharacter3Image").src = "assets/images/" + character3.image0 + ".jpg";
  //   document.getElementById("defeadedCharacter3Footer").innerHTML = "HP: " + character3.healtPoints;
  //
  // } // End function images defeaded Characters
  //
  // defeadedCharacters()
  //

  //
  // fightCharacters()
  //
  //
  // fightMessajes()


} //End setUpEvents Function

window.onload = function() {

  setUpEvents();

};
