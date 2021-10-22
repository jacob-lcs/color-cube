import React, { useEffect } from 'react';
import * as THREE from 'three';

// import { DeviceOrientationControls } from './utils/DeviceOrientationControls';
// import { TransformControls } from './utils/TransformControls';
// import { DragControls } from './utils/DragControls';
import { OrbitControls } from './utils/OrbitControls';

import './App.css';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

      const controls = new OrbitControls( camera, renderer.domElement );

			camera.position.z = 5

      controls.update();
			renderer.render( scene, camera );

      animate()

      function animate() {

        requestAnimationFrame( animate );
      
        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();
      
        renderer.render( scene, camera );
      
      }

  }, [])
  return (
    <div />
  );
}

export default App;
