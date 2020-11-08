import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyle = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
`;

export default function BeersPage({ data }) {
  return (
    <>
      <SEO title={`Beers! We have ${data.beers.nodes.length} in stock`} />
      <h2 className="center">{`We have ${data.beers.nodes.length} beers Available, Dine in Only!`}</h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer, index) => {
          const rating = Math.round(beer.rating.average);
          return (
            <SingleBeerStyle key={index}>
              <img
                height="80"
                src="https://www.heineken.com/media-us/p0bazdia/heineken-00-bottle.png?quality=85"
                alt={beer.name}
              />
              <h3>{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5`}>
                {`⭐️`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐️`.repeat(5 - rating)}
                </span>
                <span>({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyle>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
