import {
	Table,
	TableHead,
	TableRow,
	TableBody,
	styled,
	TableCell,
	tableCellClasses,
} from '@mui/material';
import axios from 'axios';
import { useQuery } from 'react-query';
import { getAge } from '../../../common/date';
import { IDistanceByStageId } from '../../../features/distance/distance.interfasce';

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
	stageId: string;
}

export const StageTable: React.FC<IProps> = ({ stageId }) => {
	const { data: distanceData } = useQuery<IDistanceByStageId[]>([stageId], async () => {
		const { data } = await axios.get('/distance', {
			params: {
				stageId,
			},
		});
		return data;
	});

	if (!distanceData) return null;

	return (
		<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
				<TableRow>
					<StyledTableCell>Участник</StyledTableCell>
					<StyledTableCell align="right">Время</StyledTableCell>
					<StyledTableCell align="right">Темп</StyledTableCell>
					<StyledTableCell align="right">Возраст</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{distanceData.map((row, index: number) => (
					<StyledTableRow key={index}>
						<StyledTableCell>{`${row.user.surname} ${row.user.name}`}</StyledTableCell>
						<StyledTableCell align="right">{row.time}</StyledTableCell>
						<StyledTableCell align="right">{row.temp}</StyledTableCell>
						<StyledTableCell align="right">{getAge(row.user.birthday)}</StyledTableCell>
					</StyledTableRow>
				))}
			</TableBody>
		</Table>
	);
};
