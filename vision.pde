//Instructions

/**
 * Use the up arrow key to move foward
 * You can also use the left, right, and down arrow keys to move
 * Avoid the cars, trains, and water (use the logs to cross)
 * If you move to slow the eagle will catch you (once you see it you can't escape it)
 * The green and gray squares are trees and rocks
 * Score 100 points to win
 * Have fun!
**/

var playerX = 188;
var playerY = 275;
var grassY = 100;
var carX = [-50, -250, -350, 450, 650, 750];
var trainX = 2000;
var logX = [random(-250, -200), random(425, 525), random(-300, -250), random(525, 625), random(625, 725), random(-350, -30), random(650, 750)];
var logY = [75, 50, 25, 0, 50, 25, 0];
var logW = [random(35, 150), random(35, 150), random(35, 150), random(35, 150), random(35, 150), random(35, 150), random(35, 150)];
var onLog = [false, false, false, false, false, false, false];
var roadY1 = [100, 25, -650, -750, -900, -1550, -1725];
var roadY2 = [-50, -400, -1200, -1325, -1500, -1650, -1800, -1875];
var roadY3 = [-600, -1100, -2125];
var railRoadY = [-150, -200, -625, -1125, -1525, -1700, -1750];
var waterY = -325;
var eagleX = 188;
var eagleY = -100;
var score = 0;
var start = false;
var win = false;
var gameOver = false;

var obstacle = {

    x: [38, 63, 88, 113, 138, 163, 188, 213, 238, 263, 288, 313, 338, 63, 88, 138, 213, 263, 288, 338, 113, 313, 263, 163, 88, 188, 313, 88, 188, 313, 88, 188, 313, 63, 113, 188, 238, 313, 63, 113, 188, 238, 313],

    y: [275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 250, 250, 250, 250, 250, 250, 250, 0, 0, -175, -175, -350, -350, -350, -700, -725, -725, -1150, -1150, -1150, -1450, -1450, -1450, -1450, -1450, -1675, -1675, -1675, -1675, -1675],

    l: false,
    r: false,
    u: false,
    d: false,
    type: ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "rock", "tree", "tree", "rock", "tree", "tree", "rock", "tree", "tree", "tree", "rock", "tree", "rock", "rock", "tree", "rock", "tree", "rock", "rock"]
};

var font = function(x, y, label, pColor, sColor, thickness) {

    fill(sColor);
    text(label, x + thickness, y);
    text(label, x + thickness, y + thickness);
    fill(pColor);
    text(label, x, y);
};

var gameBackground = function() {

    background(96, 96, 96);

    fill(50, 50, 50, 75);
    rect(0, 0, 35, 400);
    rect(365, 0, 35, 400);
};

//draw the player
var player = function() {
    //player body
    fill(255);
    rect(playerX + 2, playerY + 2, 20, 20);
    //player eyes
    fill(0);
    rect(playerX + 5, playerY + 5, 5, 5);
    rect(playerX + 14, playerY + 5, 5, 5);
};

var obstacleFunc = function(x, y, type) {

    if (type === "rock") {
        fill(100);
    }
    if (type === "tree") {
        fill(64, 64, 64);
    }

    rect(x + 2, y + 2, 20, 20);

    if (playerX + 25 === x && playerY === y && playerY + 25 === y + 25) {
        obstacle.l = true;
    }

    if (playerX === x + 25 && playerY === y && playerY + 25 === y + 25) {
        obstacle.r = true;
    }

    if (playerY + 25 === y && playerX === x && playerX + 25 === x + 25) {
        obstacle.u = true;
    }

    if (playerY === y + 25 && playerX === x && playerX + 25 === x + 25) {
        obstacle.d = true;
    }
};

