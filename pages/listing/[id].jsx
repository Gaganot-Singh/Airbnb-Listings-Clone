import { useRouter, useEffect } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';

export default function Listing(){
  const router = useRouter();
  const { id } = router.query;

  const { data: listing, error, isLoading } = useSWR(id ? `https://airbnb-listings-api.onrender.com/api/listings/${id}` : null);

  if (isLoading) {
    return null; 
  }

  if (error || !listing) {
    return <Error statusCode={404} />; 
  }

  return (
    <>
      <ListingDetails listing={listing} />
    </>
  );
};

