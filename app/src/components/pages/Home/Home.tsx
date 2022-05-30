import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from 'react-query';
import axios from 'axios';
import { User } from '../../../features/user/user.entity';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { MainTable } from './MainTable';
import { StageTable } from './StageTable';

export const BasicTable = () => {
	const [stage, setStage] = React.useState('main');

	const { data } = useQuery<User[]>(['user'], async () => {
		const { data } = await axios.get('/users');
		return data;
	});

	const handleChange = (event: SelectChangeEvent) => {
		setStage(event.target.value as string);
	};

	if (!data) return null;

	return (
		<>
			<Box sx={{ padding: 4 }}>
				<Typography sx={{ padding: 2 }} align="center">
					Кубок школы "Бегом по жизни" по бегу на 1500м
				</Typography>
				<Box sx={{ padding: 4, maxWidth: 200 }}>
					<FormControl fullWidth>
						<Select
							placeholder="Выберите этап"
							labelId="stage"
							value={stage}
							onChange={handleChange}
						>
							<MenuItem value={'main'}>Главная</MenuItem>
							<MenuItem value={'8'}>Этап 8</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Typography sx={{ mb: 1 }}>
					{stage === 'main' ? 'Все участники соревнований' : 'Участники 8 этапа'}
				</Typography>
				<TableContainer>
					{stage === 'main' ? <MainTable data={data} /> : <StageTable data={data} />}
				</TableContainer>
			</Box>
		</>
	);
};