var car = function(x, y, color, direction) {

    strokeWeight(1.5);

    if (color === "red") {
        stroke(75, 75, 75);
        fill(60, 60, 60);
    }
    if (color === "blue") {
        stroke(75, 75, 75);
        fill(60, 60, 60);
    }
    if (color === "orange") {
        stroke(75, 75, 75);
        fill(60, 60, 60);
    }
    if (color === "yellow") {
        stroke(75, 75, 75);
        fill(60, 60, 60);
    }

    rect(x, y, 45, 20);

    if (color === "red") {
        fill(0, 0, 0);
    }
    if (color === "blue") {
        fill(0, 0, 0);
    }
    if (color === "orange") {
        fill(0, 0, 0);
    }
    if (color === "yellow") {
        fill(0, 0, 0);
    }

    rect(x, y + 5, 45, 10);
    fill(75);

    if (direction === "right") {
        rect(x + 5, y + 3, 28, 14);
    }

    if (direction === "left") {
        rect(x + 12, y + 3, 28, 14);
    }

    fill(0);
    noStroke();
    rect(x + 5, y - 2, 12, 2);
    rect(x + 28, y - 2, 12, 2);
    rect(x + 5, y + 20, 12, 2);
    rect(x + 28, y + 20, 12, 2);

    if (color === "yellow") {
        fill(75, 75, 75);
    }

    if (direction === "right") {
        rect(x + 15, y + 6, 5, 8);
    }

    if (direction === "left") {
        rect(x + 25, y + 6, 5, 8);
    }
    
    for (var i = 0; i <= 2; i++) {
        if (carX[i] > 425) {
            carX[i] = -75;
        }
    }
    
    for (var i = 3; i <= 5; i++) {
        if (carX[i] < -50) {
            carX[i] = 450;
        }
    }

    if (playerX + 25 > x && playerX < x + 45 && playerY + 25 > y && playerY < y + 20) {
        gameOver = true;
    }
};

var road1 = function(x, y) {

    fill(75);
    rect(x, y, 400, 25);

    car(carX[0], y + 2, "red", "right");
    car(carX[1], y + 2, "yellow", "right");
    car(carX[2], y + 2, "blue", "right");
};

var road2 = function(x, y) {

    fill(75);
    rect(x, y, 400, 50);

    for (var x = 20; x < 400; x += 65) {
        fill(100);
        rect(x, y + 22, 35, 5);
    }

    car(carX[0], y + 2, "blue", "right");
    car(carX[1], y + 2, "orange", "right");
    car(carX[2], y + 2, "yellow", "right");
    car(carX[3], y + 28, "red", "left");
    car(carX[4], y + 28, "blue", "left");
    car(carX[5], y + 28, "yellow", "left");
};

var road3 = function(x, y) {

    fill(75);
    rect(x, y, 400, 150);

    fill(100);

    for (var a = 20; a < 400; a += 65) {
        for (var b = 22; b < 135; b += 25) {
            rect(a, y + b, 35, 5);
        }
    }

    car(carX[0] - 25, y + 2, "red", "right");
    car(carX[1] - 0, y + 2, "blue", "right");
    car(carX[2] - 10, y + 2, "yellow", "right");
    car(carX[3] - 10, y + 28, "red", "left");
    car(carX[4] + 5, y + 28, "blue", "left");
    car(carX[5], y + 28, "red", "left");
    car(carX[0], y + 52, "blue", "right");
    car(carX[1] + 25, y + 52, "orange", "right");
    car(carX[2] - 5, y + 52, "blue", "right");
    car(carX[3] - 10, y + 76, "red", "left");
    car(carX[4] - 5, y + 76, "blue", "left");
    car(carX[5] - 5, y + 76, "yellow", "left");
    car(carX[0] + 25, y + 102, "blue", "right");
    car(carX[1], y + 102, "orange", "right");
    car(carX[2] - 10, y + 102, "blue", "right");
    car(carX[3] + 25, y + 128, "red", "left");
    car(carX[4] + 5, y + 128, "blue", "left");
    car(carX[5] + 15, y + 128, "yellow", "left");
};

var train = function(x, y) {

    for (var i = 0; i < 1000; i += 108) {
        fill(60, 60, 60);
        rect(i + x, y, 100, 25);
        fill(80, 80, 80);
        rect(i + x + 5, y + 5, 90, 15);
    }

    for (var i = 100; i < 975; i += 108) {
        fill(70, 70, 70);
        rect(i + x, y + 4, 8, 18);
    }

    if (trainX < -2000) {
        trainX = 2000;
    }

    if (playerX + 25 > x && playerX < x + 1050 && playerY + 25 > y && playerY < y + 25) {
        gameOver = true;
    }
};

var traintracks = function(x, y) {

    fill(75);
    rect(x, y, 400, 25);
    fill(50);
    rect(x, y + 2, 400, 3);
    rect(x, y + 20, 400, 3);
    fill(60, 60, 60);

    for (var i = 20; i < 400; i += 30) {
        rect(i + x, y + 5, 5, 15);
    }

    if (trainX < 1000 && trainX > -500) {
        fill(60, 60, 60, 75);
        rect(x, y, 400, 25);
    }

    train(trainX, y);
};

