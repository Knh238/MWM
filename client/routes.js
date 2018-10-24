import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import // Login,
// Signup,
// UserHome,
Home from './components/Home'
// Books,
// Calendar,
// EnhancedTable,
// MyQuotes,
// Tags,
// MyNotes,
// SampleSeries,
// Listopia
// import {me} from './store'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  //   // this.props.gotUserList()
  // }
  render() {
    // const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route exact path="/Calendar" component={Calendar} />
        <Route exact path="/Books" component={Books} />
        <Route exact path="/Recommend" component={EnhancedTable} />
        <Route exact path="/MyQuotes" component={MyQuotes} />
        <Route exact path="/MyNotes" component={MyNotes} />
        <Route exact path="/ByTag" component={Tags} />
        <Route exact path="/sampleSeries" component={SampleSeries} />
        <Route exact path="/Tab" component={Listopia} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     ...state
//     // isLoggedIn: !!state.user.current
//     //userList: state.books.userList
//     // category: state.product.category
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//     // gotUserList: () => dispatch(getUserList())
//   }
// }
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(Routes)
// export default withRouter(connect(null, null)(Routes))
