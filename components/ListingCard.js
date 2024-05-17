import React from 'react';
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
    address,
    host
  } = props.listing;


  const overallRating = review_scores.review_scores_rating;

  return (
    <>
    <Link href={`/listing/${props.listing._id}`} passHref legacyBehavior>
    <div className='m-1'>
      {host.host_is_superhost ?  
      <div class="relative ...">
        <img onError={(event) => {
          event.target.onerror = null;
          event.target.src = "https://placehold.co/1000x900?text=Photo+Not+Available";
        }} variant="top" src={images.picture_url} className='h-64 w-80 rounded-lg mb-2'/>
        <div class="absolute top-3 left-3 ...">
        <div className="top-1 left-1 bg-white bg-opacity-90 text-black rounded-full px-2 py-2 text-sm font-semibold shadow-md">
          Superhost
        </div>
        </div>
      </div>
      : 
      <img onError={(event) => {
              event.target.onerror = null;
              event.target.src = "https://placehold.co/990x945?text=Photo+Not+Available";
            }} variant="top" src={images.picture_url} className='h-64 w-80 rounded-lg mb-2'/>
      }
      <p className="font-bold inline-block flex justify-between text-sm m-0">
        {property_type} in {address.market}
        <span className="inline-block float-right">
        ★ {overallRating} ({number_of_reviews})
        </span>
      </p>
      <p className="text-muted m-0"> {name}</p>
      <p className="text-muted m-0"> {beds} {bed_type} </p>
      <p className="font-bold"> ${price} CAD 
      <span className="text-muted font-normal"> night</span>
      </p>
      </div>
      </Link>
    
    
    </>
  );
}
