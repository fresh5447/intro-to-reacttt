import React from 'react';
import myData from './data/data';

// SMART / Container / has state
// DUMB / Presentational / return HTML

// this.setState({})

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Users List </h1>
      <ul>
        {
          props.usersData.map((user, ind) => {
            return <li key={ind}> {user.name} </li>
          })
        }
      </ul>
    </div>
  )
}

class Playground extends React.Component {

  state = {
    name: "Doug",
    counter: 0,
    users: null,
  }

  componentDidMount() {
    console.log("Mounting Component");
    this.fetchUsersFromServer()
  }

  fetchUsersFromServer() {
    // pretend it's an AJAX function
    const users = [
      { name: "Doug", id: 1, },
      { name: "Hannah", id: 2, },
      { name: "Jette", id: 3, },
      { name: "Joseph", id: 4, },
    ]
    setTimeout(() => {
      this.setState({ users: users })
    }, 3000);

  }

  increaseCount(){
    this.setState({ counter: this.state.counter += 1})
  }

  decreaseCount(){
    this.setState({ counter: this.state.counter -= 1})
  }

  render() {
    return (
      <div>
        <h1> My name is: {this.state.name} </h1>
        <h3> counter: {this.state.counter} </h3>
        <button onClick={
          () => this.increaseCount() }
        > Increase Counter </button>
        <button onClick={
          () => this.decreaseCount() }
        > Decrement Counter </button>
        {
          this.state.users
          ? <UsersList usersData={this.state.users} />
          : <h1> Users Being Loaded </h1>
        }
      </div>
    )
  }
}

export default Playground;
