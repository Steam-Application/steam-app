import React from 'react';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';

const GameCard = ({ game }) => {
  const onCardClick = () => {
    setTimeout(() => {
      window.open(`https://store.steampowered.com/app/${game.appid}`);
    }, 200);
  }

  return (
    <Card onClick={onCardClick} sx={{ height: '17.5%', maxHeight: '17.5%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          variant='square'
          image={`https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`}
          height='60%'
        />
        <Typography variant='subtitle1' sx={{ height: '40%', maxHeight: '40%' }}>
          {game.name}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default GameCard;