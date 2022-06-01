import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from 'react-query';
import axios from 'axios';
import { User } from '../../../features/user/user.entity';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { MainTable } from './MainTable';
import { StageTable } from './StageTable';
import { ICompetition } from '../../../features/competition/competition.interface';

export const BasicTable = () => {
	const [stage, setStage] = React.useState('main');

	const { data: userData } = useQuery<User[]>(['user'], async () => {
		const { data } = await axios.get('/users');
		return data;
	});
	const { data: competitonData } = useQuery<ICompetition>(['competition'], async () => {
		const { data } = await axios.get('/competition');
		return data[0];
	});

	const handleChange = (event: SelectChangeEvent) => {
		setStage(event.target.value as string);
	};

	if (!userData || !competitonData) return null;

	return (
		<Box sx={{ padding: 4 }}>
			<Typography sx={{ padding: 2 }} align="center">
				{competitonData.name}
			</Typography>
			<Box sx={{ padding: 4, maxWidth: 200 }}>
				<FormControl fullWidth>
					<Select placeholder="Выберите этап" labelId="stage" value={stage} onChange={handleChange}>
						<MenuItem value={'main'}>Главная</MenuItem>
						{competitonData.stages &&
							competitonData.stages.map((stage) => (
								<MenuItem key={stage.id} value={stage.id}>
									{stage.name}
								</MenuItem>
							))}
					</Select>
				</FormControl>
			</Box>
			{/* <Typography sx={{ mb: 1 }}>
				{stage === 'main' ? 'Все участники соревнования' : `Участники ${stage}`}
			</Typography> */}
			<TableContainer>
				{stage === 'main' ? <MainTable data={userData} /> : <StageTable stageId={stage} />}
			</TableContainer>
		</Box>
	);
};
