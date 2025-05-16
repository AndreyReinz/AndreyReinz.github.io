// Глобальная переменная
window.threeJSScene = null;

function init3DModel() {
    const container = document.getElementById('modelViewer');
    if (!container) return;
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(
        document.body.classList.contains('dark-mode') ? 0x1a1a1a : 0xf0f0f0
    );
    
    window.threeJSScene = scene;
    
    const camera = new THREE.PerspectiveCamera(
        75, 
        container.clientWidth / container.clientHeight, 
        0.1, 
        1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.prepend(renderer.domElement);
    
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const loader = new THREE.GLTFLoader();
    const modelPath = 'assets/models/saturn.glb';
    
    loader.load(
        modelPath,
        function (gltf) {
            const model = gltf.scene;
            scene.add(model);
            
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.x -= center.x;
            model.position.y -= center.y;
            model.position.z -= center.z;
            
            const size = box.getSize(new THREE.Vector3()).length();
            const cameraDist = size / (2 * Math.atan(Math.PI * camera.fov / 360));
            camera.position.z = cameraDist * 1.5;
            
            let autoRotate = true;
            
            function animate() {
                requestAnimationFrame(animate);
                
                if (autoRotate) {
                    model.rotation.y += 0.005;
                }
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.screenSpacePanning = false;
            controls.maxPolarAngle = Math.PI;
            controls.minDistance = size * 0.5;
            controls.maxDistance = size * 2;
            
            const rotateBtn = document.getElementById('rotateBtn');
            if (rotateBtn) {
                rotateBtn.addEventListener('click', function() {
                    autoRotate = !autoRotate;
                    this.classList.toggle('active');
                });
            }
            
            const zoomInBtn = document.getElementById('zoomInBtn');
            const zoomOutBtn = document.getElementById('zoomOutBtn');
            
            if (zoomInBtn) {
                zoomInBtn.addEventListener('click', function() {
                    camera.fov = Math.max(10, camera.fov - 5);
                    camera.updateProjectionMatrix();
                });
            }
            
            if (zoomOutBtn) {
                zoomOutBtn.addEventListener('click', function() {
                    camera.fov = Math.min(100, camera.fov + 5);
                    camera.updateProjectionMatrix();
                });
            }
            
            window.addEventListener('resize', function() {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        },
        undefined,
        function (error) {
            console.error('Error loading 3D model:', error);
            
            const errorMsg = document.createElement('div');
            errorMsg.style.color = 'red';
            errorMsg.style.textAlign = 'center';
            errorMsg.style.padding = '20px';
            errorMsg.textContent = 'Не удалось загрузить 3D модель. Пожалуйста, попробуйте позже.';
            container.appendChild(errorMsg);
        }
    );
}