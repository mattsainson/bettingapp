import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Transactions from '../../components/Transactions/Transactions'
import API from '../../utils/API';
import axios from 'axios'
import UserContext from '../../utils/UserContext';



// class Profile extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: '',
//             email: '',
//             balance: ''
//         }
//     }

//     componentDidMount () {
//         const token = sessionStorage.user
//         const decoded = JSON.stringify(token)
        
//         this.setState({
//             name: token.name,
//             email: token.email,
//             balance: token.balance
//         })
//     }

//     render () {
//         return (
//             <>
//             <div className="container">
//                 <div className="jumbotron mt-5">
//                     <div className="col-sm-8 mx-auto">
//                         <h1 className="text-center">PROFILE</h1>
//                     </div>
//                     <table className="table col-md-6 mx-auto">
//                         <tbody>
//                             <tr>
//                                 <td>First Name</td>
//                                 <td>{this.state.name}</td>
//                             </tr>
//                             <tr>
//                                 <td>Email</td>
//                                 <td>{this.state.email}</td>
//                             </tr>
//                             <tr>
//                                 <td>Balance</td>
//                                 <td>{this.state.balance}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <Transactions />
//             </>
//         )
//     }
// }

// export default Profile



class Profile extends React.Component {
    static contextType = UserContext;
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        email:'',
        password:'',
        balance:''
      };
       
    }
    componentDidMount(){
      this.getProfile();
    }
    updateProfile(){
       
    }
 
    
 getProfile = () => {
    const { email, password, name, balance } = this.state;
    API.getprofile({ email, password, name, balance })
      .then(function(res) {
        if(res){
            console.log(res)
            this.setState({name:res.data.name});
            this.setState({email:res.data.email});
            this.setState({password:res.data.password});  
          }
      })
      .catch(err => console.log(err))
  }
    
     
    render() {
        const { user } = this.context;
      return (
        <div className="container">
          <div className="row">  
          <div class="col">
            </div>
            <div class="col">
            
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <input value={user.name} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input value={user.email} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input value={user.balance} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input value={user.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
                </div>
                
                <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
              </form>
              </div>
              <div class="col">
            </div>
          </div>
        </div>
      )
    }
}

export default Profile
