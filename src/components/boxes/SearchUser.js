import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Box, Grid, Tooltip, Paper, Card, CardActionArea, Avatar } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { SearchBox, Text, useNotification } from '../util';
import { searchUser } from '../../api/profile';
import { ROUTE_PROFILE } from '../../config/routes';

const SearchUser = () => {
	const history = useHistory();
	const [sendNotificaiton] = useNotification();
  const [user, setUser] = useState(null);

  const search = async (searchTerm) => {
    if (searchTerm) {
			try {
      	setUser(await searchUser(searchTerm));
			} catch(error) {
				sendNotificaiton({ message: 'Failed to search user', secondary: 'Server may be down. Try again later.', variant: 'error' })
				setUser(null);
			}
    } else {
			setUser(null);
		}
  }

  return (
    <>
			<Box mb='4rem'>
				<Grid container>
					<Text color='white' variant='subtitle1'> Search User </Text>
					<Tooltip arrow title='Input Profile URL or SteamId' placement='right'>
						<HelpIcon fontSize='string' sx={{ ml: '0.25rem', color: 'gray' }} />
					</Tooltip>
				</Grid>
				<SearchBox search={search} />
			</Box>
      {user && (
				<>
					{user === 'No User' ? (
						<Box sx={{ height: '4rem' }}>
							<Paper sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Text variant='h5'> No User Exists </Text>
							</Paper>
						</Box>
					) : (
						<Card
							onClick={() => {
								setTimeout(() => {
									history.push(`${ROUTE_PROFILE}/${user.steamid}`);
								}, 200);
							}}
							sx={{ height: '4rem' }}
						>
							<CardActionArea sx={{ p: '0.25rem', height: '4rem' }}>
								<Grid container sx={{ height: '100%' }}>
									<Grid item xs={11} sx={{ display: 'flex', height: '100%' }}>
										<Paper sx={{ height: '100%' }}>
											<Avatar variant='square' src={user.avatarfull} sx={{ width: 'auto', height: '100%' }}/>
										</Paper>
										<Text variant='h5' mt={1.5} ml={1}> {user.personaname} </Text>
									</Grid>
									<Grid item xs={1} align='center' mt={2}>
										{user.communityvisibilitystate === 3 ? (
											<Tooltip title='Visible'>
												<CheckCircleIcon sx={{ color: 'green' }} />
											</Tooltip>
										) : (
											<Tooltip title='Profile is not Public'>
												<CancelIcon sx={{ color: 'red' }} />
											</Tooltip>
										)}
									</Grid>
								</Grid>
							</CardActionArea>
						</Card>
					)}
				</>
      )}
    </>
  );
};

export default SearchUser;