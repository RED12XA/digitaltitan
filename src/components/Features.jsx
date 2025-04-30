import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

const TravelLandingContent = () => {
  const [features, setFeatures] = useState([]);
  const [liked, setLiked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/posts/")
      .then((res) => {
        setFeatures(res.data);
        setLiked(Array(res.data.length).fill(false)); // initialize likes once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

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
        <h2 className="custom-style-font-xd1">Your Next Adventure Starts Now</h2>
        <p className="text-muted custom-style-font-xd2">
          Explore the world’s most stunning destinations — curated just for you,
          because the journey matters as much as the destination.
        </p>
      </div>

      <Row>
        {currentItems.map((feature, index) => {
          const globalIndex = startIndex + index;
          return (
            <Col key={globalIndex} md={4} className="mb-4 custom-card-a">
              <Card className="h-100 shadow-sm border-0 position-relative">
                <Card.Img variant="top" src={feature.image} alt={feature.title} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    {feature.title}
                    <span
                      onClick={() => toggleLike(globalIndex)}
                      style={{
                        cursor: "pointer",
                        color: liked[globalIndex] ? "red" : "gray",
                      }}
                      title={liked[globalIndex] ? "Unlike" : "Like"}
                    >
                      {liked[globalIndex] ? <FaHeart /> : <FaRegHeart />}
                      <span id="count-likes"> {feature.nbLike}</span>
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
