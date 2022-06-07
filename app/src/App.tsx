import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from '@mui/material';
import { Tetst } from './components/pages/Test/Test';
import { routes } from './routes/routes';
import { useRoutes } from 'react-router-dom';

export const App = () => {
	const queryClient = new QueryClient();
	const element = useRoutes(routes);

	return (
		<QueryClientProvider client={queryClient}>
			<Container>{element}</Container>
		</QueryClientProvider>
	);
};
