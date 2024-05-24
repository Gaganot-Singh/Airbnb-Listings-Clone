import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Row, Col, Pagination, Container } from 'react-bootstrap';
import ListingCard from '@/components/ListingCard';
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://airbnb-listings-api.onrender.com/api/listings?page=${page}&perPage=25`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  };

  const next = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const cardCount = 25;

  return (
    <>
      {data ? (
        <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-20 mr-20 mt-4 mb-4">
          {pageData.map(listing => (
            <div key={listing._id}>
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center'>
          <Pagination>
            <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" onClick={previous}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              aria-hidden="true" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
            </svg>     
          </button>
          <div className='w-10 h-10 text-white  bg-black border rounded-full text-center align-text-bottom m-1'> 
          <p className='m-1.5'> {page} </p> 
          </div>
          <button
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" onClick={next}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              aria-hidden="true" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </button>
          </Pagination>
          </div>
        </>
      ) : ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4">
      {Array.from({ length: cardCount }).map((_, index) => (
        <Card className="m-4" style={{ width: '18rem' }} key={index}>
          <Placeholder as={Card.Img} variant="top" animation="wave" style={{ height: '200px', backgroundColor: '#e0e0e0' }} />
          <Card.Body>
            <Placeholder as={Card.Title} animation="wave">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Subtitle} className="mb-2 text-muted" animation="wave">
              <Placeholder xs={4} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="wave">
              <Placeholder xs={7} />
              <Placeholder xs={4} />
              <Placeholder xs={4} />
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} className="font-weight-bold" animation="wave">
              <Placeholder xs={5} />
            </Placeholder>
          </Card.Body>
        </Card>
      ))}
    </div>
      )}
    </>
  );
}
