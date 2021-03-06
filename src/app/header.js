import React, {Component} from 'react';
import DebounceInput from 'react-debounce-input';

export class Header extends Component {

  handleKeyDown = (event) => {
    if ( event.which == 13 ) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-static-top navbar-inverse">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular">
                <span className="glyphicon glyphicon-search"></span> Flickr search
              </a>
            </div>

            <form className="navbar-form navbar-left">
              <div className="form-group">
                <DebounceInput
                  size={50}
                  className="form-control"
                  minLength={3}
                  debounceTimeout={750}
                  onChange={this.props.handleChange}
                  onKeyDown={this.handleKeyDown}
                  autoFocus={true}
                  placeholder={'Type in 3 or more letters to start a search'}
                />
              </div>
            </form>

          </div>
        </nav>
      </header>
    );
  }

}

Header.propTypes = {
  handleChange: React.PropTypes.func.isRequired
};
