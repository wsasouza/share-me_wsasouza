import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';


const Feed = () => {

  const [loading, setLoading] = useState(false);  
  const [pins, setPins] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if(categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        });
    } else {
       client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        });
      }
  }, [categoryId]); 

  if(loading) return <Spinner message="Estamos adicionando novas ideias ao seu feed!"/>

  return (
    <>
     <h1>Eu sou a Feed</h1>
     <p>Wartinho</p>
    </>
  )
}

export default Feed;