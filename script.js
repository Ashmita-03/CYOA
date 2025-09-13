//---------How it connects with Game Jam prompt- I feel that recycling is predominant step to protect our environment from plastic pollution, And I hope everybody follows recycling activities in their day to day life. I see hope in the form of protecting the environment.------------------------------------------------//


/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let c1Button;
let c2Button;
let d1Button;
let d2Button;
let screen = 0;

/* PRELOAD LOADS FILES */
function preload(){

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Home screen
  background("pink");
  text(
    "Welcome to 'The Plastic Path: Choose to Reuse!' 🌍\n\nYour choices matter. Every step can save or harm the Earth.\nAre you ready to go green?\n\nClick 'Enter' to begin your adventure!",
    width / 2,
    height / 2 - 100
  );

  // Buttons
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
  c1Button = new Sprite(-300, -300);
  c2Button = new Sprite(-300, -300);
  d1Button = new Sprite(-300, -300);
  d2Button = new Sprite(-300, -300);
}

/* DRAW LOOP */
function draw() {
  // Enter button logic
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.text = "Enter";
  enterButton.color = "plum";

  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen5();
      screen = 5;
    }
  }

  else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }

  else if (screen == 3) {
    if (c1Button.mouse.presses()) {
      showScreen6();
      screen = 6;
    } else if (c2Button.mouse.presses()) {
      showScreen7();
      screen = 7;
    }
  }

  else if (screen == 4) {
    if (d1Button.mouse.presses()) {
      showScreen8();
      screen = 8;
    } else if (d2Button.mouse.presses()) {
      showScreen9();
      screen = 9;
    }
  }

  print(screen);
}

/* STORY SCREENS */

function showScreen1() {
  background("paleturquoise");
  text(
    "You're in the school cafeteria.\n You see your friend using a reusable container.\nThe server offers you a plastic tray.\n\nDo you:\nA1 - Say no and pull out your reusable container?\nA2 - Take the plastic tray without thinking?",
    width / 2,
    height / 2 - 100
  );
  enterButton.pos = { x: -100, y: -100 };

  a1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  a1Button.w = 50;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "plum";
  a1Button.text = "A1";

  a2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  a2Button.w = 50;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "plum";
  a2Button.text = "A2";
}

function showScreen2() {
  background("palegreen");
  text(
    "After school, you're heading to the grocery store.\nYou remember your mom asked you to grab some veggies.\n\nDo you:\nB1 - Grab your cloth bag from your locker?\nB2 - Decide to just get a plastic bag at checkout?",
    width / 2,
    height / 2 - 100
  );
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };

  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  b1Button.w = 50;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "plum";
  b1Button.text = "B1";

  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  b2Button.w = 50;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "plum";
  b2Button.text = "B2";
}

function showScreen3() {
  background("#d388e1");
  text(
    "Well done! 🌟\nYou refused single-use plastic twice today!\nYour small acts are building big change.\n\nYou walk home feeling proud of your choices.\n\nWhere to next?",
    width / 2,
    height / 2 - 100
  );
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };

  c1Button.pos = { x: width / 2 - 70, y: height / 2 + 100 };
  c1Button.w = 50;
  c1Button.h = 50;
  c1Button.collider = "k";
  c1Button.color = "plum";
  c1Button.text = "Park";

  c2Button.pos = { x: width / 2 + 70, y: height / 2 + 100 };
  c2Button.w = 50;
  c2Button.h = 50;
  c2Button.collider = "k";
  c2Button.color = "plum";
  c2Button.text = "Beach";
}

function showScreen4() {
  background("purple");
  text(
    "Oops! Your plastic bag flew away \nin the wind and landed in a storm drain.\nIt might end up in the ocean!\n\nYou feel guilty, but tomorrow is a new day.\nWant to try something else?",
    width / 2,
    height / 2 - 100
  );
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };

  d1Button.pos = { x: width / 2 - 70, y: height / 2 + 100 };
  d1Button.w = 80;
  d1Button.h = 80;
  d1Button.collider = "k";
  d1Button.color = "plum";
  d1Button.text = "Backyard";

  d2Button.pos = { x: width / 2 + 70, y: height / 2 + 100 };
  d2Button.w = 80;
  d2Button.h = 80;
  d2Button.collider = "k";
  d2Button.color = "plum";
  d2Button.text = "Lake";
}

function showScreen5() {
  background("lightgreen");
  text(
    "You chose a plastic tray and threw it away after lunch.\nYou didn’t even recycle it. It ends up in the landfill.\n\nTry again and make better choices next time.",
    width / 2,
    height / 2 - 100
  );
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
}

function showScreen6() {
  background("skyblue");
  text(
    "At the park, you notice a plastic bottle under a tree.\nYou pick it up and drop it into a recycling bin nearby.\n\nThat one bottle might become a T-shirt someday!",
    width / 2,
    height / 2 - 100
  );
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -300, y: -300 };
}

function showScreen7() {
  background("lightyellow");
  text(
    "You’re at the beach and see a group doing a cleanup drive.\nYou join them and collect dozens of plastic straws and wrappers.\n\nYou made new friends and a difference!",
    width / 2,
    height / 2 - 100
  );
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -300, y: -300 };
}

function showScreen8() {
  background("lightpink");
  text(
    "You step into your backyard\n and see broken plastic toys left in the grass.You decide\n to sort them and bring them to a recycling center this weekend.\n\nEven the backyard matters!",
    width / 2,
    height / 2 - 100
  );
  d1Button.pos = { x: -300, y: -300 };
  d2Button.pos = { x: -300, y: -300 };
}

function showScreen9() {
  background("lightgray");
  text(
    "You visit the lake and spot plastic waste\nfloating near the edge.\nInstead of walking away, you gather the trash and report it.\n\nNature breathes easier because of you.",
    width / 2,
    height / 2 - 100
  );
  d1Button.pos = { x: -300, y: -300 };
  d2Button.pos = { x: -300, y: -300 };
}
