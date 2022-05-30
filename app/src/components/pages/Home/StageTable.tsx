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

const getAge = (date: string): number =>
	Number(format(new Date(), 'yyyy')) - Number(format(new Date(date), 'yyyy'));

interface IProps {
	data: User[];
}

export const StageTable: React.FC<IProps> = ({ data }) => (
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
			{data.map((row, index: number) => (
				<StyledTableRow key={index}>
					<StyledTableCell>{`${row.surname} ${row.name}`}</StyledTableCell>
					<StyledTableCell align="right">{row.distance[0].time}</StyledTableCell>
					<StyledTableCell align="right">{row.distance[0].temp}</StyledTableCell>
					<StyledTableCell align="right">{getAge(row.birthday)}</StyledTableCell>
				</StyledTableRow>
			))}
		</TableBody>
	</Table>
);
