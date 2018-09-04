import React, { Component } from 'react'; 
import './Loading.css';
class Loading extends Component { 
    render() { 
        return (
            <div className="Loading">
                {this.props.loading && <div className='spinner'>
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>}
            </div>
        );
    }
}
export default Loading;