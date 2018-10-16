import React, { Component } from 'react'

import Model from '../../components/UI/Model/Model'

const withErrorHandler = (WrappedComponent, axios) => {
  return class _ extends Component {
    state = {
      error: null
    }

    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error })
      })
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <>
          <Model
            show={this.state.error}
            modelClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Model>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export default withErrorHandler