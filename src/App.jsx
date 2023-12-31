import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/auth/LoginPage'


function App() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
