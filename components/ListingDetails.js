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
    property_type,
    address,
    accommodates,
    bedrooms,
    bathrooms,
    host,
    last_scraped,
    summary,
    description,
    space,
    security_deposit,
    cleaning_fee
  } = props.listing;

  const taxes= 0.13 * price;
  let total= 0;
  total = price + taxes + (security_deposit || 0) + (cleaning_fee || 0);
  const overallRating = review_scores.review_scores_rating;
  let dateString = last_scraped;
  let date = new Date(dateString);
  let year = date.getFullYear();

  let today = new Date();
  let currentYear = today.getFullYear();
  let yearsDifference = currentYear - year;

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
        <Col md={8}>
            <h4 className="mt-3">{property_type} in {address.street}</h4>
            <p className='m-0'>{accommodates} guests · {bedrooms} bed · {bathrooms} bath </p>
            <p className='font-bold m-0'> ★ {overallRating} · ({number_of_reviews}) reviews</p>


            <hr className='w-[48rem]'/>
            <div className="bg-white rounded-lg flex items-center space-x-6 max-w-sm">
            <div className="flex-shrink-0">
              <img src={host.host_picture_url} alt="Scott & Breanna" className="rounded-full w-12 h-12 mt-2" />
            </div>
            <div className="flex-1 min-w-0 mt-2 mb-2">
              <p className="text-lg font-bold text-gray-900 truncate m-0">Hosted by {host.host_name}</p>
                <span className="text-sm text-gray-600">Superhost ・ {yearsDifference} years hosting</span>
            </div>
          </div>
          <hr className='w-[48rem] '/>
          {summary
          ?
          (<p className='w-[48rem] text-justify'> {summary} {space} </p>)
          :
          (<p className='w-[48rem] text-justify'> {description} {space} </p>)
          }
        </Col>







        <Col md={4} className='mt-3'>
          <Card className="mb-4 shadow-md">
            <Card.Body>
              <Card.Text className="font-weight-bold ">
                <h4>${price.toFixed(2)} CAD <span className="text-muted text-lg">night</span></h4>
                <p className='underline text-muted m-0 inline-block flex justify-between m-1'> Price: <span className='text-right inline-block float-right'> ${price.toFixed(2)} CAD </span> </p>
                {cleaning_fee && (<p className='underline text-muted m-0 inline-block flex justify-between m-1'> Cleaning Fee: <span className='text-right inline-block float-right'> ${cleaning_fee.toFixed(2)} CAD </span> </p>) }
                {security_deposit &&  (<p className='underline text-muted m-0 inline-block flex justify-between m-1'> Airbnb service fee: <span className='text-right inline-block float-right'> ${security_deposit} CAD </span> </p>)}
                <p className='underline text-muted m-0 inline-block flex justify-between m-1'> Taxes: <span className='text-right inline-block float-right'> ${taxes.toFixed(2)} CAD </span> </p>
              </Card.Text>
              <hr/>
              <p className='font-bold inline-block flex justify-between m-1'> Total: <span className='text-right inline-block float-right'> ${total.toFixed(2)} CAD </span>  </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
