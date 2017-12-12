function setUpEvents() {


  // creating the objects
  function character(name, healtPoints, attackPower, counterAttackPower, brief, image100, image75, image50, image25, image0, imageGif) {
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

  var character1 = new character("Luke Skywalker", 100, 25, 25, "Human male Jedi Master", "luke100", "luke75", "luke50", "luke25", "luke0", "lukeGif")
  var character2 = new character("Yoda", 125, 50, 50, "Mysterious species male Jedi Master", "yoda100", "yoda75", "yoda50", "yoda25", "yoda0", "yodaGif")
  var character3 = new character("Palpatine", 150, 75, 75, "Human male Dark Lord of the Sith", "palpatine100", "palpatine75", "palpatine50", "palpatine25", "palpatine0", "palpatineGif")
  var character4 = new character("Darth Vader", 125, 50, 50, "Human male Sith Lord", "darthVader100", "darthVader75", "darthVader50", "darthVader25", "darthVader0")

  // ends creating objects

  //Setting characters to select

  function selectCharacterSetUp() {
    //  var characters = [characterOne,characterTwo];
    //  i=1
    //document.getElementById("selectCharacter"+i+"Title").innerHTML = characters[i].name;
    //document.getElementById("selectCharacter"+i+"Image").src = "assets/images/"+ characters[i].image100 +".jpg";
    //document.getElementById("selectCharacter"+i+"Footer").innerHTML = "HP: " + characters[i].healtPoints;

    document.getElementById("selectCharacter1Title").innerHTML = character1.name;
    document.getElementById("selectCharacter1Image").src = "assets/images/" + character1.image100 + ".jpg";
    document.getElementById("selectCharacter1Footer").innerHTML = "HP: " + character1.healtPoints;

    document.getElementById("selectCharacter2Title").innerHTML = character2.name;
    document.getElementById("selectCharacter2Image").src = "assets/images/" + character2.image100 + ".jpg";
    document.getElementById("selectCharacter2Footer").innerHTML = "HP: " + character2.healtPoints;

    document.getElementById("selectCharacter3Title").innerHTML = character3.name;
    document.getElementById("selectCharacter3Image").src = "assets/images/" + character3.image100 + ".jpg";
    document.getElementById("selectCharacter3Footer").innerHTML = "HP: " + character3.healtPoints;

    document.getElementById("selectCharacter4Title").innerHTML = character4.name;
    document.getElementById("selectCharacter4Image").src = "assets/images/" + character4.image100 + ".jpg";
    document.getElementById("selectCharacter4Footer").innerHTML = "HP: " + character4.healtPoints;

  } //End setting characters to select

  selectCharacterSetUp()

  var selection = 3;
  var characterSelectedName
  var attackCharactersNames
  var attackCharactersImages
  var attackCharactersHP
  var attackCharactersObjects
  var characterSelectedObject


  function startSelectCharacter() {
    console.log("selection " + selection);
    var availableCharactersObjects = [character1,character2,character3,character4]
    var availableCharactersNames = [character1.name, character2.name, character3.name, character4.name]
    var availableCharactersImages = [character1.image100, character2.image100, character3.image100, character4.image100]
    var availableCharactersHP = [character1.healtPoints, character2.healtPoints, character3.healtPoints, character4.healtPoints]
    characterSelectedName = availableCharactersNames[selection];
    characterSelectedObject = availableCharactersObjects[selection]

    availableCharactersObjects.splice(selection, 1);
    availableCharactersImages.splice(selection, 1);
    availableCharactersHP.splice(selection, 1);
    availableCharactersNames.splice(selection, 1);
    attackCharactersObjects = availableCharactersObjects
    attackCharactersNames = availableCharactersNames;
    attackCharactersImages = availableCharactersImages;
    attackCharactersHP = availableCharactersHP;

  } //end of function

  startSelectCharacter()

/// console log Section

  console.log("Names characters available to attack: " + attackCharactersNames);
  console.log("Images characters available to attack: " + attackCharactersImages);
  console.log("HPs characters available to attack: " + attackCharactersHP);
  console.log("Name of character selected: " + characterSelectedName);
  console.log("Object of character selected: " + characterSelectedObject);
  var nameObject = characterSelectedObject.brief
  console.log("Brief character setected coming from object"+ nameObject);

  console.log("Object of character attack character" + attackCharactersObjects);

  var attactName = attackCharactersObjects.brief
    console.log("Brief attack setected coming from object: "+ attactName);

///// Ends console log section

function printCharacterSelected(){
  document.getElementById("messageSelectCharacter").innerHTML = "Your Character";

for (var i = 1; i < 5; i++) {
  document.getElementById("selectCharacter"+i+"Title").innerHTML = "";
  document.getElementById("selectCharacter"+i+"Image").src = "";
  document.getElementById("selectCharacter"+i+"Footer").innerHTML = "";
}

  document.getElementById("selectCharacter2Title").innerHTML = characterSelectedObject.name;
  document.getElementById("selectCharacter2Image").src = "assets/images/" + characterSelectedObject.image100 + ".jpg";
  document.getElementById("selectCharacter2Footer").innerHTML = "HP: " + characterSelectedObject.healtPoints;
  document.getElementById("selectCharacter3Image").innerHTML = characterSelectedObject.brief;


}

printCharacterSelected()


  function attackCharacter() {
    var a
    //    var attackCharactersNames = [character1.name, character2.name, character3.name, character4.name]
    //    console.log("attack charcters lenght" + attackCharactersNames.length);

    a = 3

    if (a > 0) {
      console.log("logging count" + a);
      document.getElementById("attackCharacter1Title").innerHTML = attackCharactersNames[0];
      document.getElementById("attackCharacter1Image").src = "assets/images/" + attackCharactersImages[0] + ".jpg";
      document.getElementById("attackCharacter1Footer").innerHTML = "HP: " + attackCharactersHP[0];
    } else {
      document.getElementById("attackCharacter"+1+"Title").innerHTML = "";
      document.getElementById("attackCharacter"+1+"Image").src = "";
      document.getElementById("attackCharacter"+1+"Footer").innerHTML = "";
    }
    if (a > 1) {
      document.getElementById("attackCharacter2Title").innerHTML = attackCharactersNames[1];
      document.getElementById("attackCharacter2Image").src = "assets/images/" + attackCharactersImages[1] + ".jpg";
      document.getElementById("attackCharacter2Footer").innerHTML = "HP: " + attackCharactersHP[1];
    } else {
      document.getElementById("attackCharacter"+2+"Title").innerHTML = "";
      document.getElementById("attackCharacter"+2+"Image").src = "";
      document.getElementById("attackCharacter"+2+"Footer").innerHTML = "";
    }
    if (a > 2) {
      document.getElementById("attackCharacter3Title").innerHTML = attackCharactersNames[2];
      document.getElementById("attackCharacter3Image").src = "assets/images/" + attackCharactersImages[2] + ".jpg";
      document.getElementById("attackCharacter3Footer").innerHTML = "HP: " + attackCharactersHP[2];
    } else {
      document.getElementById("attackCharacter"+3+"Title").innerHTML = "";
      document.getElementById("attackCharacter"+3+"Image").src = "";
      document.getElementById("attackCharacter"+3+"Footer").innerHTML = "";
    }

  }

  attackCharacter()

  // Function images defeaded Characters

  function defeadedCharacters() {

    document.getElementById("defeadedCharacter1Title").innerHTML = character1.name;
    document.getElementById("defeadedCharacter1Image").src = "assets/images/" + character1.image0 + ".jpg";
    document.getElementById("defeadedCharacter1Footer").innerHTML = "HP: " + character1.healtPoints;

    document.getElementById("defeadedCharacter2Title").innerHTML = character2.name;
    document.getElementById("defeadedCharacter2Image").src = "assets/images/" + character2.image0 + ".jpg";
    document.getElementById("defeadedCharacter2Footer").innerHTML = "HP: " + character2.healtPoints;

    document.getElementById("defeadedCharacter3Title").innerHTML = character3.name;
    document.getElementById("defeadedCharacter3Image").src = "assets/images/" + character3.image0 + ".jpg";
    document.getElementById("defeadedCharacter3Footer").innerHTML = "HP: " + character3.healtPoints;

  } // End function images defeaded Characters

  defeadedCharacters()

  // Function Gif fight Section

  function fightCharacters() {
    document.getElementById("fightCharacter1Image").src = "assets/images/" + character1.imageGif + ".gif";
    document.getElementById("fightCharacter2Image").src = "assets/images/" + character3.imageGif + ".gif";
  } // end Function Gif fight Section

  fightCharacters()

  // Function fightMessajes

  function fightMessajes() {
    document.getElementById("message1").innerHTML = "You attacked " + character1.name + " for " + character1.attackPower + " damage";
    document.getElementById("message2").innerHTML = character2.name + " attacked you back for " + character2.counterAttackPower + " damage"
    //  document.getElementById("message1").innerHTML = "You attacked " + character1.name + " for " character1.attackPower + " damage"
    //  document.getElementById("mesage2").innerHTML = character2.name + " attacked you back for " + character2.counterAttackPower + " damage"
  } // end Function fightMessajes

  fightMessajes()


} //End setUpEvents Function

window.onload = function() {

  setUpEvents();
};
