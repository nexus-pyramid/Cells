// object constructor and methods for child Connector object
Connector.prototype = new Node();
Connector.prototype.constructor = Connector;
	function Connector(_a, _b, _c){
		this.a = _a;
		this.b = _b;
		this.c = _c;


	}
		Connector.prototype.draw = function (){
			fill(255, 204, 0);
			triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
		}
