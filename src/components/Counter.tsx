import { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
	const [count, setCount] = useState(0)
	
	const increase = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<h1 className={classes.green}>{count}</h1>
			<button className={classes.button} onClick={increase}>Increase</button>
		</div>
	)
}

export default Counter
