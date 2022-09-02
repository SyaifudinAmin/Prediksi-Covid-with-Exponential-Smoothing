import axios from 'axios';
import React, { Component } from 'react'
import RecordList from './RecordList';
export default class ViewAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {admin: []};
        }

        componentDidMount(){
        axios.get('http://localhost/apicrud/listadmin.php')
            .then(response => {
            this.setState({ admin: response.data});
            })
            .catch(function(error){
            console.log(error);
            })
        }
        usersList(){
            return this.state.admin.map(function(object, i){
                return <RecordList obj={object} key={i} />;
            });
        }
    
    
    render() { 
        return (
            <div>
                <h3 align="center"> user list</h3>
                <table className='table table-striped' style={{marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Region</th>
                            <th>Phone</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
