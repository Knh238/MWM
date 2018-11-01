import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
// import CssBaseline from '@material-ui/core/CssBaseline'
import ButtonBase from '@material-ui/core/ButtonBase'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
//font-family: 'Chakra Petch', sans-serif;
// font-family: 'Bitter', serif;
// font-family: 'Fahkwang', sans-serif;
// import Navbar from './Navbar'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import Icon from '@material-ui/core/Icon'
import RestoreIcon from '@material-ui/icons/Restore'
// const styles = {

class Footer extends React.Component {
  state = {
    open: false
  }

  render() {
    const {classes, theme} = this.props
    const {open} = this.state

    return (
      // <CssBaseline />
      <div>
        <AppBar
          position="fixed"
          style={{
            // background: 'linear-gradient(45deg, #98FB98 30%, #87CEFA 90%)'
            top: 'auto',
            bottom: 0,
            background: 'lightGrey',
            // display: 'flex',
            // flexDirection: 'column',
            marginLeft: 'auto',
            // marginRight: 'auto',
            justifyContent: 'center'
          }}
        >
          <Toolbar>
            <Typography
              // variant="display3"
              color="black"
              centered="true"
              style={{
                color: 'black',
                fontSize: 25,

                marginLeft: '25%'
                // marginRight: 'auto'
              }}
            >
              Follow Matthew @
            </Typography>
            <Button
              variant="outlined"
              style={{
                color: 'black',
                width: '8%',
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <a target="_blank" href="https://www.Twitter.com/MattNesvet">
                twitter
              </a>
            </Button>
            <Button
              variant="outlined"
              style={{
                color: 'black',
                width: '8%',
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <a target="_blank" href="https://www.Facebook.com/nesvet">
                facebook
              </a>
            </Button>
            <Button
              variant="outlined"
              style={{
                color: 'black',
                width: '8%',
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <a target="_blank" href="https://www.Academia.edu/Nesvet">
                academia.edu
              </a>
            </Button>
            <Button
              variant="outlined"
              style={{
                color: 'black',
                width: '8%',
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <a target="_blank" href="https://www.Linkedin.com/in/nesvet">
                Linkedin
              </a>
            </Button>
            <Button
              variant="outlined"
              style={{
                color: 'black',
                width: '8%',
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <a target="_blank" href="https://www.instagram.com">
                instagram
              </a>
            </Button>
          </Toolbar>
        </AppBar>
        {/* </BottomNavigation> */}
      </div>
    )
  }
}

export default Footer
