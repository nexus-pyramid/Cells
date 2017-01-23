var nodes = [];
var connectors = [];
//these arrays are for holding the properties of each node
var xpos = [80, 100, 60, 150, 230, 230, 330, 370, 360, 400, 480,480, 520, 580, 620, 666];
var offsets = [140, 320, 420, 170, 100, 220, 70, 110, 300, 200, 150, 240, 320, 420, 120, 170];
var angles = [0.08, 0.09, 0.0, 0.2, 0.4, 0.4, 0.6, 0.7, 0.8, 0.9, 1.09, 1.1, 1.2, 1.3, 1.4, 1.5];
function setup() {
	var canvas = createCanvas(1200, 800);
	canvas.parent('sketch-holder'); 	
 	for(var i = 0; i<xpos.length; i++){
 		var x = xpos[i];
 		var a;
 		var d = 40;
 		for(var j = 0; j<angles.length; j++){
 		 	a = angles[i];
 			for(var k = 0; k< offsets.length; k++){
 				var o = offsets[i];
 				// parameters for Node are
 				// (tempX, tempY, tempDiameter,offSet, angle)
 				xpos[i] = new Node(x, 0, d, o, a);
 			}
 		}
	nodes.push(xpos[i]);
 	}
	 child1 = new Connector();
	for(var i=0; i<33; i++){

		connectors[i] = new Connector();
	}
}
function draw (){
	clear();
	 stroke(255);
	 strokeWeight(4);  
	for (var i = 0; i<nodes.length; i++){
		 nodes[i].display();
		 nodes[i].wave();
	}
	child1.draw(nodes[0], nodes[1]);
	connectors[1].draw(nodes[1], nodes[2]);
	connectors[1].draw(nodes[2], nodes[5]);
	connectors[0].draw(nodes[0], nodes[3]);
	connectors[2].draw(nodes[1], nodes[3]);
	connectors[3].draw(nodes[3], nodes[4]);
	connectors[3].draw(nodes[3], nodes[5]);
	connectors[4].draw(nodes[4], nodes[5]);
	connectors[5].draw(nodes[5], nodes[6]);
	connectors[5].draw(nodes[5], nodes[8]);
	connectors[6].draw(nodes[4], nodes[6]);
	connectors[7].draw(nodes[6], nodes[7]);
	connectors[8].draw(nodes[7], nodes[9]);
	connectors[9].draw(nodes[8], nodes[9]);
	connectors[9].draw(nodes[5], nodes[9]);
	connectors[10].draw(nodes[7], nodes[10]);
	connectors[10].draw(nodes[8], nodes[11]);
	connectors[11].draw(nodes[9], nodes[11]);
	connectors[12].draw(nodes[8], nodes[12]);
	connectors[12].draw(nodes[11], nodes[12]);
	connectors[13].draw(nodes[12], nodes[13]);
	connectors[14].draw(nodes[10], nodes[14]);
	connectors[15].draw(nodes[10], nodes[11]);
	connectors[16].draw(nodes[11], nodes[14]);
	// connectors[17].draw(nodes[12], nodes[14]);
	connectors[18].draw(nodes[14], nodes[15]);
	connectors[19].draw(nodes[13], nodes[15]);
	connectors[20].draw(nodes[11], nodes[15]);
		 fill(255);
	 // stroke(255);
	 // strokeWeight(4);  
	 // console.log(nodes[3]);
}
