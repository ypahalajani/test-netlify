import React from 'react';
import PropTypes from 'prop-types';

/**
 * This will be a custom input for our components library.
 */
class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'This is the default text with which this component renders.'
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const {
      name,
      ...restProps
    } = this.props;
    return <input name={name} value={this.state.value} onChange={this.inputChangeHandler} {...restProps}/>;
  }
}

CustomInput.defaultProps = {
  name: 'my-input',
}

CustomInput.propTypes = {
  /** The name attribute for the input button */
  name: PropTypes.string,
}

export default CustomInput;