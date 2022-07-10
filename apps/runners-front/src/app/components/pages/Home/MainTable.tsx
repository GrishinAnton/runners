import { useState } from 'react';
import { Table, TableHead, TableRow, TableBody, Box } from '@mui/material';
import { ESortType, SortButtonForTable } from '../../ui/SortButtonForTable/SortButtonForTable';
import { IUserSort } from '../../../features/user/user.interface';
import axios from 'axios';
import { useQuery } from 'react-query';
import { UserSort } from '../../../features/user/sort.entity';
import { CompetitionStatistic } from '../../layouts/CompetitionStatistic/CompetitionStatistic';
import { NavLink } from 'react-router-dom';
import { ERoutes } from '../../../routes/config';
import { getBirthdayFormat } from '@runners/shared/common';
import { StyledTableCell, StyledTableRow } from '../../layouts/Table/Layout/Table';
import { ICompetitionStatistic, IUser } from '@runners/shared/interfaces';

const sortEntity = new UserSort(ESortType.Asc);

const getGender = (gender: string) => (gender === 'male' ? 'М' : 'Ж');

interface IProp {
	competitionId: number | undefined;
	searchValue?: string;
}

export const MainTable: React.FC<IProp> = ({ competitionId, searchValue = '' }) => {
	const [sort, setSort] = useState<IUserSort>(sortEntity);

	const { data: userData } = useQuery<IUser[]>(['user', searchValue], async () => {
		const { data } = await axios.get('/user', { params: { searchValue } });
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

	if (!statisticData || !userData?.length) return null;

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
					{userData.map((row, index: number) => (
						<StyledTableRow key={index}>
							<StyledTableCell>
								<NavLink to={`${ERoutes.USER}/${row.id}`}>{`${row.surname} ${row.name}`}</NavLink>
							</StyledTableCell>
							<StyledTableCell align="center">{getBirthdayFormat(row.birthday)}</StyledTableCell>
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
