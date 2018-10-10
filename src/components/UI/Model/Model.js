import React from 'react'
import PropTypes from 'prop-types'

import classes from './Model.module.css'
import Backdrop from '../Backdrop/Backdrop'

const model = (props) =>
  <>
    <Backdrop
      show={props.show}
      clicked={props.modelClosed} />
    <div
      className={classes.Model}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </>

model.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool,
  modelClosed: PropTypes.func,
}

export default model