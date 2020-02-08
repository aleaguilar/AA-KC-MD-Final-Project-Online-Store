import React from "react";
import "../../styles/home.scss";
import rigoImage from "../../img/rigo-baby.jpg";
import Carousel from "react-bootstrap/Carousel";

export const Secondpart = () => (
	<Carousel>
		<Carousel.Item>
			<img className="d-block w-100" src={rigoImage} alt="First slide" />
			<Carousel.Caption>
				<h3 className="Carousel">First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img className="d-block w-100" src={rigoImage} alt="Third slide" />

			<Carousel.Caption>
				<h3 className="Carousel">Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img className="d-block w-100" src={rigoImage} alt="Third slide" />

			<Carousel.Caption>
				<h3 className="Carousel">Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
);
