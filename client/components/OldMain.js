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
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import CssBaseline from '@material-ui/core/CssBaseline'
import ButtonBase from '@material-ui/core/ButtonBase'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//font-family: 'Chakra Petch', sans-serif;
// font-family: 'Bitter', serif;
// font-family: 'Fahkwang', sans-serif;
// import Navbar from './Navbar'

const drawerWidth = 240

// const styles = {
const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
})

class Main extends React.Component {
  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({open: true})
  }

  handleDrawerClose = () => {
    this.setState({open: false})
  }

  render() {
    const {classes, theme} = this.props
    const {open} = this.state

    return (
      <div className={styles.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(styles.appBar, {
            [styles.appBarShift]: open
          })}
          style={{
            background: 'linear-gradient(45deg, #98FB98 30%, #87CEFA 90%)'
          }}
        >
          <Toolbar disableGutters={!open} height={'20%'}>
            <IconButton
              //   color="inherit"
              aria-label="Open drawer"
              style={{color: 'black'}}
              onClick={this.handleDrawerOpen}
              className={classNames(styles.menuButton, open && styles.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{color: 'black'}}
              fontFamily="Chakra+Petch"
              noWrap
            >
              More Info
            </Typography>
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
        <Drawer
          className={styles.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: styles.drawerPaper
          }}
        >
          <div className={styles.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <div className={styles.rootB}>
            <List>
              {['Bio', 'Installations', 'Podcasts', 'Articles'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </div>
          <Divider />
          <List>
            {['socialMedia', 'news', 'contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(styles.content, {
            [styles.contentShift]: open
          })}
        >
          <div className={styles.drawerHeader} />
        </main>
      </div>
    )
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(Main)
//   render() {
//     // const {classes, theme} = this.props
//     return (
//       <div className={styles.root}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="Open drawer"
//             onClick={this.handleDrawerOpen}
//             className={classNames(
//               styles.menuButton,
//               this.state.open && styles.hide
//             )}
//           />
//           <Icon name="menu" />
//         </Toolbar>
//         <Drawer
//           variant="permanent"
//           classes={{
//             paper: classNames(
//               styles.drawerPaper,
//               !this.state.open && styles.drawerPaperClose
//             )
//           }}
//           open={this.state.open}
//         >
//           <div className={styles.toolbar}>
//             <IconButton onClick={this.handleDrawerClose} />
//           </div>
//           <List>
//             <Divider inset />
//             <ListItem component={Link} to="/" replace>
//               <ListItemIcon>{/* <HomeTwoToneIcon /> */}</ListItemIcon>
//               <ListItemText primary="Home" />
//             </ListItem>
//             <Divider inset />
//             <ListItem component={Link} to="/books">
//               <ListItemIcon>{/* <BookIcon /> */}</ListItemIcon>
//               <ListItemText primary="My Books" />
//             </ListItem>
//             <Divider inset />
//             <ListItem component={Link} to="/Calendar">
//               <ListItemIcon>{/* <CalendarTodayIcon /> */}</ListItemIcon>
//               <ListItemText primary="Upcoming Releases" />
//             </ListItem>
//             <Divider inset />
//             <ListItem component={Link} to="/MyQuotes">
//               <ListItemIcon>
//                 {/* <FormatQuoteTwoToneIcon secondary="true" /> */}
//               </ListItemIcon>
//               <ListItemText primary="MyQuotes" />
//             </ListItem>
//             <Divider inset />
//             <ListItem component={Link} to="/MyNotes">
//               <ListItemIcon>{/* <ImportContactsIcon /> */}</ListItemIcon>
//               <ListItemText primary="MyNotes" />
//             </ListItem>
//             <Divider inset />
//             <ListItem component={Link} to="/Listopia">
//               <ListItemIcon>{/* <PollIcon /> */}</ListItemIcon>
//               <ListItemText primary="ListTopia" />
//             </ListItem>
//             <Divider inset />
//             <ListItem component={Link} to="/recommend">
//               <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
//               <ListItemText primary="Recommend to a friend!" />
//             </ListItem>
//             <Divider inset />
//             <ListItem component={Link} to="/ByTag">
//               <ListItemIcon>{/* <LoyaltyIcon /> */}</ListItemIcon>
//               <ListItemText primary="My Tags" />
//             </ListItem>
//             <Divider inset />
//           </List>
//         </Drawer>
//         <main className={styles.content}>
//           <div className={styles.toolbar} />
//         </main>
//       </div>
//     )
//   }

/* // Main.propTypes = { */

/* //  classes: PropTypes.object.isRequired,
//  theme: PropTypes.object.isRequired
//  } */

// export default connect()(Main)
