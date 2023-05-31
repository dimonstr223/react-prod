import { Suspense, useContext, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import Counter from './components/Counter'

import { Theme, ThemeContext } from './theme/ThemeContext'

import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync/>}/>
					<Route path='/about' element={<AboutPageAsync/>}/>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
