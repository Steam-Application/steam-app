import React from 'react';
import { Grid, Avatar, Button, Stack, Divider } from '@mui/material';
import { PercentCircle } from '../util';
import { timestampToDate } from '../../util/conveters';
import { OverflowText, Text } from '../util/index';

const GameInfo = ({ info, percent }) => {
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
          <Grid item xs={5} borderRight={2} sx={{ pr: '0.5rem' }}>
            <Avatar
              variant='square'
              src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${info.game.appid}/header.jpg`}
              sx={{ width: '100%', height: 'auto', boxShadow: 5, mb: '5rem'}}
            />

            <PercentCircle title='Achievements' percent={percent || 0} size={200} />
            
          </Grid>
          
          {/* Title + View In Store */}
          <Grid container xs={7} borderleft={2} sx={{ pl: '0.5rem' }}>
            <Grid xs={8.5} sx={{ height: '25%' }}>
              <Text variant='h4' lines={2}>
                {info.game.name}
              </Text>
            </Grid>
            <Grid xs={3.5} align='right' sx={{ pr: 2 }}>
              <Button color='secondary' variant='contained' onClick={onViewStorePageClick}> View Store Page </Button>
            </Grid>

            {/* News Articles */}
            <Text variant='h5' sx={{ pl: '1rem', textDecoration: 'underline' }}> News </Text>
            <Grid sx={{ p: 2, pt: 0, width: '100%', height: '75%'}}>
              <Stack spacing={1.5}>
                {info.news.map((news) => (
                  <>
                    <Grid container>
                      <Grid xs={10}>
                        <OverflowText variant='h6' sx={{ width: '90%' }}>
                          {news.title}
                        </OverflowText>
                        <Text variant='subtitle1'>
                          {timestampToDate(news.date)}
                        </Text>
                      </Grid>
                      <Grid xs={2}>
                        <Button variant='contained' onClick={() => onViewArticleClick(news.url)}>
                          View Article
                        </Button>
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