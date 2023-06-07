import { classNames } from 'shared'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<AppRouter/>
		</div>
	)
}

export default App