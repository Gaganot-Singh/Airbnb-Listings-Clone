import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function ListingCard(props) {

  const {
    name,
    price,
    bed_type,
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
    <div className='m-1'>
      <img onError={(event) => {
              event.target.onerror = null;
              event.target.src = "https://placehold.co/990x945?text=Photo+Not+Available";
            }} variant="top" src={images.picture_url} className='h-64 w-80 rounded-lg mb-2'/>
          
      <p className="font-bold inline-block flex justify-between text-sm m-0">
        {property_type} in {address.market}
        <span className="inline-block float-right">
        ★ {overallRating} ({number_of_reviews})
        </span>
      </p>
      <p className="text-muted m-0"> {name}</p>
          {beds} {bed_type}
        <Card.Text className="font-weight-bold">${price} CAD / night</Card.Text>
      </div>
      </Link>
    
    
    </>
  );
}
