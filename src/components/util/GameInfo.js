import React from 'react';
import { Grid, Avatar, Typography, Button, Stack, Divider } from '@mui/material';
import { timestampToDate } from '../../util/conveters';

const GameInfo = ({ info }) => {
  const onViewStorePageClick = () => {
    setTimeout(() => {
      window.open(`https://store.steampowered.com/app/${info.game.appid}/`);
    }, 200);
  }

  const onViewArticleClick = (url) => {
    setTimeout(() => {
      window.open(url);
    }, 200);
  }
  
  return (
    <Grid container sx={{ height: '97.5%', p: 2, boxShadow: 3 }}>
      {info && (
        <>
          {/* Avatar */}
          <Grid item xs={5}>
              <Avatar
                variant='square'
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${info.game.appid}/header.jpg`}
                sx={{ width: '100%', height: 'auto', boxShadow: 5 }}
              />
          </Grid>
          
          {/* Title + View In Store */}
          <Grid container xs={7} sx={{ pl: '1rem' }}>
            <Grid xs={8.5} sx={{ height: '25%' }}>
              <Typography variant='h4' sx={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
                {info.game.name}
              </Typography>
            </Grid>
            <Grid xs={3.5} align='right' sx={{ pr: 2 }}>
              <Button color='secondary' variant='contained' onClick={onViewStorePageClick}> View Store Page </Button>
            </Grid>

            {/* News Articles */}
            <Typography variant='h5' sx={{ pl: '1rem', textDecoration: 'underline' }}> News </Typography>
            <Grid sx={{ p: 2, pt: 0, width: '100%', height: '75%'}}>
              <Stack spacing={1.5}>
                {info.news.map((news) => (
                  <>
                    <Grid container>
                      <Grid xs={10}>
                        <Typography variant='h6' sx={{ width: '90%', display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                          {news.title}
                        </Typography>
                        <Typography variant='subtitle1'> {timestampToDate(news.date)} </Typography>
                      </Grid>
                      <Grid xs={2}>
                        <Button variant='contained' onClick={() => onViewArticleClick(news.url)}> View Article </Button>
                      </Grid>
                    </Grid>
                    <Divider />
                  </>
                ))}
              </Stack>
            </Grid>

          </Grid>
        </>
      )}
    </Grid>
  );
};

export default GameInfo;