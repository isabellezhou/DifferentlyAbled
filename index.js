var frontLayer;
var middleLayer;
var backLayer;

void setup() {
	size(800,600);
	background(10, 30, 84);	
	frontLayer = new Scroller([0,0,0],800,300,5);
	middleLayer = new Scroller([71, 93, 204],800,450,3);
	backLayer = new Scroller([136, 207, 219],800,575,1);
}

void draw () {
	background(10,30,84);
	backLayer.addBuilding();
	backLayer.drawBuildings();
	backLayer.moveBuildings();
	middleLayer.addBuilding();
	middleLayer.drawBuildings();
	middleLayer.moveBuildings();
	frontLayer.addBuilding();
	frontLayer.drawBuildings();
	frontLayer.moveBuildings();
}
	
class Building {
	var r;
	var g;
	var b;
	var width;
	var height;
	var xPosition;
	var yPosition;
	var speed;
	
	Building (color,w,h,x,y,s) {
		r = color[0];
		g = color[1];
		b = color[2];
		width = w;
		height = h;
		xPosition = x;
		yPosition = y;
		speed = s;
	}
	
		void drawBuilding() {
			stroke(r,g,b);
			fill(r,g,b);
			rect(xPosition, yPosition, width, height);
		}	
		
		void moveBuilding() {
			xPosition -= speed;
		}
}

class Scroller {
	var r;
	var g;
	var b;
	var layerWidth;
	var layerHeight;
	var speed;
	var buildings = [];
	var totalWidth;
	
	Scroller (color, w, h, s) {
		r = color[0];
		g = color[1];
		b = color[2];
		layerWidth = w;
		layerHeight = h;
		speed = s;
		
		totalWidth = 0;
		var buildingWidth;
		var buildingHeight;
		while (totalWidth <= layerWidth) {
			buildingWidth = int(random(layerWidth/20, layerWidth/4));
			buildingHeight = int(random(layerHeight/2, layerHeight));
			buildings.push(new Building([r,g,b], buildingWidth+5, buildingHeight, totalWidth, 600-buildingHeight, speed));
			totalWidth = totalWidth + buildingWidth;
		}
	}
		
	void addBuilding() {
		//stroke(r,g,b);
		buildingWidth = int(random(layerWidth/20, layerWidth/4));
		buildingHeight = int(random(layerHeight/2, layerHeight));
		buildings.push(new Building([r,g,b], buildingWidth+5, buildingHeight, totalWidth, 600-buildingHeight, speed));
		totalWidth = totalWidth + buildingWidth;
	}
	
	void drawBuildings() {
		for (var i = 0; i<buildings.length; i++) {
			buildings[i].drawBuilding();
		}
	}
	
	void moveBuildings() {
		for (var i = 0; i<buildings.length; i++) {
			buildings[i].moveBuilding();
		}
	}
}