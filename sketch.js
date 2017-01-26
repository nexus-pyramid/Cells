var nodes = [];
var connectors = [];

function setup() {
	var canvas = createCanvas(1200, 800);
	canvas.parent('sketch-holder');
	for (var i = 0; i < 50; i++){
		nodes[i] = new Node(random(0, 1200), random(0, 500));
	}
	for (var i = 0; i<nodes.length; i++){
		 nodes[i].display(nodes);
	}
	nodes[0].calcpos(nodes);
	nodes[0].apply();
}
console.log(balls)
function draw (){
	 clear();
	 stroke(255);
	 strokeWeight(4);
	 for (var i = 0; i<balls.length; i++){
	 	balls[i].display();
	 	balls[i].wave();
	 }
	 fill(255);

}
