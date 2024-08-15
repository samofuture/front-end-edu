import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGL2Available() ) {

} else {

	const warning = WebGL.getWebGL2ErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}

import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

// Setup Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Setup Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create Cube
const cubeSize = 7.5
const geometry = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );
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

const twoDimP = document.createElement( 'p' );
twoDimP.textContent = 'This is a 2D Label';

const twoDimDiv = document.createElement( 'div' );
twoDimDiv.appendChild(twoDimP)

const twoDimLabel = new CSS2DObject( twoDimDiv );
twoDimLabel.position.set( 1.5 + cubeSize, 0, 0 );

scene.add( twoDimLabel );


// CSS2DRenderer

const twoDimRenderer = new CSS2DRenderer();
twoDimRenderer.setSize(window.innerWidth, window.innerHeight);
twoDimRenderer.domElement.style.position = 'absolute';
twoDimRenderer.domElement.style.top = '0px';
twoDimRenderer.domElement.style.color = 'ff00ff';
document.body.appendChild( twoDimRenderer.domElement );

// Change position of Camera
camera.position.set(0, 0, 50);
camera.lookAt(0,0,0)

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    wireframe.rotation.x += 0.01;
    wireframe.rotation.y += 0.01;

    var x = 

    renderer.render( scene, camera );
    twoDimRenderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );