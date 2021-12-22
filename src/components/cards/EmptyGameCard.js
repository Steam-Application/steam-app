import React from 'react';
import { Card, CardActionArea, Box } from '@mui/material';

export const getEmptyGameCards = (num) => {
  const EmptyGameCards = [];

  for (let i = 0; i < num; i++) EmptyGameCards.push(<EmptyGameCard key={`${i}-${num}`} />);

  return EmptyGameCards;
};

const EmptyGameCard = () => {
  return (
    <Card sx={{ opacity: '0.5', height: '17.5%', maxHeight: '17.5%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <Box bgcolor='#1e2020' sx={{ height: '60%' }} />
        <Box sx={{ height: '40%' }} />
      </CardActionArea>
    </Card>
  );
};

export default EmptyGameCard;