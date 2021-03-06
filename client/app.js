import React from 'react'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Main />
      <Routes />
      <Footer />
    </div>
  )
}

export default App

// import React, {Component} from 'react'
// import {withRouter} from 'react-router-dom'
// // import {withStyles} from '@material-ui/core/styles'
// import {Navbar} from './components'
// // import CssBaseline from '@material-ui/core/CssBaseline'
// // import {Main} from './components'
// import Routes from './routes'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Routes />
//       </div>
//     )
//   }
// }
// export default App
