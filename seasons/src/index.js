import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  //Initialize State
  state = { lat: null, errorMessage: '' };

  //data loading in component did mount
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //setState updates
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      },
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; //you can take state, and pass it down as a prop to the child
    }
    return <Spinner message="Please accept the location request!" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
