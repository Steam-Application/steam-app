import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Box, Grid, Typography, Tooltip, Paper, Card, CardActionArea, Avatar } from '@mui/material';
import SearchBox from '../util/SearchBox';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { searchUser } from '../../api/profile';
import { ROUTE_PROFILE } from '../../config/routes';

const SearchUser = () => {
	const history = useHistory();
  const [user, setUser] = useState(null);

	// Seaches User using URL / Id / ProfileName
  const search = async (searchTerm) => {
    if (searchTerm) {
      setUser(await searchUser(searchTerm));
    } else {
			setUser(null);
		}
  }

  return (
    <>
			{/* TODO: Implement this in searchbox */}
			<Box mb='4rem'>
				<Grid container>
					<Typography color='white' variant='subtitle1'> Search User </Typography>
					<Tooltip title='Input Profile URL or SteamId' placement='right'>
						<HelpIcon fontSize='string' sx={{ color: 'gray' }} />
					</Tooltip>
				</Grid>
				<SearchBox search={search} />
			</Box>
      {user && (
				<>
					{user === 'No User' ? (
						<Paper align='center' sx={{ height: '4rem', p: '0.5rem' }}>
							<Typography mt='1rem'> No Results </Typography>
						</Paper>
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
										<Typography variant='h5' mt={1.5} ml={1}> {user.personaname} </Typography>
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