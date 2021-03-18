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
import Less from '../assets/less.svg'
import Img from "gatsby-image"
import Opengalery from '../assets/gallery.svg'

const GaleryButton = withStyles((theme) => ({
  root: {
    padding: '16px',
    '&:hover' :{
      background: 'transparent'
    },
    '&:hover .MuiButton-label' : {
        transform: 'scale(1.2)'
    }

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
}));

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

  console.log(props.imagegalery )
  return (
    <div>
      <GaleryButton   onClick={handleClickOpen}>
        <Opengalery fill="#DAC596"  width="44px" height="44px" style={{verticalAlign:'bottom'}} />
      </GaleryButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        
         <div className="content">
            <Button edge="start" variant="outlined" onClick={handleClose} aria-label="close">
              <Less fill="#DAC596"  width="24px" style={{verticalAlign:'bottom'}}/>
            </Button>
         </div>
           
          {props.imagegalery && props.imagegalery.map((item)=>(
            <Img fixed={item.image.childImageSharp.fixed} />
          ))}
        
        slider ze zdjeciami
      </Dialog>
    </div>
  );
}
