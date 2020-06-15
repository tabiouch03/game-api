import React, { Component } from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  root: {
    width: 400,
    flexGrow: 1,
    marginTop: 25,
    marginBottom: 25,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  },
  media: {
    height: 150,
    paddingTop: 320,
  },
  space: {
    padding: 5,
    textAlign: 'center',
  }
}


class Cards extends Component {
  state = {
    post: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/game/')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ post: result })
      })
  }

  render() {
    const { post } = this.state
    const postSTR = JSON.stringify(post)
    return (
      <div>
        <Container maxWidth="lg" >
          {postSTR !== '{}' ?
            <div>
              <Grid container alignItems="flex-start" justify="flex-center">
                {post.map((item, index) => (
                  <div key={index}>
                    <Grid item xs={8} className={this.props.classes.space}>
                      <Card className={this.props.classes.root}>
                        <CardMedia
                          className={this.props.classes.media}
                          image={item.cover}
                          title={item.name} />
                        <CardContent>
                          <h3>{item.name}</h3>
                          <h5>Genre : {item.genre}</h5>
                          <p>Prix : {item.prix}€</p>
                          <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                              <ShareIcon />
                            </IconButton>
                          </CardActions>
                        </CardContent>
                      </Card>
                    </Grid>
                  </div>
                ))}
              </Grid>
            </div>
            : null
          }
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Cards);
