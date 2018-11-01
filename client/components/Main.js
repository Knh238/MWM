import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import Footer from './Footer'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined'
// import CssBaseline from '@material-ui/core/CssBaseline'
import ButtonBase from '@material-ui/core/ButtonBase'

import Paper from '@material-ui/core/Paper'
//font-family: 'Chakra Petch', sans-serif;
// font-family: 'Bitter', serif;
// font-family: 'Fahkwang', sans-serif;
// import Navbar from './Navbar'

// const styles = {

class Main extends React.Component {
  state = {
    open: false
  }

  render() {
    const {classes, theme} = this.props
    const {open} = this.state

    return (
      <div>
        {/* <div> */}
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          style={{
            // background: 'linear-gradient(45deg, #98FB98 30%, #87CEFA 90%)'
            background: 'cadetBlue'
          }}
        >
          <Toolbar disableGutters={!open} height={'20%'}>
            <Button
              variant="outlined"
              style={{
                color: 'black',
                fontFamily: 'Chakra Petch',
                marginLeft: 20,
                width: '10%'
              }}
            >
              About
              {/* <ContactMailOutlinedIcon style={{marginLeft: 3}} /> */}
            </Button>

            <Button
              variant="outlined"
              style={{
                color: 'black',
                fontFamily: 'Chakra Petch',
                marginLeft: 20,
                width: '10%'
              }}
            >
              Contact
              {/* <ContactMailOutlinedIcon style={{marginRight: 3}} /> */}
            </Button>
            <Typography
              // variant="display3"
              color="black"
              centered="true"
              style={{
                color: 'black',
                fontSize: 40,
                float: 'none',
                width: '300px',
                fontFamily: 'Chakra Petch',

                marginLeft: '25%'
                // marginRight: 'auto'
              }}
            >
              Matthew Nesvet
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <Footer /> */}
      </div>
    )
  }
}
// Main.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// }
export default Main
//export default withStyles(styles, {withTheme: true})(Main)
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
