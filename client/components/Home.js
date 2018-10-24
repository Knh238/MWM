// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {withStyles} from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import ButtonBase from '@material-ui/core/ButtonBase'

// const styles = {
//   // card: {
//   //   maxWidth: 345,
//   //   display: 'flex',
//   //   flexWrap: 'wrap',
//   //   justifyContent: 'space-around'
//   // },
//   // media: {
//   //   objectFit: 'cover'
//   // },
//   rootB: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     minWidth: 300,
//     width: '100%'
//   },
//   image: {
//     position: 'relative',
//     height: 200,
//     // [theme.breakpoints.down('xs')]: {
//     //   width: '100% !important', // Overrides inline-style
//     //   height: 100
//     // },
//     '&:hover, &$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15
//       },
//       '& $imageMarked': {
//         opacity: 0
//       },
//       '& $imageTitle': {
//         border: '4px solid currentColor'
//       }
//     }
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white'
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%'
//   },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: 'black',
//     opacity: 0.4
//     // transition: theme.transitions.create('opacity')
//   },
//   imageTitle: {
//     position: 'relative'
//     // padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
//     //   .spacing.unit + 6}px`
//   },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: 'white',
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)'
//     // transition: theme.transitions.create('opacity')
//   }
// }
// // const images = [
// //   {
// //     url: '/static/images/grid-list/breakfast.jpg',
// //     title: 'Breakfast',
// //     width: '40%'
// //   },
// //   {
// //     url: '/static/images/grid-list/burgers.jpg',
// //     title: 'Burgers',
// //     width: '30%'
// //   },
// //   {
// //     url: '/static/images/grid-list/camera.jpg',
// //     title: 'Camera',
// //     width: '30%'
// //   }
// // ]

// class Home extends React.Component {
//   render() {
//     return (
//       // <Card
//       //   style={{
//       //     float: 'none',
//       //     width: '40%',
//       //     marginLeft: 'auto',
//       //     marginRight: 'auto'
//       //   }}
//       // >
//       //   <Typography variant="display3" align="center">
//       //     Books
//       //   </Typography>
//       //   <CardMedia
//       //     component="img"
//       //     height="40%"
//       //     image="https://cdn130.picsart.com/276489106018201.jpg?c480x480"
//       //     title="Contemplative Reptile"
//       //     fullwidth="true"
//       //   />
//       //   <CardContent align="center">
//       //     <Typography variant="display3" centered>
//       //       Yeah... you are in for it!
//       //     </Typography>
//       //   </CardContent>
//       // </Card>
//       <div className={styles.rootB}>
//         <ButtonBase
//           focusRipple
//           key="camera"
//           className={styles.image}
//           focusVisibleClassName={styles.focusVisible}
//           style={{
//             width: '10%'
//           }}
//         >
//           <span
//             className={styles.imageSrc}
//             style={{
//               backgroundImage: `url(https://cdn140.picsart.com/277629997011201.jpg?c480x480)`
//             }}
//           />
//           <span className={styles.imageBackdrop} />
//           <span className={styles.imageButton}>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={styles.imageTitle}
//             >
//               'camera'
//               <span className={styles.imageMarked} />
//             </Typography>
//           </span>
//         </ButtonBase>
//       </div>
//     )
//   }
// }
import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%'
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
})

const images = [
  {
    url: 'https://cdn140.picsart.com/277629997011201.jpg?c480x480',
    title: 'Nature',
    width: '100%'
  },
  {
    url: 'https://cdn140.picsart.com/276254674027201.jpg?c480x480',
    title: 'Space',
    width: '100%'
  },
  {
    url: 'https://cdn140.picsart.com/276173766036201.jpg?c480x480',
    title: 'Killin me',
    width: '100%'
  },
  {
    url: 'https://cdn140.picsart.com/277629997011201.jpg?c480x480',
    title: 'buttons',
    width: '100%'
  },
  {
    url: 'https://cdn140.picsart.com/276254674027201.jpg?c480x480',
    title: 'too much',
    width: '100%'
  },
  {
    url: 'https://cdn140.picsart.com/276173766036201.jpg?c480x480',
    title: 'lots',
    width: '100%'
  },
  {
    url: 'https://cdn140.picsart.com/277629997011201.jpg?c480x480',
    title: 'of',
    width: '100%'
  }
]

function Home(props) {
  const {classes} = props

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
//export default connect(null, null)(Home)
