import React from 'react'
import Dashboard from './Userlist'
import {Route,Link} from 'react-router-dom'
import './Main.css'
import User from './User'
import Info from './Info'
import Complain from './Complain'
import EditUser from './EditUser'
import CreateUser from './CreateUser'
import Deleteuser from './DeleteUser'
import Post from './Post'
import EditPost from './EditPost'
import CreatePost from './CreatePost'
import DeletePost from './DeletePost'

export default function Main() {
    return (
        <div className="admin-main">

          <Route exact path='/admin/info'>
          <Info />
          </Route>



          <Route exact path='/admin/complain'>
          <Complain />
          </Route>

          
          <Route exact path='/admin/edituser'>
          <EditUser />
          </Route>
          <Route exact path='/admin/createuser'>
          <CreateUser />
          </Route>
          <Route exact path='/admin/deleteuser'>
          <Deleteuser />
          </Route>

  

          <Route exact path='/admin/findpost'>
          <Post />
          </Route>
          <Route exact path='/admin/editpost'>
          <EditPost />
          </Route>
          <Route exact path='/admin/createpost'>
          <CreatePost />
          </Route>
          <Route exact path='/admin/deletepost'>
          <DeletePost />
          </Route>


          <Route exact path='/admin/finduser'>
          <Dashboard /> 
       </Route>       

       <Route exact path='/admin'>
          <User />
          </Route>    
        </div>
    )
}
