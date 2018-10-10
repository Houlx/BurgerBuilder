import React from 'react'
import PropsTypes from 'prop-types'

import classes from './Button.module.css'

const button = (props) =>
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>

button.propTypes = {
  clicked: PropsTypes.func,
  children: PropsTypes.string,
  btnType: PropsTypes.string,
}

export default button