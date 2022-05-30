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

export enum EOrder {
	Asc = 'asc',
	Desc = 'desc',
}

interface IProps {
	onChangeDirection: (direction: EOrder) => void;
}

export const SortButtonForTable: React.FC<IProps & TableSortLabelProps> = ({
	children,
	onChangeDirection,
	...rest
}) => {
	const [order, setOrder] = useState<EOrder>(EOrder.Asc);

	const handleChangeDirection = () => {
		const currentDirection = order === EOrder.Asc ? EOrder.Desc : EOrder.Asc;
		setOrder(currentDirection);
		onChangeDirection(currentDirection);
	};
	return (
		<StyledLabelCell direction={order} onClick={handleChangeDirection} {...rest}>
			{children}
		</StyledLabelCell>
	);
};
