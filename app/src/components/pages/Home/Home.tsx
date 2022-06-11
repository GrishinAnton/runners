import { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from 'react-query';
import axios from 'axios';
import {
	Box,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from '@mui/material';
import { MainTable } from './MainTable';
import { StageTable } from './StageTable';
import { ICompetition } from '../../../features/competition/competition.interface';
import { useDebouncedCallback } from 'use-debounce';
import { DEFAULT_DEBOUNCE_TIME } from '../../../features/config';

export const Home = () => {
	const [stage, setStage] = useState('main');
	const [searchValue, setSearchValue] = useState('');

	const debounced = useDebouncedCallback((value: string) => {
		setSearchValue(value);
	}, DEFAULT_DEBOUNCE_TIME);

	const { data: competitonData } = useQuery<ICompetition>(['competition'], async () => {
		const { data } = await axios.get('/competition');
		return data[0];
	});

	const handleChange = (event: SelectChangeEvent) => {
		setStage(event.target.value as string);
	};

	if (!competitonData) {
		return (
			<Typography sx={{ padding: 2 }} align="center">
				Бесплатный сервер не такой быстрый как бегуны БПЖ... Все работает, подождите 5-10 секунд, я
				разгоняюсь... Потом буду бегать быстро.
			</Typography>
		);
	}

	return (
		<Box sx={{ padding: 4 }}>
			<Typography sx={{ padding: 2 }} align="center">
				{competitonData.name}
			</Typography>
			<Box sx={{ padding: 4, maxWidth: 400 }}>
				<Box sx={{ display: 'flex', minWidth: 200 }}>
					<FormControl fullWidth sx={{ width: 200, mr: 1 }}>
						<Select
							placeholder="Выберите этап"
							labelId="stage"
							value={stage}
							onChange={handleChange}
						>
							<MenuItem value={'main'}>Главная</MenuItem>
							{competitonData.stages &&
								competitonData.stages.map((stage) => (
									<MenuItem key={stage.id} value={stage.id}>
										{stage.name}
									</MenuItem>
								))}
						</Select>
					</FormControl>
					{stage === 'main' ? (
						<TextField
							label="Поиск по фамилии"
							variant="outlined"
							onChange={(e) => debounced(e.target.value)}
						/>
					) : null}
				</Box>
			</Box>

			<TableContainer sx={{ borderRadius: 1 }}>
				{stage === 'main' ? (
					<MainTable competitionId={competitonData?.id} searchValue={searchValue} />
				) : (
					<StageTable stageId={stage} />
				)}
			</TableContainer>
		</Box>
	);
};
