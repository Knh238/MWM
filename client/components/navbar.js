import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'

import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/menu'
import {AccountCircle} from '@material-ui/core/icon/'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Icon from '@material-ui/core/Icon'
import Menu from '@material-ui/core/Menu'
import Main from './Main'
// import {fade} from '@material-ui/core/styles/colorManipulator'

import Divider from '@material-ui/core/Divider'

const styles = {
  root: {
    display: 'flex'
  },
  button: {},

  grow: {
    flexGrow: 1
  },
  links: {
    position: 'relative'
  },
  menuButton: {
    marginLeft: 32,
    marginRight: 20
  }
}

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      // isLoggedIn: this.props.isLoggedIn,
      auth: true,
      anchorEl: null,
      showComponent: false
    }
    this.onButtonClick = this.onButtonClick.bind(this)
  }
  handleChange = event => {
    this.setState({auth: event.target.checked})
  }

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }
  onButtonClick() {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      })
    } else {
      this.setState({
        showComponent: true
      })
    }
  }

  render() {
    // const {classes} = this.props
    const {auth, anchorEl} = this.state
    const open = Boolean(anchorEl)

    return (
      <div width="300px" height="600px">
        <AppBar position="relative">
          <Toolbar className="blueG" disableGutters={!open}>
            <IconButton
              color="black"
              onClick={this.onButtonClick}
              aria-label="menu"
              firstchild="true"
              float="left"
            >
              <MenuIcon color="black" />
              {this.state.showComponent ? <Main /> : null}
            </IconButton>
            <Typography
              // variant="display3"
              color="black"
              centered="true"
              style={{
                color: 'black',
                fontSize: 40,
                float: 'none',
                width: '300px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Matthew Nesvet
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     ...state,
//     isLoggedIn: !!state.current
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired
//   // isLoggedIn: PropTypes.bool.isRequired
// }
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(Navbar)
