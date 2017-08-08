import React from 'react';
import faker from 'faker';
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


const Counter = (props) => {
  return (
    <div>
      <h3> counter: { props.counter } </h3>
      <button onClick={
        () => props.increaseCount() }
      > Increase Counter </button>
      <button onClick={
        () => props.decreaseCount() }
      > Decrement Counter </button>
    </div>
  )
}

class Playground extends React.Component {

  state = {
    name: "Doug",
    counter: 0,
    users: null,
    showCounter: true
  }

  componentDidMount() {
    console.log("Mounting Component");
    this.fetchUsersFromServer();
    const randomName = faker.name.firstName();
    const someProd = faker.commerce.product();
    alert(someProd);
  }

  fetchUsersFromServer = () => {
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

  increaseCount = () => {
    this.setState({ counter: this.state.counter += 1})
  }

  decreaseCount = () => {
    this.setState({ counter: this.state.counter -= 1})
  }

  toggleCounter = () => {
    this.setState({ showCounter: !this.state.showCounter })
  }

  render() {
    return (
      <div>
        <button
          className={this.state.showCounter ? "open-btn" : "close-btn "}
          onClick={ this.toggleCounter }
        >
          { this.state.showCounter ? "Show" : "Hide" }
        </button>
        {
          this.state.showCounter
          ? <Counter
              counter={this.state.counter}
              increaseCount={this.increaseCount}
              decreaseCount={this.decreaseCount}
            /> : null
        }
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
