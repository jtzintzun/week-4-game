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
  var maxEnemies = 3;
  var availableCharactersObjects
  var charactersDefeaded = []




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

  function resetCharacters() {
    availableCharactersObjects = [
      new Character("Luke Skywalker", 100, 5, 5, "Human male Jedi Master", "luke100", "luke75", "luke50", "luke25", "luke0", "lukeGif"),
      new Character("Yoda", 125, 15, 15, "Mysterious species male Jedi Master", "yoda100", "yoda75", "yoda50", "yoda25", "yoda0", "yodaGif"),
      new Character("Palpatine", 150, 20, 20, "Human male Dark Lord of the Sith", "palpatine100", "palpatine75", "palpatine50", "palpatine25", "palpatine0", "palpatineGif"),
      new Character("Darth Vader", 125, 14, 14, "Human male Sith Lord", "darthVader100", "darthVader75", "darthVader50", "darthVader25", "darthVader0", "darthVaderGif")
    ];
  };
  // ends creating objects

  // Building the initial screen.  - Step 1

  function selectCharacterSetUp() {
    resetCharacters();
    $.each(availableCharactersObjects, function(index, character) {
      index++;
      $("#selectPosition" + index + "Title").html(character.name);
      $("#selectPosition" + index + "Image").attr("src", "assets/images/" + character.image100 + ".jpg");
      $("#selectPosition" + index + "Footer").html("HP: " + character.healtPoints);
    });
  } //End selectCharacterSetUp function

  selectCharacterSetUp()

  //  Start on click to Select a character. - Step 2

  $(".buttonCharacters").on("click", function(e) {
    var values = $(this).val();
    buttonAlert = values;
    buttonAlert = parseInt(buttonAlert);
    gameStarted = true;
    console.log("Value of Var gameStarted insite function clicked: " + gameStarted);
    console.log("characterSelected: " + characterSelected);
    if (characterSelected === undefined) {
      initializer();
    }
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
    characterSelectedObject = availableCharactersObjects[characterSelected]
    availableCharactersObjects.splice(characterSelected, 1);
    enemiesCharactersObjects = availableCharactersObjects
    printCharacterSelected()
    printEnemySelected()
  } //End startSelectCharacter function

  // Function print on screen the character selected. - Step 5

  function printCharacterSelected() {

    $("#messageSelectCharacter").html("Your Character")

    for (var i = 1; i < 5; i++) {
      $("#selectPosition" + i + "Title").html("");
      $("#selectPosition" + i + "Image").attr("src", "assets/images/orangeButton.jpeg");
      $("#selectPosition" + i + "Footer").html("");

    }
    $("#selectPosition1Title").html(characterSelectedObject.name)
    $("#selectPosition1Image").attr("src", "assets/images/" + characterSelectedObject.image100 + ".jpg")
    $("#selectPosition1Footer").html("HP: " + characterSelectedObject.healtPoints)
    //$("#selectPosition2Title").html(characterSelectedObject.brief)
  } // Ends Function  print Character Selected

  //------------------------------------------------------------------------------------

  // Function print on screen enemies avalable to attack - Step 6

  function printEnemySelected() {
    console.log(enemiesCharactersObjects);

    if (enemiesCharactersObjects.length < maxEnemies) {
      var index = enemiesCharactersObjects.length + 1;

      $("#attackCharacter" + index + "Title").remove();
      $("#attackCharacter" + index + "Image").remove();
      $("#attackCharacter" + index + "Footer").remove();

    }

    $.each(enemiesCharactersObjects, function(index, enemy) {
        index++;
        console.log("index " + index + " enemy " + enemy.name);
        console.log("index " + index + " enemy " + enemy.image100);

        $("#attackCharacter" + index + "Title").html(enemy.name);
        $("#attackCharacter" + index + "Image").attr("src", "assets/images/" + enemy.image100 + ".jpg");
        $("#attackCharacter" + index + "Footer").html(enemy.healtPoints);
      }

    )

  } // End function printEnemySelected

  //  Start on click to Select a character. - Step 7

  $(".buttonEnemies").on("click", function(e) {
    var values = $(this).val();
    buttonAlert2 = values;
    buttonAlert2 = parseInt(buttonAlert2);
    fightStarted = true;
    console.log("Value of Var fightStarted insite function clicked: " + fightStarted);
    console.log("characterSelected value enemy click: " + characterSelected);
    if (enemySelected === undefined && characterSelected !== undefined) {

      initializerCombat();
    }

  });

//------------------------------------------------------------------------------

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

  // display the fighters on the fight Section  - Step 10

  function fightCharacters() {
    document.getElementById("fightCharacter1Image").src = "assets/images/" + characterSelectedObject.imageGif + ".gif";
    document.getElementById("fightCharacter2Image").src = "assets/images/" + enemySelectedObject.imageGif + ".gif";

    $("#selectPosition4Title").html(enemySelectedObject.name)
    $("#selectPosition4Image").attr("src", "assets/images/" + enemySelectedObject.image100 + ".jpg")
    $("#selectPosition4Footer").html("HP: " + enemySelectedObject.healtPoints)
  } // end Function Gif fight Section

  //  Start on click to fight an enemy. - Step 7

  $(".attackButton").on("click", function(e) {
    var values = $(this).val();
    buttonAlert3 = values;
    buttonAlert3 = parseInt(buttonAlert3);
    attackStarted = true;
    console.log("Value of Var attackStarted insite function clicked: " + attackStarted);

    // if (enemySelected !== undefined && characterSelected !== undefined) {
    //   document.getElementById("message1").innerHTML = "SELECT A CHARACTER & AN ENEMY TO START THE GAME ";
    // }


    if (enemySelectedObject.healtPoints && characterSelectedObject.healtPoints > -1){
      console.log( "enemy HP:" + enemySelectedObject.healtPoints + "your HP" + characterSelectedObject.healtPoints + "on click event" );
      attacking();
    }

  });

  function attacking() {


    console.log("characterSelected value: " + characterSelected);

    console.log("Your HP before attack" + characterSelectedObject.healtPoints);
    characterSelectedObject.healtPoints = characterSelectedObject.healtPoints - enemySelectedObject.attackPower

    console.log("Your HP after attack" + characterSelectedObject.healtPoints);
    console.log("your counter Attack Power before attack" + characterSelectedObject.counterAttackPower);

    characterSelectedObject.counterAttackPower = characterSelectedObject.counterAttackPower + characterSelectedObject.attackPower
    console.log("your counter Attack Power after attack" + characterSelectedObject.counterAttackPower);
    console.log("enemy HP before Attack" + enemySelectedObject.healtPoints);

    enemySelectedObject.healtPoints = enemySelectedObject.healtPoints - characterSelectedObject.counterAttackPower
    console.log("enemy HP After Attack" + enemySelectedObject.healtPoints);

    //console.log("character1" + character1.healtPoints)

    fightMessajes()
  }

  function combat(){

    if (enemySelectedObject.healtPoints && characterSelectedObject.healtPoints > 0){
      console.log("Fighers in combat conditions");
    }
    if (enemySelectedObject.healtPoints < 0){
      console.log("You WIN!");
      win()
    }

    if (characterSelectedObject.healtPoints < 0){
      console.log("You LOST!");
      lose()
    }

  }


  // Function fightMessajes

  function fightMessajes() {

    //$("message1").html("You attacked " + enemySelectedObject.name + " for " + characterSelectedObject.counterAttackPower + " damage");
    document.getElementById("message1").innerHTML = "You attacked " + enemySelectedObject.name + " for " + characterSelectedObject.counterAttackPower + " damage";
    document.getElementById("message2").innerHTML = enemySelectedObject.name + " attacked you back for " + enemySelectedObject.attackPower + " damage"
    document.getElementById("selectPosition1Footer").innerHTML = "HP: " + characterSelectedObject.healtPoints;
    document.getElementById("selectPosition4Footer").innerHTML = "HP: " + enemySelectedObject.healtPoints;

    combat()
  } // end Function fightMessajes

  function lose(){
    $("#selectPosition1Image").attr("src", "assets/images/" + characterSelectedObject.image0 + ".jpg")
    document.getElementById("message1").innerHTML = "YOU LOST!";
    document.getElementById("message2").innerHTML = "CLICK RESTART TO CONTINUE"

  }

  function win(){

    $("#fightCharacter2Image").attr("src", "assets/images/" + enemySelectedObject.image0 + ".jpg")

    document.getElementById("message1").innerHTML = "YOU WIN!";
    document.getElementById("message2").innerHTML = "SELECT A NEW ENEMY TO CONTINUE"

    enemySelected = undefined;

  }



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



} //End setUpEvents Function

window.onload = function() {

  setUpEvents();

};
