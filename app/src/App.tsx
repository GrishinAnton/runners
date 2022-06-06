import React from 'react';
import { BasicTable } from './components/pages/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from '@mui/material';
import { Tetst } from './components/pages/Test/Test';

const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Container>
				<BasicTable />
			</Container>
		</QueryClientProvider>
	);
};

export default App;
