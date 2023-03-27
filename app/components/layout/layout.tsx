import { FC } from 'react'
import { FunctionComponent, PropsWithChildren } from 'react';

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

type Props = {
	children: React.ReactNode
 }
 

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