var logs = function(x, y, w) {

    fill(60, 60, 60);
    rect(x, y + 2, w, 20);

    for (var i = 0; i < logX.length; i++) {
        if (playerX + 25 > logX[i] && playerX < logX[i] + logW[i] && playerY + 25 > logY[i] + grassY + waterY && playerY < logY[i] + grassY + waterY + 25) {
    
            playerX = logX[i] + logW[i] / 2 - 12.5;
            onLog[i] = true;
        } else {
            onLog[i] = false;
        }
    }
};

var water = function(x, y) {

    fill(80, 80, 80);
    rect(x, y, 400, 100);
    fill(85);
    rect(x + 15, y, 20, 100);
    rect(x + 365, y, 20, 100);

    for (var i = 0; i < logX.length; i++) {
        logs(logX[i], logY[i] + y, logW[i]);
    }
    
    for (var i = 0; i < logX.length; i++) {
        
        if (i % 2 === 0) {
            if (logX[i] > 400) {
                logX[i] = -150;
            }
        }
        
        if (i % 2 === 1) {
            if (logX[i] < -100) {
                logX[i] = 500;
            }
        }
    }

    if (playerY + 25 > y - 25 && playerY < y) {

        if (playerX > 25 && playerX < 50) {
            playerX = 38;
        }
        if (playerX > 50 && playerX < 75) {
            playerX = 63;
        }
        if (playerX > 75 && playerX < 100) {
            playerX = 88;
        }
        if (playerX > 100 && playerX < 125) {
            playerX = 113;
        }
        if (playerX > 125 && playerX < 150) {
            playerX = 138;
        }
        if (playerX > 150 && playerX < 175) {
            playerX = 163;
        }
        if (playerX > 175 && playerX < 200) {
            playerX = 188;
        }
        if (playerX > 200 && playerX < 225) {
            playerX = 213;
        }
        if (playerX > 225 && playerX < 250) {
            playerX = 238;
        }
        if (playerX > 250 && playerX < 275) {
            playerX = 263;
        }
        if (playerX > 275 && playerX < 300) {
            playerX = 288;
        }
        if (playerX > 300 && playerX < 325) {
            playerX = 313;
        }
        if (playerX > 325 && playerX < 350) {
            playerX = 338;
        }
    }

    if (playerX > x && playerX < x + 400 && playerY + 25 > y && playerY < y + 100 && onLog[0] === false && onLog[1] === false && onLog[2] === false && onLog[3] === false && onLog[4] === false && onLog[5] === false && onLog[6] === false) {
        gameOver = true;
    }

    if (playerX > 365 || playerX + 20 < 35) {
        gameOver = true;
    }
};

var eagle = function() {

    eagleX = playerX;

    //draw the eagle
    fill(255);
    rect(eagleX, eagleY - 15, 20, 15);
    fill(0, 0, 0);
    rect(eagleX, eagleY, 20, 50);
    rect(eagleX - 28, eagleY + 15, 75, 18);
    fill(255);
    rect(eagleX, eagleY + 50, 20, 20);
    fill(0, 0, 0);
    rect(eagleX + 8, eagleY + 70, 5, 10);
    //if the player is too close to the bottom of the screen (too slow)
    if (playerY > 375) {
        eagleY += 100;
    }

    if (eagleY > playerY) {
        gameOver = true;
    }
};

var gameOverScreen = function() {

    if (gameOver === true) {
        noLoop();
        fill(255, 125, 25, 200);
        rect(0, 125, 400, 50);
        fill(0, 125, 255, 200);
        rect(0, 200, 400, 50);
        fill(255);
        textSize(35);
        text("Game Over", 200, 150);
        text("Press a Key to Play Again", 200, 225);
    }
};

var winScreen = function() {

    if (score === 100) {
        win = true;
    }

    if (win === true) {
        noLoop();
        fill(255, 125, 25, 200);
        rect(0, 125, 400, 50);
        fill(0, 125, 255, 200);
        rect(0, 200, 400, 50);
        fill(255);
        textSize(35);
        text("You Win!", 200, 150);
        text("Click To Play Again", 200, 225);
    }
};

