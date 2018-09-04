import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {LOGIN_SUCCESS , LOGIN_FAILED , LOGIN_PENDING} from '../../state-managers/login-manager/reducer'
import  Loading from '../loading/Loading'
const mapStateToProps = state => { //set props here 
    return {
        ...state
    };
}
const mapDispatchToProps = disaptch => { // set action here
    return {
        onSubmit: (data) => {
            disaptch({
                type: LOGIN_PENDING,
                data: data
            })
            setTimeout(()=>{
                axios.post(`http://demo0713757.mockable.io/login`)
                .then(res => { 
                    disaptch({
                        type: LOGIN_SUCCESS,
                        data: data
                    })
                }).catch(res => { 
                    disaptch({
                        type: LOGIN_FAILED,
                        data: data
                    })
                })
            },10000) 
        }
    };
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(' in handleClick')
        const { onSubmit } = this.props
        onSubmit({
            username: this.state.username,
            password: this.state.password
        });
    }
    render() {

        return (
            <div className="login">
                <input type="text" placeholder="Enter your Username"
                    onChange={(event) => this.setState({ username: event.target.value })} />
                <br />
                <input type="password" placeholder="Enter your password"
                    onChange={(event) => this.setState({ password: event.target.value })} />
                <br />
                <input type="file" placeholder="Enter your password"
                    onChange={(event) => this.setState({file:event.target.files[0]})} />
                <br />
                
                {this.props.login.loading ? null : <input type="button" value="Submit" onClick={this.handleClick} />}
                <Loading loading={this.props.login.loading || this.props.file.loading }></Loading>
                {this.props.login.loading && <div>Login in process</div>}
                {this.props.login.success && <div>Login is successful</div>}
                {this.props.login.error && <div>Login is error</div>}
                {this.props.file.error && <div>File processing error</div>}
                {this.props.file.success && <div>File processing Done</div>}
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);