import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

export const Cards = () => (
	<>
		<div className="container">
			<div>
				<h1 className="text-center pb-4">Bestselling Products</h1>
				<CardDeck className="row">
					<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
						/>
						<Card.Body>
							<Card.Text>
								<b>Best selling item #1</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>300
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
						</Card.Body>
					</Card>
					<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
						/>
						<Card.Body>
							<Card.Text>
								<b>Best selling item #2</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>100
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
						</Card.Body>
					</Card>
					<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
						/>
						<Card.Body>
							<Card.Text>
								<b>Best selling item #3</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>500
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
						</Card.Body>
					</Card>
					<Card className="col-xl-3 col-lg-4 col-md-6 col-12">
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1fRDjhT0ZzxT8RkA5uC2Y3T7zrU_Tjm0Xf4Nt5y3XCD4pDaK"
						/>
						<Card.Body>
							<Card.Text>
								<b>Best selling item #4</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>700
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
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
							<Card.Text>
								<b>Futureed item #1</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>300
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKkwXmdEWiDHhy-ASGNmT3Uv7skadgN3qdb3GRfwJ4Khvbh0o"
						/>
						<Card.Body>
							<Card.Text>
								<b>Futureed item #2</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>30
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKkwXmdEWiDHhy-ASGNmT3Uv7skadgN3qdb3GRfwJ4Khvbh0o"
						/>
						<Card.Body>
							<Card.Text>
								<b>Futureed item #3</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>75
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKkwXmdEWiDHhy-ASGNmT3Uv7skadgN3qdb3GRfwJ4Khvbh0o"
						/>
						<Card.Body>
							<Card.Text>
								<b>Futureed item #4</b>
							</Card.Text>
							<Card.Text>
								<b>
									Price:<span>$</span>35
								</b>
							</Card.Text>
							<Button className="bestselling-button" variant="success">
								<b>Add To Cart</b>
							</Button>
						</Card.Body>
					</Card>
				</CardDeck>
			</div>
		</div>
	</>
);
