# Cells
this is a look into exploring OOP concepts and animation in ![p5.js logo](https://p5js.org/assets/img/p5js.svg).

To view this project either clone or download this repo and open index.html in browser.
This project exists to eventually recreate natural and generative systems and make them interactive in a broswer environment.
##  Reference
the Node object are the ellipses, and its properties can be easily altered by changing the parameters given to the function.
```javascript

function Node(tempX, tempY, tempDiameter,offSet, angle) {
	this.x = tempX;
	this.y = tempY;
	this.diameter = tempDiameter;
	this.off = offSet;
	this.a = angle
	this.scalar = 70;
	this.speed = 0.04;
}
```

the method that causes the motion of the y coordinate for the nodes is this method.
```javascript
	Node.prototype.wave = function() {
		 this.a += this.speed;
		this.y = this.off + sin(this.a) * this.scalar;
	}
 ```
 to add a new node you have to add the intergers for the tempX, offSet, and angle to their respective array's
 which can be found [here] (../master/sketch.js)
