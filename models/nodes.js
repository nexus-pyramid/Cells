// object constructor and methods for Node object
function Node(tempX, tempY, tempDiameter,offSet, angle) {
	this.x = tempX;
	this.y = tempY;
	this.diameter = tempDiameter;
	this.off = offSet;
	this.a = angle
	this.scalar = 70;
	this.speed = 0.04;
}
	Node.prototype.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
	Node.prototype.wave = function() {
		 this.a += this.speed;
		this.y = this.off + sin(this.a) * this.scalar;
	}
