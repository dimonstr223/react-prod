import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({path, element}) => (
					<Route key={path} path={path} element={(
						<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
					)} />
				))}
				<Route path='/' element={<MainPage/>}/>
				<Route path='/about' element={<AboutPage/>}/>
			</Routes>
		</Suspense>
	)
}

export default AppRouter
