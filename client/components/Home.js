import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Footer from './footer'
import {CardContent} from '@material-ui/core'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  stuff: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minWidth: 300,
    height: '100%',
    width: '100%',
    backgroundColor: 'whiteSmoke',
    marginTop: 40
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
    title: 'Recent Work A',
    width: '45%'
  },
  {
    url: 'https://cdn140.picsart.com/276254674027201.jpg?c480x480',
    title: 'Recent Work B',
    width: '45%'
  },
  {
    url: 'https://cdn140.picsart.com/276173766036201.jpg?c480x480',
    title: 'Podcasts',
    width: '45%'
  },
  {
    url: 'https://cdn140.picsart.com/277629997011201.jpg?c480x480',
    title: 'more',
    width: '33%'
  }
]

// class Home extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
function Home(props) {
  const {classes} = props

  return (
    <div>
      <div className={classes.stuff}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              marginTop: 10,
              marginBottom: 10
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
      <Card
        styles={{
          marginTop: 40,
          display: 'flex',
          backgroundColor: 'azure',
          // alignItems: 'center',
          // justifyContent: 'center',
          alignText: 'center'
          // flexWrap: 'wrap'
        }}
      >
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            float: 'center',
            backgroundColor: 'white'
          }}
          centered
        >
          {/* <ul>
            <li> */}
          <Button
          // variant="outlined"
          // style={{color: 'black', height: 20, width: 50}}
          >
            <a target="_blank" href="https://www.Twitter.com/MattNesvet">
              twitter
            </a>
          </Button>
          <Button>
            <a target="_blank" href="https://www.Facebook.com/nesvet">
              facebook
            </a>
          </Button>
          <Button>
            <a target="_blank" href="https://www.Academia.edu/Nesvet">
              academia.edu
            </a>
          </Button>
          <Button>
            <a target="_blank" href="https://www.Linkedin.com/in/nesvet">
              Linkedin
            </a>
          </Button>
          <Button>
            <a target="_blank" href="https://www.instagram.com">
              instagram
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
//}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

// export default connect(null, null)(Home)
