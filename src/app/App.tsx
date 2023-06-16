import { classNames } from 'shared'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const Component = () => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<div>
			<button onClick={toggle}>Перевод</button>
			<div>{t('Тестовый перевод')}</div>
		</div>
	)
}

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback='translating..'>
				<Navbar/>
				<Component/>
				<div className='content-page'>
					<Sidebar/>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	)
}

export default App