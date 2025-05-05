import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Professional from "./pages/Professional";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app-container"> 
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

// scene.add(camera);

  
  // import * as THREE from "three";
  // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  // import tirza from "./assets/tirza.jpg";
  // import background from "./assets/pexels-free-nature-stock-1376766.jpg";
{/* <canvas id="bg">
<p>hello world</p>
</canvas> */}
// function setupScene() {
//   const scene = new THREE.Scene();
//   scene.background = new THREE.Color(0x222222);
//   return scene;
// }
// function setupCamera() {
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   camera.position.z = 50;
//   return camera;
// }
// function setupRenderer(canvas: HTMLCanvasElement) {
//   const renderer = new THREE.WebGLRenderer({
//     canvas,
//     antialias: true,
//   });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   return renderer;
// }
// // Lighting functions
// function setupLights(scene: THREE.Scene) {
//   const ambientLight = new THREE.AmbientLight(0x48acef, 5.0);
//   const pointLight = new THREE.PointLight(0xffffff);
//   pointLight.position.set(20, 20, 20);
  
//   scene.add(ambientLight, pointLight);
//   return { ambientLight, pointLight };
// }
// function setupHelpers(scene: THREE.Scene, pointLight: THREE.PointLight) {
//   const lightHelper = new THREE.PointLightHelper(pointLight);
//   const gridHelper = new THREE.GridHelper(200, 50);
//   scene.add(lightHelper, gridHelper);
// }

// // Object creation functions
// function createBox() {
//   const tirzaTexture = new THREE.TextureLoader().load(tirza);
//   const geometry = new THREE.BoxGeometry(5, 5, 5);
//   const material = new THREE.MeshBasicMaterial({ map: tirzaTexture });
//   const box = new THREE.Mesh(geometry, material);
//   return box;
// }

// function createStar(): THREE.Mesh {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({
//     color: 0xffffff
//   });
//   const star = new THREE.Mesh(geometry, material);
//   const [x, y, z] = Array.from({ length: 3 }, () => THREE.MathUtils.randFloatSpread(100));
//   star.position.set(x, y, z);
//   return star;
// }

// function createBackgroundPlane(): THREE.Mesh {
//   const geometry = new THREE.PlaneGeometry(2886, 4329);
//   const texture = new THREE.TextureLoader().load(background);
//   const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
//   const plane = new THREE.Mesh(geometry, material);
//   plane.position.z = -400; // Move it far behind your objects
//   return plane;
// }

// function moveCamera(camera: THREE.Camera) {
//   camera.position.z = 50;
// }

// export default function App() {
//   useEffect(() => {
//     const canvas = document.querySelector("#bg") as HTMLCanvasElement;
    
//     // Setup basic components
//     const [ scene, camera, renderer ] = [setupScene(), setupCamera(), setupRenderer(canvas)];
//     // Setup controls
//     const [controls, pointLight] = [new OrbitControls(camera, renderer.domElement), setupLights(scene).pointLight];
    
//     // Add helpers
//     setupHelpers(scene, pointLight);
    
//     // Create objects
//     const box = createBox();
//     const stars = Array.from(
//       { length: 200 }, 
//       () => createStar()
//     );
//     stars.forEach(star => {
//       scene.add(star);
//     });
//     scene.add(box);


//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.setSize(window.innerWidth, window.innerHeight);
      
//       // Animate box
//       box.rotation.x += 0.005;
//       box.rotation.y += 0.005;
//       box.rotation.z += 0.005;
      
//       controls.update();
//       renderer.render(scene, camera);
//     };
    
//     animate();
//   }, []);