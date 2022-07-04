import { Box, Button, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import {
	getAge,
	getBirthdayFormat,
	getTempFromSec,
	getTimeFromMilliseconds,
} from '../../../common/date';
import { IUser, IUserStatistic } from '@runners/shared/interfaces';
import { StyledTableCell, StyledTableRow } from '../../layouts/Table/Layout/Table';

export const User = () => {
	const params = useParams();
	const navigate = useNavigate();

	const { data: user } = useQuery<IUser>(['user', params['id']], async () => {
		const { data } = await axios.get(`/user/${params['id']}`);
		return data;
	});

	const { data: userStatistic } = useQuery<IUserStatistic[]>(['statistic', params['id']], async () => {
		const { data } = await axios.get(`/statistic/user/${params['id']}`);
		return data;
	});

	if (!user || !userStatistic) {
		return null;
	}

	return (
		<Box sx={{ padding: 3 }}>
			<Button sx={{ marginBottom: 3 }} variant="outlined" onClick={() => navigate(-1)}>
				Назад
			</Button>
			<Typography variant="h4">{`${user.surname} ${user.name}`}</Typography>
			<Typography variant="subtitle1">
				День рождения: {getBirthdayFormat(user.birthday)} | {getAge(user.birthday)}
			</Typography>
			<Typography variant="h6" sx={{ paddingTop: 2 }}>
				Результаты:
			</Typography>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<StyledTableCell align="left">Этап</StyledTableCell>
						<StyledTableCell align="center">Время</StyledTableCell>
						<StyledTableCell align="center">Темп</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{userStatistic.map((row, index: number) => (
						<StyledTableRow key={index}>
							<StyledTableCell>{row.stageName}</StyledTableCell>
							<StyledTableCell align="center">
								{getTimeFromMilliseconds(row.distanceTime)}
							</StyledTableCell>
							<StyledTableCell align="center">{getTempFromSec(row.distanceTemp)}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
};
