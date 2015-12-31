size(400,400);

var introScreen = function() {   
    fill(0, 0, 0, 200);
    rect(0, 0, 400, 400);                  
    textFont(createFont("Oswald")); 
    fill(255);      
    textSize(30);     
    text("\nINSTRUCTIONS\n\n", 87, 50);
    textFont(createFont("Roboto"));
    textSize(20);
    text("Use the arrow keys to move your character. \nAvoid the obstacles and move across the \n river by using the logs. \nTo win, travel 25 meters.", 8, 150);  
    textSize(20);   
    text("Click any of the buttons above to start!", 28, 375);     
}; 

introScreen();