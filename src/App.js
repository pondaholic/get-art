import React from 'react';
import './App.css';
import { RetrieveArt } from './artButton.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Let's View Some Art.</p>
			</header>
			<RetrieveArt />
		</div>
	);
}

export default App;
