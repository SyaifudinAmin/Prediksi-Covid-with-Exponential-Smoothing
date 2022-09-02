import axios from "axios";
import React, {Component} from "react";
import { Link, Navigate } from 'react-router-dom';
class RecordList extends Component{
    
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }

    delete(){
        axios.get('http://localhost/apicrud/deleteadmin.php?id='+this.props.obj.id)
        .then(
            this.setState({redirect: true})
        )
        .catch(err => console.log(err))
    }
    
    
    render(){
        const { redirect } = this.state;

        if (redirect) {
            return <Navigate to ='/viewadmin'/>;
        }

        return(
            <tr>
                <td>
                    {this.props.obj.nama}
                </td>
                <td>
                    {this.props.obj.username}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.region}
                </td>
                <td>
                    {this.props.obj.no_hp}
                </td>
                <td>
                    <Link to={"/editadmin/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default RecordList;