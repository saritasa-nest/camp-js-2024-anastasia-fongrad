import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { RootRouter } from './routes/RootRouter';
import { store } from './store';

/** The main app component. */
export const App: FC = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Suspense fallback={<div>Brrr... here should be your loader component</div>}>
					<RootRouter />
				</Suspense>
			</div>
		</BrowserRouter>
	</Provider>
);
