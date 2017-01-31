var nodes = [];
var BLUE, RED;
var ugh = [];
var connectors =[];
function setup() {
	createCanvas(windowWidth, windowHeight);
	BLUE = color('#1E2630');
	RED = color('#FB3550');

	// this loop creates 20 random angles then sorts them so each node has a different angular velocity
	for(var i = 0; i< 20; i++){
		var r = random(0.0, 2.0);
		angles.push(r);
	}
	angles.sort(function(a, b){return a - b})
		for (var i = 0; i < angles.length; i++){
			nodes[i] = new Node(random(0, 1200), random(0, 500), angles[i]);
		}
	nodes[0].calcpos(nodes);
	// sorting balls array by x position causes the shape to be linear
	balls.sort(function(a, b) {
		return parseFloat(a.x) - parseFloat(b.x);
	});

	initializeTriangulation();
	hey = new Connector(balls[0], balls[1], balls[2])
	for (var i = 0; i< balls.length-4; i+=3 ){
		connectors[i] = new Connector(balls[i], balls[i+1], balls[i+2]);
	}
	console.log(connectors)
	// console.time("triangulate");
	// var triangulation = Delaunay.triangulate(vertices.map(function (pt) {
	// 	return [vertices.x, vertices.y];
	// }));
	// console.timeEnd("triangulate");
	// for (var i = 0; i < triangulation.length; i += 3) {
	// 		 tris.push(new Triangle(pts[triangulation[i]], pts[triangulation[i + 1]], pts[triangulation[i + 2]]));
	//  }
}
// console.log(tris[i].wave());

function draw (){
	clear();
	stroke(255);
	strokeWeight(4);
	// fill(255);
	// for (var i = 0; i<balls.length; i++){
	//  balls[i].display();
	// //  initializeTriangulation();
	//
	// balls[i].wave();
	// }
	for( var i = 0; i< connectors.length; i+=3){
		connectors[i].draw();
	}
	// balls[0].follow(balls[0], balls[1], balls[2]);
 hey.draw();

	// tris.forEach(function (t) {
  //       return t.draw();
  //   });
	// for (var i = 0; i< balls.length; i++){
	//  balls[]
	//
	// }
		for (var i = 0; i<balls.length; i++){
		 balls[i].display();
		//  balls[i].follow(balls[i], balls[i+1], balls[i+2]);
		// initializeTriangulation();

		balls[i].wave();

		}

	}
	function mousePressed() {
    initializeTriangulation();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    initializeTriangulation();
}
	// beginShape()
	// for (var i = 0; i < triangles.length; i++){
	// 	vertex(vertices[triangles[i]][0], vertices[triangles[i]][1]);
	// 	vertex(vertices[triangles[i]][0], vertices[triangles[i]][1]);
	// 		console.log(vertex(vertices[triangles[i]][0], vertices[triangles[i]][1]));
	// }
	// for (var i = 0; i<balls.length; i++){
	//  balls[i].display();
	// //  balls[i].follow(balls[i], balls[i+1], balls[i+2]);
	// // initializeTriangulation();
	//
	// balls[i].wave();
	//
	// }
	// balls[0].follow(balls[0], balls[1], balls[2]);

	// balls[0].connect(balls);
	// connecting the nodes
	// beginShape();
	// noFill();
	// for (var i = 0; i<balls.length; i++){
	// 	vertex(balls[i].x, balls[i].y);
	// }
	// endShape();
