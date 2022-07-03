import React, { useState } from 'react';
import { styled, TableSortLabel, TableSortLabelProps } from '@mui/material';

const StyledLabelCell = styled(TableSortLabel)(() => ({
	['&.MuiTableSortLabel-root']: {
		color: 'white',
		['.MuiTableSortLabel-icon']: {
			opacity: 1,
		},
	},
}));

export enum ESortType {
	Asc = 'asc',
	Desc = 'desc',
}

interface IProps {
	field?: string;
	sortType?: ESortType;
	onChangeDirection: (field: string, direction: ESortType) => void;
}

export const SortButtonForTable: React.FC<IProps & TableSortLabelProps> = ({
	field = '',
	sortType = ESortType.Asc,
	children,
	onChangeDirection,
	...rest
}) => {
	const [sort, setSort] = useState<ESortType>(sortType);

	const handleChangeDirection = () => {
		const currentDirection = sort === ESortType.Asc ? ESortType.Desc : ESortType.Asc;
		setSort(currentDirection);
		onChangeDirection(field, currentDirection);
	};
	return (
		<StyledLabelCell direction={sort} onClick={handleChangeDirection} {...rest}>
			{children}
		</StyledLabelCell>
	);
};
