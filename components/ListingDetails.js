import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ListingDetails(props){

  const {
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
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className="img-fluid w-100"
            src={images.picture_url}
            alt="Listing Image"
          />
          <br />
          <br />
        </Col>
        <Col lg>
          
          {neighborhood_overview && <p>{neighborhood_overview}</p>}
          <br />
          <strong>Price:</strong> ${price.toFixed(2)} <br />
          <strong>Room:</strong> {room_type} <br />
          <strong>Bed:</strong> {bed_type} ({beds}) <br />
          <br />
          <strong>Rating:</strong> {review_scores.review_scores_rating}/100 ({number_of_reviews} Reviews) <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};


