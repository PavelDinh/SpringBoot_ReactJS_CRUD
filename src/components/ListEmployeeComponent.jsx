import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        })
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                    </div>
                    <table className="table table-striped table-bordered">
                        
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employees =>
                                    <tr key={employees.id}>
                                        <td>{employees.firstName}</td>
                                        <td>{employees.lastName}</td>
                                        <td>{employees.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;