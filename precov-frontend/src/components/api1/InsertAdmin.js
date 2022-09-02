import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default class InsertAdmin extends Component {
    constructor(props){
        super(props);
        this.onChangeNama = this.onChangeNama.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
    
    
        this.state = {
          nama: '',
          username: '',
          password: '',
          email: '',
          region: '',
          phone: ''
        }
      }
  
      onChangeNama(e) {
        this.setState({
          nama: e.target.value
        });
      }
  
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
  
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
  
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
  
      onChangeRegion(e) {
        this.setState({
          region: e.target.value
        });
      }
  
      onChangePhone(e) {
        this.setState({
          phone: e.target.value
        });
      }
  
      onSumbit(e) {
        e.preventDefault();
  
        const obj = {
          nama : this.state.nama,
          username : this.state.username,
          password : this.state.password,
          email : this.state.password,
          region : this.state.region,
          phone: this.state.phone
        };
        
        axios.post('http://localhost/apicrud/insertadmin.php', obj)
        .then(res=> console.log(res.data));
        console.log(obj)

        this.setState({
            nama: '',
            username: '',
            password: '',
            email: '',
            region: '',
            phone: ''
          })
      }
    
    render() {
        return (
            <div style={{marginTop:10}}>
                <h3>Add New User</h3>
                <from onSumbit={this.onSumbit}>
                    <div className='form-group'>
                        <label>Nama</label>
                        <input type="text" className="form-control"
                         value={this.state.nama}
                         onChange={this.onChangeNama}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type="text" className="form-control"
                         value={this.state.username}
                         onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="text" className="form-control"
                         value={this.state.password}
                         onChange={this.onChangePassword}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" className="form-control"
                         value={this.state.email}
                         onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Region</label>
                        <input type="text" className="form-control"
                         value={this.state.region}
                         onChange={this.onChangeRegion}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input type="text" className="form-control"
                         value={this.state.phone}
                         onChange={this.onChangePhone}
                        />
                    </div>
                    
                    <div className='form-group'>
                        <input type="submit" value="Register Admin"
                        className="btn btn-primary"
                        onClick={this.onSumbit}
                        />
                    </div>
                </from>
            </div>
        )
    }
}
