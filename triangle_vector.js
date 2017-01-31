
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
    // for (var i = 0; i < n; i++) {
    //     vertices.push(createVector(~ ~random(width), ~ ~random(height)));
    // }
    for (var i = 0; i < balls.length; i++) {
        vertices.push(createVector(~ ~balls[i].x, ~ ~balls[i].y));
    }

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
         tris.push(new Connector(vertices[triangulation[i]], vertices[triangulation[i + 1]], vertices[triangulation[i + 2]]));
     }
     console.log(tris);
  }
