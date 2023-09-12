import { useState } from 'react'
import { classNames } from 'shared'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

import cls from './Sidebar.module.scss'

interface SidebarProps {
 className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => setCollapsed(prev => !prev)

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed} , [className])}>
			<button data-testid='sidebar-toggle' onClick={onToggle}>toggle</button>

			<div className='switchers'>
				<ThemeSwitcher/>
				<LangSwitcher />
			</div>
		</div>
	)
}