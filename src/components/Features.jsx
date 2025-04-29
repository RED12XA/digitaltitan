import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const features = [
  {
    title: 'Paris, France',
    description: 'Experience the City of Lights with romantic streets, art museums, and world-famous cuisine.',
    image: 'https://wildmorocco.com/storage/2024/12/wild-morocco-blog-images-01-400x250.jpg',
  },
  {
    title: 'Safari Adventure, Kenya',
    description: 'Witness the majestic wildlife of Africa on a guided safari through Kenya’s national parks.',
    image: 'https://liveworkplaytravel.com/wp-content/uploads/2022/05/SoloTravellerFemale-400x250.jpg',
  },
  {
    title: 'Tokyo, Japan',
    description: 'Dive into a futuristic city with ancient temples, neon streets, and exquisite sushi.',
    image: 'https://fairfieldcountylook.com/wp-content/uploads/2024/09/iStock-467903903-400x250.jpg',
  },
  {
    title: 'Bali, Indonesia',
    description: 'Relax on tropical beaches, explore temples, and rejuvenate with yoga retreats in paradise.',
    image: 'https://wildmorocco.com/storage/2024/12/wild-morocco-blog-images-01-400x250.jpg',
  },
  {
    title: 'Iceland Adventure',
    description: 'Explore glaciers, volcanoes, and the magical Northern Lights in a land of fire and ice.',
    image: 'https://liveworkplaytravel.com/wp-content/uploads/2022/05/SoloTravellerFemale-400x250.jpg',
  },
  {
    title: 'New York City, USA',
    description: 'Take in Broadway shows, iconic landmarks, and a skyline that never sleeps.',
    image: 'https://fairfieldcountylook.com/wp-content/uploads/2024/09/iStock-467903903-400x250.jpg',
  },
  {
    title: 'Santorini, Greece',
    description: 'Stroll whitewashed villages, stunning sunsets, and cliffside views of the Aegean Sea.',
    image: 'https://wildmorocco.com/storage/2024/12/wild-morocco-blog-images-01-400x250.jpg',
  },
  {
    title: 'Amazon Rainforest, Brazil',
    description: 'Unplug and reconnect with nature in the world’s largest tropical rainforest.',
    image: 'https://liveworkplaytravel.com/wp-content/uploads/2022/05/SoloTravellerFemale-400x250.jpg',
  },
  {
    title: 'Swiss Alps, Switzerland',
    description: 'Ski the snowy peaks, hike pristine trails, and take in breathtaking alpine vistas.',
    image: 'https://fairfieldcountylook.com/wp-content/uploads/2024/09/iStock-467903903-400x250.jpg',
  },
];


const TravelLandingContent = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Your Journey Begins Here</h2>
        <p className="text-muted">
          Plan your next adventure with us — find your dream destination and book effortlessly.
        </p>
      </div>

      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={feature.image} alt={feature.title} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TravelLandingContent;

