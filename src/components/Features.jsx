import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const features = [
  {
    title: 'Paris, France',
    description: 'Experience the City of Lights with romantic streets, and world-famous cuisine.',
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



const ITEMS_PER_PAGE = 6;

const TravelLandingContent = () => {
  const [liked, setLiked] = useState(Array(features.length).fill(false));
  const [currentPage, setCurrentPage] = useState(1);

  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  const totalPages = Math.ceil(features.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = features.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Your Journey Begins Here</h2>
        <p className="text-muted">
          Discover the world’s most beautiful destinations — curated just for you.
        </p>
      </div>

      <Row>
        {currentItems.map((feature, index) => {
          const globalIndex = startIndex + index;
          return (
            <Col key={globalIndex} md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 position-relative">
                <Card.Img variant="top" src={feature.image} alt={feature.title} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    {feature.title}
                    <span
                      onClick={() => toggleLike(globalIndex)}
                      style={{ cursor: 'pointer', color: liked[globalIndex] ? 'red' : 'gray' }}
                      title={liked[globalIndex] ? 'Unlike' : 'Like'}
                    >
                      {liked[globalIndex] ? <FaHeart /> : <FaRegHeart />}
                    </span>
                  </Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx}
              active={idx + 1 === currentPage}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </Container>
  );
};

export default TravelLandingContent;

