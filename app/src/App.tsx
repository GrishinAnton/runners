import React from 'react';
import { BasicTable } from './components/pages/Home/Home';
import Box from '@mui/material/Box';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Box>
				<BasicTable />
			</Box>
		</QueryClientProvider>
	);
};

export default App;
