balls = [];
angles = [];
// object constructor and methods for Node object
function Node(tempX, tempY) {
	this.x = tempX;
	this.y = tempY;
	this.diameter = 30;
	this.a = 0.0;
	this.scalar = 5;
	this.speed = 0.04;
}
// this method uses an algorithim to give random starting coordinates for the nodes
	Node.prototype.calcpos = function(nodes) {
		arr = [100, 200, 60, 100, 300, 69, 420];
		var rand = arr[Math.floor(Math.random() * arr.length)];
		for (var i = 0; i < nodes.length; i++){
				var d = distSq(nodes[0], nodes[i]);
				if (d >= rand) {
					balls.push(nodes[i]);
				}
		}
	}
	Node.prototype.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
	Node.prototype.wave = function() {
		for( var i = 0; i< angles.length; i++){
			this.a += this.speed + angles[i]
		}
		//  this.a += this.speed;
		this.y += sin(this.a) * this.scalar;
	}
	//this method is for trying to increase the angular velocity of each node, so they all dont move at the same veloctiy
	Node.prototype.calcangle = function() {
		for(var i = 0; i< balls.length; i++){
			var r = random(0.0, 2.0);
			angles.push(r);
		}
		angles.sort(function(a, b){return a - b})
	}
	Node.prototype.apply = function() {
		for( var i = 0;i< angles.length; i++){
			this.a += this.speed + angles[i]
		}
	}
	function distSq(a, b) {
	  		var dx = b.x - a.x;
	  		var dy = b.y - a.y;
	  		var c = Math.sqrt( dx * dx + dy * dy);
	  		return c;
	}
