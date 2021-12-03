import React from 'react';
import { Card, CardActionArea, CardMedia, Box, Typography, Tooltip } from '@mui/material';
import { minToHourMin } from '../../util/conveters';

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
        <Box sx={{ height: '40%', maxHeight: '40%' }}>
          <Tooltip title={game.name} placement='bottom' arrow>
            <Typography noWrap variant='subtitle1' sx={{ pl: '1rem', pr: '0.5rem' }}>
              {game.name}
            </Typography>
          </Tooltip>
          <Typography noWrap variant='subtitle1'>
            {minToHourMin(game.playtime_forever)}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default GameCard;