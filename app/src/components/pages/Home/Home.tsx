import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { MainTable } from './MainTable';
import { StageTable } from './StageTable';
import { ICompetition } from '../../../features/competition/competition.interface';
import { IUser, IUserSort } from '../../../features/user/user.interface';
import { ESortType } from '../../ui/SortButtonForTable/SortButtonForTable';
import { UserSort } from '../../../features/user/sort.entity';

export const BasicTable = () => {
	const [stage, setStage] = useState('main');

	const { data: competitonData } = useQuery<ICompetition>(['competition'], async () => {
		const { data } = await axios.get('/competition');
		return data[0];
	});

	const handleChange = (event: SelectChangeEvent) => {
		setStage(event.target.value as string);
	};

	if (!competitonData) return null;

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
			<TableContainer>
				{stage === 'main' ? <MainTable /> : <StageTable stageId={stage} />}
			</TableContainer>
		</Box>
	);
};
