import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from 'react-query';
import axios from 'axios';

export const BasicTable = () => {
	const { status, data, error, isFetching } = useQuery<unknown[]>(['user'], () =>
		axios.get('/user').then((res) => res.data),
	);
	console.log(data, 'data');

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Surname</TableCell>
						<TableCell align="right">Birthday</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data &&
						data.map((row: any, index: number) => (
							<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.surname}</TableCell>
								<TableCell align="right">{row.birthday}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
