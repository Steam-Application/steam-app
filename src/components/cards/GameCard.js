import React from 'react';
import { Card, CardActionArea, CardMedia, Box } from '@mui/material';
import { OverflowText, Text } from '../util';
import { minToHourMin } from '../../util/conveters';

const GameCard = ({ game }) => {
  const onCardClick = () => {
    setTimeout(() => {
      window.open(`https://store.steampowered.com/app/${game.appid}`);
    }, 200);
  }

  return (
    <Card onClick={onCardClick} sx={{ height: '17.5%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          variant='square'
          image={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
          sx={{ maxHeight: '70%' }}
        />
        <Box>
          <OverflowText variant='subtitle1' sx={{ pl: '1rem', pr: '0.5rem' }}>
            {game.name}
          </OverflowText>
          <Text variant='subtitle1'>
            {minToHourMin(game.playtime_forever)}
          </Text>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default GameCard;