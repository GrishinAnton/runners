import { TableCell, tableCellClasses, TableRow, styled } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export const StyledTablStageRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
	'&:nth-of-type(1)': {
		backgroundColor: '#ffc400',
	},
	'&:nth-of-type(2)': {
		backgroundColor: 'silver',
	},
	'&:nth-of-type(3)': {
		backgroundColor: '#CD7F32',
	},
}));
