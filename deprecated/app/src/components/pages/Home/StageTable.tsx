import { Table, TableHead, TableRow, TableBody, Box } from '@mui/material';
import axios from 'axios';
import { useQuery } from 'react-query';
import { getAge, getTempFromSec, getTimeFromMilliseconds } from '../../../common/date';
import {
	EGender,
	IDistanceByStageId,
	IDistanceGender,
} from '../../../features/distance/distance.interfasce';
import { ERoutes } from '../../../routes/config';
import { NavLink } from 'react-router-dom';
import { StyledTableCell, StyledTablStageRow } from '../../layouts/Table/Layout/Table';

interface IProps {
	stageId: string;
}

export const StageTable: React.FC<IProps> = ({ stageId }) => {
	const { data: distanceData } = useQuery<IDistanceByStageId[], Error, IDistanceGender>(
		[stageId],
		async () => {
			const { data } = await axios.get('/distance', {
				params: {
					stageId,
				},
			});
			return data;
		},
		{
			select: (data) => {
				const genderData: IDistanceGender = {
					[EGender.MALE]: [],
					[EGender.FEMALE]: [],
				};

				data.forEach((distance) => {
					genderData[distance.user.gender].push(distance);
				});

				return genderData;
			},
		},
	);

	if (!distanceData) return null;

	return (
		<Box sx={{ display: 'flex', height: 950 }}>
			<Table sx={{ minWidth: 535 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Участник</StyledTableCell>
						<StyledTableCell align="right">Время</StyledTableCell>
						<StyledTableCell align="right">Темп</StyledTableCell>
						<StyledTableCell align="right">Возраст</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{distanceData[EGender.MALE].map((row, index: number) => (
						<StyledTablStageRow key={index}>
							<StyledTableCell>
								<NavLink
									to={`${ERoutes.USER}/${row.user.id}`}
								>{`${row.user.surname} ${row.user.name}`}</NavLink>
							</StyledTableCell>
							<StyledTableCell align="right">{getTimeFromMilliseconds(row.time)}</StyledTableCell>
							<StyledTableCell align="right">{getTempFromSec(row.temp)}</StyledTableCell>
							<StyledTableCell align="right">{getAge(row.user.birthday)}</StyledTableCell>
						</StyledTablStageRow>
					))}
				</TableBody>
			</Table>
			<Table sx={{ minWidth: 535 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Участник</StyledTableCell>
						<StyledTableCell align="right">Время</StyledTableCell>
						<StyledTableCell align="right">Темп</StyledTableCell>
						<StyledTableCell align="right">Возраст</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{distanceData[EGender.FEMALE].map((row, index: number) => (
						<StyledTablStageRow key={index}>
							<StyledTableCell>
								<NavLink
									to={`${ERoutes.USER}/${row.user.id}`}
								>{`${row.user.surname} ${row.user.name}`}</NavLink>
							</StyledTableCell>
							<StyledTableCell align="right">{getTimeFromMilliseconds(row.time)}</StyledTableCell>
							<StyledTableCell align="right">{getTempFromSec(row.temp)}</StyledTableCell>
							<StyledTableCell align="right">{getAge(row.user.birthday)}</StyledTableCell>
						</StyledTablStageRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
};
