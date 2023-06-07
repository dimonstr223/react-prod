import { classNames } from 'shared'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar,{} , [className])}>
			<ThemeSwitcher/>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
			</div>
		</div>
	)
}