import React from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

// import your components:
import Home from "../pages/Home";
import Stronger from "../pages/Song/stronger";
import BonitaAppleBum from "../pages/Song/bonitaApplebum";
import DayAndNight from "../pages/Song/dayAndNight";

const drawerWidth = 240;
const history = createBrowserHistory();

// css
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  drawerPaperCollapsed: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(0),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
}));


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);
  const [title, setTitle] = React.useState('Home');

  const handleDrawerOpen = () => {
    setOpen(true);
    setCollapsed(false);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setCollapsed(false);
  };
  const handleDrawerCollapsed = () => {
    setCollapsed(true);
    setOpen(false);
  };
  const onItemClick = title => () => {
    setTitle(title);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* This is the header AppBar */}
      <AppBar position="absolute" className={clsx(classes.appBar, 
          open && classes.appBarShift, collapsed && classes.appBar)}>
        <Toolbar title={title} className={classes.toolbar}>

          {/* The Menu icon exposes the left pane menu bar */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

          {/* The title is set by the components */}
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>

          {/* For kicks */}
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* The Router component routes URLs to your components */}
      <Router history={history} title={title} >

        {/* Drawers are left pane menu items in React-speak */}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, 
              !open && classes.drawerPaperClose,
              collapsed && classes.drawerPaperCollapsed)
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>

            {/* This icon collapses the left pane enough to show menu item icons */}
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />

          {/* Left pane menu items */}
          <List>

            {/* Song menu item */}
            <ListItem button component={Link} to="/stronger" onClick={onItemClick('Stronger')}>
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
              <ListItemText primary="Stronger" />
              { title === 'Stronger' && 
                <ListItemIcon>
                  <IconButton onClick={handleDrawerCollapsed}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ListItemIcon>
              }
            </ListItem>

            {/* Song menu item */}
           <ListItem button component={Link} to="/dayAndNight" onClick={onItemClick('DayAndNight')}>
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
              <ListItemText primary="DayAndNight" />
              { title === 'DayAndNight' && 
                <ListItemIcon>
                  <IconButton onClick={handleDrawerCollapsed}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ListItemIcon>
              }
            </ListItem>

            {/* Song menu item */}
            <ListItem button component={Link} to="/bonitaAppleBum" onClick={onItemClick('BonitaAppleBum')}>
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
              <ListItemText primary="BonitaAppleBum" />
              { title === 'BonitaAppleBum' && 
                <ListItemIcon>
                  <IconButton onClick={handleDrawerCollapsed}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ListItemIcon>
              }
            </ListItem>
          </List>
          

        </Drawer>

        {/* This is your mission control: Matches URLs above to your components */}
        <main className={classes.content}>
          <Route exact path="/" component={Home} />
          <Route path="/stronger" component={Stronger} />
          <Route path="/bonitaAppleBum" component={BonitaAppleBum} />
          <Route path="/dayAndNight" component={DayAndNight} />
        </main>
      </Router>
      
      {/* Whatever you put here will appear on all your pages, style appropriately! */}
      <div className={classes.footer}>
        <p>MIT License, dinorows@gmail.com 2020</p>
      </div>
    </div>
  );
}
