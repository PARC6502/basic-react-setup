import React from 'react'
import ReactDOM from 'react-dom'


const Title = ({text}) => (<h1>{text} one</h1>);

ReactDOM.render(<Title text="Mega Title34" />, document.getElementById('app'))

module.hot.accept();
