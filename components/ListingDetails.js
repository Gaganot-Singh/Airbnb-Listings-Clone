import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ListingDetails(props) {
  const {
    name,
    neighborhood_overview,
    price,
    room_type,
    bed_type,
    beds,
    review_scores,
    number_of_reviews,
    images,
  } = props.listing;

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="mb-4">{name}</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Row>
            <Col md={12} className="mb-3">
              <img
                onError={(event) => {
                  event.target.onerror = null;
                  event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
                }}
                className="img-fluid w-100"
                src={images.picture_url}
                alt="Listing Main Image"
              />
            </Col>
            {images.additional_pictures && images.additional_pictures.map((url, index) => (
              <Col md={6} className="mb-3" key={index}>
                <img
                  onError={(event) => {
                    event.target.onerror = null;
                    event.target.src = "https://placehold.co/300x200?text=Photo+Not+Available";
                  }}
                  className="img-fluid w-100"
                  src={url}
                  alt={`Listing Image ${index + 1}`}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Text className="font-weight-bold">
                ${price.toFixed(2)} CAD <span>night</span>
              </Card.Text>
              <Card.Text>
                <strong>Check-in:</strong> 06-11-2024 <br />
                <strong>Guests:</strong> 1 guest
              </Card.Text>
            </Card.Body>
          </Card>
          {neighborhood_overview && <p>{neighborhood_overview}</p>}
          <p>
            <strong>Room:</strong> {room_type} <br />
            <strong>Bed:</strong> {bed_type} ({beds}) <br />
            <strong>Rating:</strong> {review_scores.review_scores_rating}/100 ({number_of_reviews} Reviews)
          </p>
          <p>
            <strong>Hosted by:</strong> Ingrid <br />
            <strong>Superhost:</strong> 2 years hosting
          </p>
        </Col>
      </Row>
    </Container>
  );
}
