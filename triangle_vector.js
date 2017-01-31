
function initializeTriangulation() {
    tris = [];
    var vertices = [];

    // push canvas rect points
    vertices.push(createVector(0, 0));
    vertices.push(createVector(width, 0));
    vertices.push(createVector(width, height));
    vertices.push(createVector(0, height));
    // for ( var i = 0; i < balls.length; i++){
  	//    vertices.push(createVector(balls[i].x), createVector(balls[i].y));
  	// }
    // console.log(vertices);

    // add a certain nb of pts proportionally to the size of the canvas
    // ~~ truncates a floating point number and keeps the integer part, like floor()
    // var n = ~ ~(width / 300 * height / 300);
    for (var i = 0; i < 20; i++) {
        vertices.push(createVector(~ ~random(width), ~ ~random(height)));
    }
    // for (var i = 0; i < balls.length; i++) {
    //     vertices.push(createVector(~ ~balls[i].x, ~ ~balls[i].y));
    // }

    // Now, let's use Delaunay.js
    // Delaunay.triangulate expect a list of vertices (which should be a bunch of two-element arrays, representing 2D Euclidean points)
    // and it will return you a giant array, arranged in triplets, representing triangles by indices into the passed array
    // Array.map function let us create an Array of 2 elements arrays [ [x,y],[x,y],..] from our array of PVector [ PVector(x,y), PVector(x,y), ... ]
    var triangulation = Delaunay.triangulate(vertices.map(function (vertices) {
      return [vertices.x, vertices.y];
    }));
    // console.log(triangulation);
    // create Triangles object using indices returned by Delaunay.triangulate
    for (var i = 0; i < triangulation.length; i += 3) {
         tris.push(new Triangle(vertices[triangulation[i]], vertices[triangulation[i + 1]], vertices[triangulation[i + 2]]));
     }
     console.log(tris.length);
  }
  // class for keeping triangles from 3 PVectors
function Triangle(_a, _b, _c) {
    // PVectors
    this.a = _a;
    this.b = _b;
    this.c = _c;

    // used for fill using lerpColor
    this.r = random(0.8);

    // used for drawing lines on triangles
    // number of lines to draw proportionnally to the triangle size
    this.n = ~ ~(dist(_a.x, _a.y, (this.b.x + this.c.x) / 2, (this.b.y + this.c.y) / 2) / random(25, 50)) + 1;
    // direction point for the lines
    this.drawTo = ~ ~random(3);

    this.draw = function () {
        noStroke();
        fill(lerpColor(RED, BLUE, this.r));

        triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);

        switch (this.drawTo) {
            case 0:
                this.drawLines(this.a, this.b, this.c);
                break;
            case 1:
                this.drawLines(this.c, this.a, this.b);
                break;
            case 2:
                this.drawLines(this.b, this.a, this.c);
                break;
        }

        stroke(BLUE);
        strokeJoin(BEVEL);
        // strokeWeight(15);
        noFill();
        triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
    };
    this.move = function() {
      var x1 = map(mouseX, 0, width, 25, 75 );
      if( x1 > 25 ){

        initializeTriangulation();
      }


    }
    this.drawLines = function (from, to1, to2) {
        var c = cos(frameCount / 360 * TWO_PI) / 2;
        for (var i = 1; i <= this.n; i++) {
            var p1 = createVector(lerp(from.x, to1.x, (i - 1) / this.n), lerp(from.y, to1.y, (i - 1) / this.n));
            var p2 = createVector(lerp(from.x, to2.x, (i - 1) / this.n), lerp(from.y, to2.y, (i - 1) / this.n));
            var p3 = createVector(lerp(from.x, to2.x, (i - 0.5 + c) / this.n), lerp(from.y, to2.y, (i - 0.5 + c) / this.n));
            var p4 = createVector(lerp(from.x, to1.x, (i - 0.5 + c) / this.n), lerp(from.y, to1.y, (i - 0.5 + c) / this.n));

            // line( p1.x, p1.y, p2.x, p2.y );

            noStroke();
            fill(BLUE);
            quad(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
        }
    };
}
