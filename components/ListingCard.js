import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function ListingCard(props) {

  const {
    name,
    price,
    summary,
    property_type,
    beds,
    review_scores,
    number_of_reviews,
    images,
    address
  } = props.listing;

  // Assuming you want to display the overall rating
  const overallRating = review_scores.review_scores_rating;

  return (
    <>
    <Link href={`/listing/${props.listing._id}`} passHref legacyBehavior>
    <Card className="mb-4">
      <Card.Img onError={(event) => {
              event.target.onerror = null;
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }} variant="top" src={images.picture_url} className='h-18'/>
            </Card>
            </Link>
      <Card.Body>
        <p className='font-bold'> {property_type} in {address.suburb} </p>
        <Card.Subtitle className="text-muted"> {name}</Card.Subtitle>
        <Card.Text>
          {beds} beds · {overallRating} ★ ({number_of_reviews} reviews)
        </Card.Text>
        <Card.Text className="font-weight-bold">${price} CAD / night</Card.Text>
      </Card.Body>
    
    
    </>
  );
}
