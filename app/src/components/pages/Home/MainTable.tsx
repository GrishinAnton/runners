import React, { useState } from 'react';
import {
	Table,
	TableHead,
	TableRow,
	TableBody,
	styled,
	TableCell,
	tableCellClasses,
	Box,
} from '@mui/material';
import { format } from 'date-fns';
import { ESortType, SortButtonForTable } from '../../ui/SortButtonForTable/SortButtonForTable';
import { IUser, IUserSort } from '../../../features/user/user.interface';
import axios from 'axios';
import { useQuery } from 'react-query';
import { UserSort } from '../../../features/user/sort.entity';
import { CompetitionStatistic } from '../../layouts/CompetitionStatistic/CompetitionStatistic';
import { ICompetitionStatistic } from '../../../features/statistic/statistic.interface';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const sortEntity = new UserSort(ESortType.Asc);
console.log(sortEntity);

const getGender = (gender: string) => (gender === 'male' ? 'М' : 'Ж');

interface IProp {
	competitionId: number | undefined;
	searchValue?: string;
}

export const MainTable: React.FC<IProp> = ({ competitionId, searchValue = '' }) => {
	const [sort, setSort] = useState<IUserSort>(sortEntity);

	const { data: userData } = useQuery<IUser[]>(['user', searchValue], async () => {
		const { data } = await axios.get('/users', { params: { searchValue } });
		return data;
	});

	const { data: statisticData } = useQuery<ICompetitionStatistic>(
		['statistic', competitionId],
		async () => {
			const { data } = await axios.get(`/statistic/competition/${competitionId}`);
			return data;
		},
		{
			enabled: !!competitionId,
		},
	);

	const handleChangeDirection = (field: string, direction: ESortType) => {
		console.log(direction);
	};

	if (!statisticData) return null;

	return (
		<Box sx={{ display: 'flex' }}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{/* <StyledTableCell>
							<SortButtonForTable field="name" onChangeDirection={handleChangeDirection}>
								Участник
							</SortButtonForTable>
						</StyledTableCell> */}
						<StyledTableCell align="left">Участник</StyledTableCell>
						<StyledTableCell align="center">Дата рождения</StyledTableCell>
						<StyledTableCell align="center">Пол</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{userData &&
						userData.map((row, index: number) => (
							<StyledTableRow key={index}>
								<StyledTableCell>{`${row.surname} ${row.name}`}</StyledTableCell>
								<StyledTableCell align="center">
									{format(new Date(row.birthday), 'dd.MM.yy')}
								</StyledTableCell>
								<StyledTableCell align="center">{getGender(row.gender)}</StyledTableCell>
							</StyledTableRow>
						))}
				</TableBody>
			</Table>
			<Box sx={{ minWidth: 200, borderRadius: 1 }}>
				<Box sx={{ backgroundColor: 'rgb(231, 235, 240)', borderRadius: 1 }}>
					<CompetitionStatistic statistic={statisticData} />
				</Box>
			</Box>
		</Box>
	);
};
