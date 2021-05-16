import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import More from '../assets/more.svg'
import Cancel from '../assets/close.svg'
import Img from "gatsby-image"
import Opengalery from '../assets/gallery.svg'
import ArrowRight from '../assets/arrow-right.svg'

import './gallery.css'
import ImageGallery from 'react-image-gallery';

const GaleryButton = withStyles((theme) => ({
  root: {
    
    padding: '16px',
    '&:hover' :{
      background: 'transparent'
    },
    
  },
}))(Button);


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  allGallery:{
    "& .MuiPaper-root": {
      background: 'transparent'
    }
  }
}));

const CloseButton = withStyles((theme)=>({
  root:{
    position: 'absolute',
    top: '0px',
    right: '0px',
    zIndex: '10',
    border: 'none',
    padding: '16px',
    filter: 'drop-shadow(0 2px 2px #1a1a1a)',
    transition: 'all .2s ease-out',
    "&:hover":{
      backgroundColor: 'transparent'
    },
    "&:hover svg"  :{
      fill: '#D9C693',
      transform: 'scale(1.1)',
    }
  }
}))(Button);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var newGalery = props.imagegalery && props.imagegalery.map((item)=>{
    return(
    {original: item.image.childImageSharp.fluid.src, thumbnail : item.image.childImageSharp.fixed.src}
  )})
  //console.log(newGalery)
  return (
    <div>
      <GaleryButton   onClick={handleClickOpen}>
        <span style={{ color: '#D9C693',   marginRight: '25px'}}>Zobacz galerię</span>
        <Opengalery className="galery-icon shake" fill="#DAC596"  width="44px" height="44px" style={{verticalAlign:'bottom'}} />
      </GaleryButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={{background: 'rgb(45, 45, 47)'}} className={classes.allGallery}>
        
         
            <CloseButton edge="start" variant="outlined" onClick={handleClose} aria-label="close">
              <Cancel fill="#fff"  width="24px" height="24px"/>
            </CloseButton>
        
           
          {/*props.imagegalery && props.imagegalery.map((item)=>(
            <Img fixed={item.image.childImageSharp.fixed} />
          ))*/}
        <ImageGallery items={newGalery} showPlayButton={false} lazyLoad={true}/>
      </Dialog>
    </div>
  );
}
