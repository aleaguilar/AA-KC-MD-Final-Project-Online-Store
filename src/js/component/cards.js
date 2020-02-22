import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

export const Cards = () => (
	<>
		<div>
			<h1 className="text-center pb-4">Bestselling Products</h1>
			<CardDeck className="row">
				<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
					/>
					<Card.Body>
						<Card.Text>Best selling item #1</Card.Text>
					</Card.Body>
				</Card>
				<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
					/>
					<Card.Body>
						<Card.Text>Best selling item #2</Card.Text>
					</Card.Body>
				</Card>
				<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
					/>
					<Card.Body>
						<Card.Text>Best selling item #3</Card.Text>
					</Card.Body>
				</Card>
				<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
					/>
					<Card.Body>
						<Card.Text>Best selling item #4</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
			<Button className="bestselling-button" variant="success">
				More Bestsellers
			</Button>
		</div>

		<div>
			<h1 className="text-center pb-4">Featured Products</h1>
			<CardDeck>
				<Card>
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKkwXmdEWiDHhy-ASGNmT3Uv7skadgN3qdb3GRfwJ4Khvbh0o"
					/>
					<Card.Body>
						<Card.Text>Featured item #1</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKkwXmdEWiDHhy-ASGNmT3Uv7skadgN3qdb3GRfwJ4Khvbh0o"
					/>
					<Card.Body>
						<Card.Text>Featured item #2</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKkwXmdEWiDHhy-ASGNmT3Uv7skadgN3qdb3GRfwJ4Khvbh0o"
					/>
					<Card.Body>
						<Card.Text>Featured item #3</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKkwXmdEWiDHhy-ASGNmT3Uv7skadgN3qdb3GRfwJ4Khvbh0o"
					/>
					<Card.Body>
						<Card.Text>Featured item #4</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	</>
);
