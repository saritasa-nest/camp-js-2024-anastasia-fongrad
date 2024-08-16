import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './components/Loader';

import { RootRouter } from './routes/RootRouter';
import { store } from './store';

/** The main app component. */
export const App: FC = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<RootRouter />
			</Suspense>
		</BrowserRouter>
	</Provider>
);
