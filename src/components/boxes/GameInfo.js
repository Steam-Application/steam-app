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
          {/* Avatar & Achievement Percentage*/}
          <Grid item xs={5} borderRight={2} sx={{ pr: '0.5rem' }}>
            <Avatar
              variant='square'
              src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${info.game.appid}/header.jpg`}
              sx={{ width: '100%', height: 'auto', maxHeight: '40%', boxShadow: 5, mb: '2rem' }}
            />
              
            <PercentCircle title='Achievements' percent={parseInt(percent, 10) || 0} size={200} />
          </Grid>
          
          {/* Title + View In Store */}
          <Grid item xs={7} borderleft={2} sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', pl: '1rem' }}>
            <Grid item xs={8} sx={{ height: '20%' }}>
              <Text variant='h4' lines={2}>
                {info.game.name}
              </Text>
            </Grid>
            <Grid item xs={4} align='right' sx={{ pr: 2 }}>
              <Button color='secondary' variant='contained' onClick={onViewStorePageClick}> View Store Page </Button>
            </Grid>

            {/* News Articles */}
            <Text variant='h5' sx={{ pl: '1rem', textDecoration: 'underline' }}> News </Text>
            <Grid item sx={{ p: 2, pt: 0, width: '100%', height: '75%'}}>
              <Stack spacing={1.5}>
                {info.news.map((news) => (
                  <React.Fragment key={news.gid}>
                    <Grid container>
                      <Grid item xs={10}>
                        <OverflowText variant='h6' sx={{ width: '90%' }}>
                          {news.title}
                        </OverflowText>
                        <Text variant='subtitle1'>
                          {timestampToDate(news.date)}
                        </Text>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant='contained' onClick={() => onViewArticleClick(news.url)}>
                          View Article
                        </Button>
                      </Grid>
                    </Grid>
                    <Divider />
                  </React.Fragment>
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