import React, { useState } from 'react';
import {
	Table,
	TableHead,
	TableRow,
	TableBody,
	styled,
	TableCell,
	tableCellClasses,
} from '@mui/material';
import { format } from 'date-fns';
import { ESortType, SortButtonForTable } from '../../ui/SortButtonForTable/SortButtonForTable';
import { IUser, IUserSort } from '../../../features/user/user.interface';
import axios from 'axios';
import { useQuery } from 'react-query';
import { UserSort } from '../../../features/user/sort.entity';

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

export const MainTable: React.FC = () => {
	const [sort, setSort] = useState<IUserSort>(sortEntity);

	const { data: userData } = useQuery<IUser[]>(['user'], async () => {
		const { data } = await axios.get('/users', { params: sort });
		return data;
	});
	const handleChangeDirection = (field: string, direction: ESortType) => {
		console.log(direction);
	};

	return (
		<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
				<TableRow>
					<StyledTableCell>
						<SortButtonForTable field="name" onChangeDirection={handleChangeDirection}>
							Участник
						</SortButtonForTable>
					</StyledTableCell>
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
	);
};
