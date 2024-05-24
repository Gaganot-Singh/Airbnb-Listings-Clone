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
          <h3 className="mb-4 mt-4">{name}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Row>  
            <Col md={6} className='p-1'>
              <img
                onError={(event) => {
                  event.target.onerror = null;
                  event.target.src = "https://placehold.co/600x450?text=Photo+Not+Available";
                }}
                className="h-[30rem] w-[45rem] rounded"
                src={images.picture_url}
                alt="Listing Main Image"
              />
            </Col>
            <Col md={6}>
          
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <Row key={`row-${rowIndex}`} className='g-2 pt-1'>
                {Array.from({ length: 2 }).map((_, colIndex) => (
                  <Col md={6} className="mb-2" key={`col-${rowIndex * 2 + colIndex}`}>
                    <img
                      onError={(event) => {
                        event.target.onerror = null;
                        event.target.src = "https://placehold.co/800x600?text=Photo+Not+Available";
                      }}
                      src='https://placehold.co/800x600?text=Photo+Not+Available'
                      className="img-fluid w-100 rounded"
                      alt={`Listing Image ${rowIndex * 2 + colIndex + 1}`}
                    />
                  </Col>
                ))}
              </Row>
            ))}
            </Col>
          </Row>
        </Col>
      </Row>

        <Row>
        <Col md={7}>

        </Col>
        <Col md={4} className='m-4'>
          <Card className="mb-4">
            <Card.Body>
              <Card.Text className="font-weight-bold">
                <h4>${price.toFixed(2)} CAD <span className="text-muted text-lg">night</span></h4>
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
