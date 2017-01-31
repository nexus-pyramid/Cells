balls = [];
angles = [];
function Node(tempX, tempY, angle) {
	this.x = tempX;
	this.y = tempY;
	this.diameter = 30;
	 this.a = angle;
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
			this.a += this.speed;
			this.y +=  sin(this.a) * this.scalar;
	}
	Node.prototype.connect = function(other) {
		for (var i = 0; i< balls.length; i++){
			 var d = distSq(balls[0], balls[i])
			 if ( d > 1000){
				 stroke(255, 0, 0);
	       strokeWeight(2);
	       beginShape();
	       vertex(balls[i].x, balls[i].y);
	       vertex(nodes[0].x, nodes[0].y);
	       endShape()
			 }
		}

  }
	Node.prototype.follow = function (node1, node2, node3) {
			// fill(255, 204, 0);
			triangle(this.x, this.y, this.x, this.y, this.x, this.y);
			//  fill(255, 204, 0);
	}
	function distSq(a, b) {
  		var dx = b.x - a.x;
  		var dy = b.y - a.y;
  		var c = Math.sqrt( dx * dx + dy * dy);
  		return c;
	}
