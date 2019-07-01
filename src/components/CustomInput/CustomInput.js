import React from 'react';
import PropTypes from 'prop-types';

/**
 * This will be a custom input for our components library.
 */

const CustomInput = props => {
    const {
      name,
      inputRef,
      ...restProps
    } = props;
    return <input name={name} ref={inputRef} {...restProps}/>;
};

CustomInput.defaultProps = {
  name: 'my-input',
}

CustomInput.propTypes = {
  /** The name attribute for the input button */
  name: PropTypes.string,
}

export default CustomInput;