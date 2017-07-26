import React from 'react';


class Toggler extends React.Component {
  state = {
    number: 7,
    showCounter: false
  }
  incrementNumber() {
    this.setState({number: this.state.number += 1})
  }
  decrementNumber() {
    this.setState({number: this.state.number -= 1})
  }
  render() {
    return(
      <div className="container">
        <div>
          <h3> Toggler </h3>
          <p> I am 'smart' component </p>
          <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}> Toggle Counter </button>
        </div>
        {
          this.state.showCounter
          ? (
            <div>
              <h5> Number: {this.state.number} </h5>
              <button onClick={() => this.incrementNumber() }> Increase </button>
              <button onClick={() => this.decrementNumber() }> Decrease </button>
            </div>
          ) : <div> <h3> Counter Hidden </h3> </div>
        }
      </div>
    )
  }
}


export default Toggler;





setTimeout(function () { alert("this is now set")}, 1000);

// THE REFACTOR
// import React from 'react';
//
// const Counter = (props) => {
//   return (
//     <div>
//       <h5> Number: {props.number} </h5>
//       <button onClick={() => props.incrementNumber() }> Increase </button>
//       <button onClick={() => props.decrementNumber() }> Decrease </button>
//     </div>
//   )
// }
//
// class Toggler extends React.Component {
//   state = {
//     number: 7,
//     showCounter: false
//   }
//
//   incrementNumber = this.incrementNumber.bind(this)
//   decrementNumber = this.decrementNumber.bind(this)
//
//   incrementNumber() {
//     this.setState({number: this.state.number += 1})
//   }
//   decrementNumber() {
//     this.setState({number: this.state.number -= 1})
//   }
//   render() {
//     return(
//       <div className="container">
//         <div>
//           <h3> Toggler </h3>
//           <p> I am 'smart' component </p>
//           <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}> Toggle Counter </button>
//         </div>
//         {
//           this.state.showCounter
//           ? <Counter
//             number={this.state.number}
//             incrementNumber={this.incrementNumber}
//             decrementNumber={this.decrementNumber}
//           />
//           : <div> <h3> Counter Hidden </h3> </div>
//         }
//       </div>
//     )
//   }
// }
//
//
// export default Toggler;
