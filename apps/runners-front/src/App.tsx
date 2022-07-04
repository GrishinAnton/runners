import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from '@mui/material';
import { routes } from './app/routes/routes';
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
