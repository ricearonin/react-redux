import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //use arrow function for this binding
  //arrow function could be passed directly into the onSubmit prop below (e)=>{this.onFormSubmit(e)}

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
