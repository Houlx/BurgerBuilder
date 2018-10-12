import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './Model.module.css'
import Backdrop from '../Backdrop/Backdrop'

class Model extends Component {

  /* eslint no-unused-vars: 0 */
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }

  render() {
    return (
      <>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modelClosed} />
        <div
          className={classes.Model}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </>
    )
  }
}


Model.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool,
  modelClosed: PropTypes.func,
}

export default Model