var game = function() {
	//console.log("game function");
    textFont(createFont("Oswald"));
    textAlign(CENTER, CENTER);
    
    noStroke();

    gameBackground();

    if (start === true) {
        grassY += 0.5;
        playerY += 0.5;
    }

    for (var i = 0; i < carX.length; i++) {
        carX[i] += i > 2 ? -2 : 2;
    }

    logX[0] += 2;
    logX[1] -= 2;
    logX[2] += 2;
    logX[3] -= 2;
    logX[4] -= 2;
    logX[5] += 2;
    logX[6] -= 2;
    
    trainX -= 20;

    for (var i = 0; i < roadY1.length; i++) {
        road1(0, grassY + roadY1[i]);
    }
    for (var i = 0; i < roadY2.length; i++) {
        road2(0, grassY + roadY2[i]);
    }
    for (var i = 0; i < roadY3.length; i++) {
        road3(0, grassY + roadY3[i]);
    }
    for (var i = 0; i < railRoadY.length; i++) {
        traintracks(0, grassY + railRoadY[i]);
    }

    waterY = -325;

    while (waterY > -2000) {
        water(0, grassY + waterY);
        waterY -= 550;
    }

    for (var i = 0; i < obstacle.x.length; i++) {
        obstacleFunc(obstacle.x[i], obstacle.y[i] + grassY, obstacle.type[i]);
    }

    player();
    eagle();
    
    if (start === true) {
        textSize(50);
        font(200, 50, score, color(255), color(0), 3);
    } else {
        textSize(55);
        font(200, 150, "DifferentlyAbled", color(255), color(0), 3); 
        textSize(30);
        font(200, 150, "\n\n\n(simulated visual disability)", color(255), color(0), 3);
    }

    winScreen();
    gameOverScreen();
};

void keyReleased() {

    if (keyCode === LEFT && obstacle.r === false && playerX > 40 && playerY < 375) {
        playerX -= 25;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        start = true;
    }

    if (keyCode === RIGHT && obstacle.l === false && playerX < 330 && playerY < 375) {
        playerX += 25;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        start = true;
    }

    if (keyCode === UP && obstacle.d === false && playerY < 375) {
        playerY -= 25;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        score++;
        start = true;
    }

    if (keyCode === DOWN && obstacle.u === false && playerY < 375) {
        playerY += 25;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        obstacle.l = false;
        obstacle.r = false;
        obstacle.u = false;
        obstacle.d = false;
        score--;
        start = true;
    }
}

void keyPressed() {

    if (win === true || gameOver === true) {
        setup();
        loop();
    }
}


void draw() {
	game();
}

void setup() {
    size(400, 400);

    playerX = 188;
    playerY = 275;
    grassY = 100;
    carX = [-50, -250, -350, 450, 650, 750];
    trainX = 2000;
    logX = [random(-250, -200), random(425, 525), random(-300, -250), random(525, 625), random(625, 725), random(-350, -30), random(650, 750)];
    logY = [75, 50, 25, 0, 50, 25, 0];
    logW = [random(35, 150), random(35, 150), random(35, 150), random(35, 150), random(35, 150), random(35, 150), random(35, 150)];
    onLog = [false, false, false, false, false, false, false];
    roadY1 = [100, 25, -650, -750, -900, -1550, -1725];
    roadY2 = [-50, -400, -1200, -1325, -1500, -1650, -1800, -1875];
    roadY3 = [-600, -1100, -2125];
    railRoadY = [-150, -200, -625, -1125, -1525, -1700, -1750];
    waterY = -325;
    eagleX = 188;
    eagleY = -100;
    score = 0;
    start = false;
    win = false;
    gameOver = false;

    obstacle = {

        x: [38, 63, 88, 113, 138, 163, 188, 213, 238, 263, 288, 313, 338, 63, 88, 138, 213, 263, 288, 338, 113, 313, 263, 163, 88, 188, 313, 88, 188, 313, 88, 188, 313, 63, 113, 188, 238, 313, 63, 113, 188, 238, 313],

        y: [275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 250, 250, 250, 250, 250, 250, 250, 0, 0, -175, -175, -350, -350, -350, -700, -725, -725, -1150, -1150, -1150, -1450, -1450, -1450, -1450, -1450, -1675, -1675, -1675, -1675, -1675],

        l: false,
        r: false,
        u: false,
        d: false,
        type: ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "rock", "tree", "tree", "rock", "tree", "tree", "rock", "tree", "tree", "tree", "rock", "tree", "rock", "rock", "tree", "rock", "tree", "rock", "rock"]
    };
}
