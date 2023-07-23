import React, { useEffect} from "react";
import {setupViewer} from "./util.js";
import {useNavigate} from "react-router-dom";

export default function HomeHero() {

	useEffect(() => {
		setupViewer()
	},[])

	const navigate = useNavigate();

	const handleClick = (path) => {
	  navigate(path);
	};


  return (
    <>
    <div className="HomeHero_container">
		<section className="section first">
			<div className="section--one--container">
				<h1>Workshop</h1>
				<p>Variable speed for ultimate fingertip control for all drilling applications. Reverse brush system for full torque and power in forward and reverse, lock-on button for continuous use.</p>
				<button onClick={() => handleClick('/workshop')}>Explore</button>
				
			</div>
		</section>
		
		<section className="section second">
			<div className="section--two--container">
				<h1>Projects</h1>
				<p>Ergonomic reversible hammer drill design with optimal grip positions, light weight and insulated shock proof plastic body, easy to change bits</p>
				<button onClick={() => handleClick('/project')}>Explore</button>
			</div>
			<div className="custom--bg"></div>
		</section>
		
		<section className="section third">
			<div className="section--third--container">
				<h2>Blogs</h2>
				<p>Supports wood and metal drilling. Metal drill bits are not part of the included components with the product. Metal drill bits can be procured by the customer and can be used for drilling into metal surfaces</p>
				<button onClick={() => handleClick('/blog')}>Explore</button>				
			</div>
		</section>
	</div>
	
	<div id="webgi-canvas-container">
		<canvas id="webgi-canvas"></canvas>
	</div>
    </>
  );
}
