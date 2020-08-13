import React,{ useState, useEffect } from 'react';
import  { peoples }  from '../../../services';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import
{
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Grid,
    Divider
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EndPoint from '../../../services/endpoint'
const endPointPeople= EndPoint.swapi.people
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    ssss: {
        transform: 'rotate(0deg)',
        marginLeft: '90px',
    }
  }));
const DetailsPeople = ({ props,characterId }) => {
    const classes = useStyles();
    const [detailsPeople,setDetailsPeople] = useState(null)
    const [expanded, setExpanded] = useState(false)
    const fetchDataPeople = async (urlParam,endPoint) => {
        const serverData = await peoples.getAll(urlParam,endPoint)
        setDetailsPeople(serverData);
    }
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    useEffect(() => {
        if(characterId !=null){
            fetchDataPeople(characterId,endPointPeople)
        }
    },[characterId]);

    return(
        detailsPeople &&
        <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              { detailsPeople.name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={ detailsPeople.name }
          subheader=
          { 
              (detailsPeople.birth_year !== "unknown") ? "Cumpleaños " + detailsPeople.birth_year : "Cumpleaños desconocido"
          }
        />
        {/*
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />*/
        }
        <CardContent>
          <Grid container className={classes.root} spacing={0}>
              <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Altura: {(detailsPeople.height !== "unknown") ? detailsPeople.height : "Desconocido"}
                  </Typography>
                  <Divider variant="middle" />
                  <Typography variant="body2" color="textSecondary" component="p">
                  Peso: {(detailsPeople.mass !== "unknown") ? detailsPeople.mass : "Desconocido"}
                  </Typography>
                  <Divider variant="middle" />
                  <Typography variant="body2" color="textSecondary" component="p">
                  Genero: {(detailsPeople.gender !== "unknown") ? detailsPeople.gender : "Desconocido"}
                  </Typography>
              </Grid>
              <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Cabello: {(detailsPeople.hair_color !== "n/a") ? detailsPeople.hair_color : "Desconocido"}
                  </Typography>
                  <Divider variant="middle" />
                  <Typography variant="body2" color="textSecondary" component="p">
                  Ojos: {(detailsPeople.eye_color !== "unknown") ? detailsPeople.eye_color : "Desconocido"}
                  </Typography>
                  <Divider variant="middle" />
                  <Typography variant="body2" color="textSecondary" component="p">
                  Piel: {(detailsPeople.skin_color !== "unknown") ? detailsPeople.skin_color : "Desconocido"}
                  </Typography>
              </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Typography className={classes.ssss} variant="body2" color="textSecondary" component="p">
          averigua más
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </>
    )
}

export default DetailsPeople




