import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    mobileAndTabletCheck,
    BloomPlugin,
    Vector3,
    GammaCorrectionPlugin,
    MeshBasicMaterial2,
    Color,
    AssetImporter,
  } from "webgi";
  import "./styles.css";
  
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Lenis from '@studio-freight/lenis';
  
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  
  lenis.stop();
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  gsap.registerPlugin(ScrollTrigger);
  
  export async function setupViewer() {
  
    const viewer = new ViewerApp({
      canvas: document.getElementById('webgi-canvas'),
      isAntialiased: true,
      useRgbm: false,
    });
  
    const isMobile = mobileAndTabletCheck();
    // console.log(isMobile)
  
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;
    // const exitButton = document.querySelector('.button--exit');
    // const customizerInterface = document.querySelector('.customizer--container');
  
    // WEBGI UPDATE
    let needsUpdate = true;
  
    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);
  
    // Loader
    const importer = manager.importer;
  
    importer.addEventListener("onProgress", (ev) => {
      const progressRatio = (ev.loaded / ev.total);
      // console.log(progressRatio)
      document.querySelector('.progress')?.setAttribute('style', `transform: scaleX(${progressRatio})`);
    });
  
    importer.addEventListener("onLoad", (ev) => {
      gsap.to('.loader', { x: '100%', duration: 0.8, ease: 'power4.inOut', delay: 1, onComplete: () => {
        document.body.style.overflowY = 'auto';
        lenis.start();
  
      } });
    });
  
  //   manager.scene.traverse((child) => {
  //     if ( child.type == 'SkinnedMesh' ) {
  //       child.frustumCulled = false;
  //     }
  // });
  
    viewer.renderer.refreshPipeline();
  
    // await manager.addFromPath("./assets/drill3.glb"); 
    await manager.addFromPath("./final.glb");
  
    const drillMaterial = manager.materials.findMaterialsByName('Drill_01')[0];
  
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true; // in case its set to false in the glb
  
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
  
    if (isMobile) {
      position.set(-3.5, -1.1, 5.5);
      target.set(-0.8, 1.55, -0.7);
      camera.setCameraOptions({ fov: 40 });
    }
  
    onUpdate();
  
    window.scrollTo(0, 0);
  
    function setupScrollanimation() {
  
      const tl = gsap.timeline();
  
      // FIRST SECTION
  
      tl
        .to(position, {
          x: isMobile ? -6.0 : 2.56,
          y: isMobile ? 5.5 : -2.26,
          z: isMobile ? -0.3 : -3.85,
          scrollTrigger: {
            trigger: ".second",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false
          }, onUpdate
        })
  
        .to(".section--one--container", {
          xPercent: '-150',
          opacity: 1,
          scrollTrigger: {
            trigger: ".second",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
            immediateRender: false,
          }
        })
        .to(target, {
          x: isMobile ? -1.1 : -1.37,
          y: isMobile ? 1.0 : 1.99,
          z: isMobile ? -0.1 : -0.37,
          scrollTrigger: {
            trigger: ".second",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          }
        })
  
        // LAST SECTION
  
        .to(position, {
          // x: -1.4,
          // y: 5.6,
          // z: 1.71,
          x: -4.4,
          y: -0.04,
          z: 3.29,
          scrollTrigger: {
            trigger: ".third",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          }, onUpdate
        })
  
        .to(target, {
          x: 1.5,
          y: -1.13,
          z: -0.4,
          scrollTrigger: {
            trigger: ".third",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          }
        });
    }
  
    setupScrollanimation();
  
    function onUpdate() {
      needsUpdate = true;
      // viewer.renderer.resetShadows()
      viewer.setDirty();
    }
  
    viewer.addEventListener('preFrame', () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
  }
  