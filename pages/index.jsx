

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Row, Col, Pagination, Container } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import ListingCard from '@/components/ListingCard';
import PageHeader from '@/components/PageHeader';
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://web422-a1-qcm4.onrender.com/api/listings?page=${page}&perPage=25`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  const cardCount = 25;

  return (
    <>
      {data ? (
        <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4">
          {pageData.map(listing => (
            <div key={listing._id}>
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

  
          <Pagination>
            <Pagination.Prev onClick={previous} />
            <Pagination.Item> {page} </Pagination.Item>
            <Pagination.Next onClick={next} />
          </Pagination>
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
