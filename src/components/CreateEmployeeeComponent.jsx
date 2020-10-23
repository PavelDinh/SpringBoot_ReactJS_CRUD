import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeeComponent extends Component {
    constructor(prop) {
        super(prop)

        this.state = {
            firstName:'',
            lastName:'',
            emailId:''
        }
        this.onChange = this.onChange.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    
    onChange = e => {
        const {name,value} = e.target;
        this.setState({ [name]:value})
    }
    
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Adress</label>
                                        <input placeholder="Email" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.onChange}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CreateEmployeeeComponent;