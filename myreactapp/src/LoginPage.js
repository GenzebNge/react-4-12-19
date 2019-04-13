import React, { Component } from 'react';

class LoginPage extends Component{
    render(){

        return(
            <form>
             <label className="App-Header">
               User Name:
               <input type="text"  name="name" />
              </label>
              <label>
               Password:
               <input type="password" name="password" />
              </label>
             <input type="submit" value="Submit" />
             </form>
        );
    }
}
export default LoginPage;