import React from 'react';
import './Post.css'
import axios from 'axios';

export default class ComplainList extends React.Component {
  state = {
    persons: [],
  }

  
  componentDidMount() {
    axios.get(`/api/api/admin/info`)
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
           <th>Header</th>
           <th>Email</th>
           <th>Name</th>
           <th>Text</th>
         </tr>
        { this.state.persons.map(person => <tr >
          <td>{person.Headers}</td>
          <td>{person.Email}</td>
          <td>{person.Name}</td>
          <td>{person.Text}</td>
          </tr>)}

      </table>
    )
  }
}