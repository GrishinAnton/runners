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
import { User } from '../../../features/user/user.entity';
import { EOrder, SortButtonForTable } from '../../ui/SortButtonForTable/SortButtonForTable';

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

interface IProps {
	data: User[];
}

const getGender = (gender: string) => (gender === 'male' ? 'М' : 'Ж');

export const MainTable: React.FC<IProps> = ({ data }) => {
	const handleChangeDirection = (direction: EOrder) => console.log(direction);

	return (
		<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
				<TableRow>
					<StyledTableCell>
						<SortButtonForTable onChangeDirection={handleChangeDirection}>Имя</SortButtonForTable>
					</StyledTableCell>

					<StyledTableCell>Фамилия</StyledTableCell>
					<StyledTableCell>День рождения</StyledTableCell>
					<StyledTableCell align="center">Пол</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{data &&
					data.map((row, index: number) => (
						<StyledTableRow key={index}>
							<StyledTableCell>{row.name}</StyledTableCell>
							<StyledTableCell>{row.surname}</StyledTableCell>
							<StyledTableCell>{format(new Date(row.birthday), 'dd.MM.yy')}</StyledTableCell>
							<StyledTableCell align="center">{getGender(row.gender)}</StyledTableCell>
						</StyledTableRow>
					))}
			</TableBody>
		</Table>
	);
};
