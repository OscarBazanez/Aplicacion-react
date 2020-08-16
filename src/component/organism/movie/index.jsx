import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      width: 345,
      maxHeight: 300,
    },
    media: {
      height: 140,
    },
  });
const MovieItem = ({ movie }) => {
    const classes = useStyles();
    return (
        <div style={{padding:'6px'}}>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.original_title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {movie.original_title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {JSON.stringify(movie.original_title)}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MovieItem;