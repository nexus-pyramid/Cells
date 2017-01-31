// object constructor and methods for child Connector object
Connector.prototype = new Node();
Connector.prototype.constructor = Connector;
	function Connector(_a, _b, _c){
		this.a = _a;
		this.b = _b;
		this.c = _c;


	}
		// Connector.prototype.draw = function (){
		// 	fill(255, 204, 0);
		// 	triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
		// }
		Connector.prototype.move = function (){
			var x1 = map(mouseX, 0, width, 25, 75 );
			if( x1 > 25 ){
			}
			// console.log(x1);

		}
		function distSq(a, b) {
	  		var dx = b.x - a.x;
	  		var dy = b.y - a.y;
	  		var c = Math.sqrt( dx * dx + dy * dy);
	  		return c;
		}
