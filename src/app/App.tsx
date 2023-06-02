import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { classNames } from 'shared'
import { useTheme } from 'app/providers/ThemeProvider'

import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/about' element={<AboutPage/>}/>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
