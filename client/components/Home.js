import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
// import Paper from '@material-ui/core/Paper'
// import Card from '@material-ui/core/Card'
// import {CardContent} from '@material-ui/core'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  stuff: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',

    minWidth: 300,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 30
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
  imageC: {
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
  imageSrcC: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%'
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
    // url: 'https://cdn140.picsart.com/277629997011201.jpg?c480x480',
    url: 'https://cdn131.picsart.com/276015008018201.jpg?c480x480',
    title: 'Recent Work A',
    width: 250,
    height: 250
  },
  {
    // url: 'https://cdn140.picsart.com/276254674027201.jpg?c480x480',
    url: 'https://cdn130.picsart.com/270773248020201.jpg?c480x480',
    title: 'Recent Work B',
    // width: '45%',
    width: 250,
    height: 250
  },
  {
    url: 'https://cdn140.picsart.com/272129255019201.jpg?c480x480',
    title: 'Podcasts',
    // width: '45%',
    width: 250,
    height: 250
  }
  // {
  //   // url: 'https://cdn140.picsart.com/277629997011201.jpg?c480x480',
  //   url: 'https://cdn140.picsart.com/269211499020201.jpg?c480x480',
  //   title: 'more',
  //   width: '33%'
  //   // width: 150,
  //   // height: 200
  // }
]

// class Home extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
function Home(props) {
  const {classes} = props

  return (
    // <Paper fullheight>

    <div className={classes.stuff}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            // width: image.width,
            // height: image.height,
            // width: '30%',
            width: '55%',
            height: 300,
            marginTop: '5%',
            // marginBottom: 10,
            marginLeft: 20,
            marginRight: 20
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

      {/* <div className={classes.stuff}> */}

      <ButtonBase
        focusRipple
        key="more"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '50%',
          marginTop: '5%',
          marginBottom: 60,
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://cdn140.picsart.com/269211499020201.jpg?c480x480)`
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
            More
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>

      <ButtonBase
        focusRipple
        key="more"
        className={classes.imageC}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '20%',
          marginTop: '5%',
          marginBottom: 60,
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <span
          className={classes.imageSrcC}
          style={{
            backgroundImage: `url(https://cdn140.picsart.com/269211499020201.jpg?c480x480)`,
            borderRadius: '50%',
            border: 2
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
            More
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  )
}

/* Home.propTypes = {
  classes: PropTypes.object.isRequired
} */

export default withStyles(styles)(Home)

/* // export default connect(null, null)(Home) */
