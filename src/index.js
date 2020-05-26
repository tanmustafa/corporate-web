import React from 'react';
import ReactDOM from 'react-dom'


 export default class RootApp extends React.Component{


    render(){

        return (
            <div>
                <h1>Hello world!!</h1>
            </div> 

        )
    }

 } 
 ReactDOM.render(<RootApp/>, document.getElementById('root'));