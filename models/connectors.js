// object constructor and methods for child Connector object
Connector.prototype = new Node();
Connector.prototype.constructor = Connector;
	function Connector(){
	
	}
		Connector.prototype.draw = function (node1, node2){
			line(node1.x, node1.y, node2.x, node2.y);
		}


