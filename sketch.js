
//--------------------ENTORNS INETRACTIUS---------------------------
// -----------------------BEN AND RAMÓN-----------------------------



//---->CODE<------
/*

//FIRST WE CREATE SOME VARIABLES
//THE c VARIABLE IS AN ARRAY WHERE WE WILL PUT THE OBJECTS THAT WE WILL CREATE IN THE SETUP
let c = [];
//POSITION X AND POSITION Y ARE AN ARRAY THAT STORES THE X AND Y POSITIONS OF THE CUBES TAHT WE WILL CREATE
let positionsX = [100, 100, 100, 200, 200, 200, 300, 300, 300, 400, 400, 400, 100, 200, 300, 400, 500, 500, 500, 500];
let positionsY = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 400, 400, 400, 400, 100, 200, 300, 400];
//WE DECLARE AN INDEX TO GET THE POSITION OF X AND Y
let index = 0;
//AT THE BEGINING, THE WINDOW WILL BE BLACK, SO WE SPECIFY TNHAT ONLY IF BEGIN IS EQUAL TO TRUE, THE ANIMATION WILL START
let begin = false;
let counterPressed = 0;
function setup() {
    createCanvas(700, 500);
    background(255, 227, 150);
    //WE CHANGE THE FRAME RATE TO MAKE THINGS SMOOTHER AND SLOW DOWN A LITTLE BIT
    frameRate(20);
    for (let i = 0; i < 20; i++) {
        //WE CREATE 21 OBJECTS OF TYPE CUBE AND ASSIGN THEM THE POSX, POSY, LIIMITPOS, W,H, INITPOSX,INITPOSY
        let cubeObj;
        cubeObj = new cube();
        cubeObj.limitPos = 50;
        cubeObj.col1 = random(0, 255);
        cubeObj.col2 = random(0, 255);
        cubeObj.col3 = random(0, 255);
        cubeObj.posX = positionsX[index];
        cubeObj.posY = positionsY[index];
        cubeObj.w = random(10, 50);
        cubeObj.h = cubeObj.w;
        cubeObj.initPositionX = cubeObj.posX;
        cubeObj.initPositionY = cubeObj.posY;
        c.push(cubeObj);
        index++;
    }
}
function draw() {
    //IF WE CLICKED BEGIN, THEN THE BEGIN VARIABLE WILL BE TRUE AND THE ANIMATION WILL START
    if (begin) {
        for (let j = 0; j < c.length; j++) {
            //FOR EVERY OBJECT OF TYPE CUBE STORED IN THE C VARIABLE, WE SHOW, UPDATE, CHECK THE STATE AND MAKE RECT OF IT
            c[j].show();
            c[j].update();
            c[j].checkState();
            c[j].makeRectInFront();
        }
    }
    if (!begin) {
        // IF WE HAVEN'T PRESSED THE BUTTON YET, THE SCREEN WILL BE BLACK, SO THE VARIABLE BEGIN WILL BE FALSE
        background(0);
    }
}

function mouseClicked() {
    //IF IT IS THE FIRST TIME WE CLIKC THE BUTTON, THE BEGIN WILL BE TRUE AND THE ANIMATION WILL START
    if (counterPressed == 0) {
        begin = true;
        background(255, 227, 150);
    }
    if (counterPressed >= 1) {
        //IF THE COUNTER IS GREATER OR EQUAL TO 1, WE WILL CLEAR ALL 
        background(255, 227, 150);
        for (let j = 0; j < c.length; j++) {
            c[j].posX = c[j].initPositionX;
            c[j].posY = c[j].initPositionY;
            c[j].col1 = random(0, 255);
            c[j].col2 = random(0, 255);
            c[j].col3 = random(0, 255);
            if (c[j].finsihed) {
                c[j].finsihed = false;
            }
        }
    }
    counterPressed++;
}
*/
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}