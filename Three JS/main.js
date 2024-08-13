import * as THREE from 'three';

// Setup Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Setup Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create Cube
const geometry = new THREE.BoxGeometry( 5, 5, 5 );
const material = new THREE.MeshBasicMaterial( { color: 0x00dd88 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Create Wireframe for Cube
var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )
var mat = new THREE.LineBasicMaterial( { color: 0x880000, linewidth: 10 } );
var wireframe = new THREE.LineSegments( geo, mat );
scene.add( wireframe );

// Create Lines
const line_material = new THREE.LineBasicMaterial( {color: 0x0000ff} );

const points = [];
points.push( new THREE.Vector3(-10, 0, 0) );
points.push( new THREE.Vector3(0, 10, 0) );
points.push( new THREE.Vector3(10, 0, 0) );

const line_geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( line_geometry, line_material );
scene.add( line );

// Change position of Camera
camera.position.set(0, 0, 50);
camera.lookAt(0,0,0)

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    wireframe.rotation.x += 0.01;
    wireframe.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );