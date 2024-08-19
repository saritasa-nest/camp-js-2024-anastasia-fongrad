import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from './components/Loader';

import { RootRouter } from './routes/RootRouter';
import { store } from './store';
import { Header } from './components/Header';

import styles from './App.module.css';

/** The main app component. */
export const App: FC = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Suspense fallback={<Loader/>}>
					<div className={styles.main}>
						<Header/>
						<RootRouter />
					</div>
				</Suspense>
			</div>
		</BrowserRouter>
	</Provider>
);
