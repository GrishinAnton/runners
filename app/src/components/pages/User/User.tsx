import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getAge, getBirthdayFormat } from '../../../common/date';
import { IUser } from '../../../features/user/user.interface';

export const User = () => {
	const params = useParams();
	console.log(params);

	const { data: user } = useQuery<IUser>(['user'], async () => {
		const { data } = await axios.get(`/user/${params.id}`);
		return data;
	});

	if (!user) {
		return null;
	}

	return (
		<Box sx={{ padding: 3 }}>
			<Typography variant="h4">{`${user.surname} ${user.name}`}</Typography>
			<Typography variant="subtitle1">
				День рождения: {getBirthdayFormat(user.birthday)} | {getAge(user.birthday)}
			</Typography>
		</Box>
	);
};
