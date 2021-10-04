import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: '100px'
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: "100%"
  }
});

const tileData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/ManonTheMoonTheEndofDay.jpg/220px-ManonTheMoonTheEndofDay.jpg",
    title: "Breakfast",
    author: "jill111",
    cols: 2,
    featured: true
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/ManonTheMoonTheEndofDay.jpg/220px-ManonTheMoonTheEndofDay.jpg",
    title: "Tasty burger",
    author: "director90",
    cols: 2
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/ManonTheMoonTheEndofDay.jpg/220px-ManonTheMoonTheEndofDay.jpg",
    title: "Morning",
    author: "fancycrave1",
    featured: true,
    cols: 2
  }
];

function Store(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
  );
}

Store.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Store);
