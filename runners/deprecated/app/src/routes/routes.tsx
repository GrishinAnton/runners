import { Home } from '../components/pages/Home/Home';
import { User } from '../components/pages/User/User';

import { ERoutes } from './config';

export const routes = [
	{
		path: ERoutes.HOME,
		element: <Home />,
	},
	{
		path: ERoutes.USER_ID,
		element: <User />,
	},
];
