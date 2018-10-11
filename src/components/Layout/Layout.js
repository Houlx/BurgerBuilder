import React from 'react'
import PropTypes from 'prop-types'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </>
)

layout.propTypes = {
  children: PropTypes.object,
}

export default layout