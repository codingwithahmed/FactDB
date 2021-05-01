import React from 'react';
import './Dashboard.css'
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
  }

  
  componentDidMount() {
    axios.get(`/api/admin/finduser`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

 

  render() {
    return (
      <table>
        {this.state.persons.length}
         <tr>
           <th>Email</th>
           <th>User</th>
           <th>Id</th>
         </tr>
        { this.state.persons.map(person => <tr >
          <td>{person.email}</td>
          <td>{person.username}</td>
          <td>{person._id}</td>
          </tr>)}

      </table>
    )
  }
}