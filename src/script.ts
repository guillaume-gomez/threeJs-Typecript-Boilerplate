import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00Afff });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);


// Sizes
const sizes = {
    width: 800,
    height: 600
}
// Axe Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
});

renderer.setSize(sizes.width, sizes.height);
//renderer.render(scene, camera);

/**
 * Animate
 */
gsap.to(mesh.rotation, { duration: 10, delay: 1, x: 2 });


function tick()
{
    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();
