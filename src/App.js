import React, { Component } from 'react';
import AddUser from './AddUser';
import Users from './Users';
import './App.css';
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className='row'>
					<div className='col-md-3'>
						<AddUser />
					</div>
					<div className='col-md-9'>
						<Users />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
