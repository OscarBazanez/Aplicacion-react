import React,{useState,useEffect} from 'react'
import {TextField,CardActionArea,Card,CardMedia,CardContent,Typography,CardActions,Button,ThemeProvider} from '@material-ui/core'
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const Parametros = () => {
    const classes = useStyles();
    const [usuarios, setUsuarios] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [objetoUser, setObjUser] = useState(0);
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        //console.log(users)
        setUsuarios(users)
    }

    return (
        <div>
            <Autocomplete
            name="campo"
            id="combo-box-demo"
            options={usuarios}
            
            getOptionLabel={option => option.name}
            style={{ width: 300 }}
            onChange={(event, newValue) => {
                console.log(newValue)
                setUsuarios(newValue);
                setObjUser(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                console.log('valor input',newInputValue);
                setInputValue(newInputValue);
            }}
            renderInput={params => (
                <TextField {...params} label="Combo box" variant="outlined" />
            )}
            />
            <ul>
                {/*
                    usuarios.map(item => (
                        <li key={item.id}>
                            <input type="text" defaultValue={item.name} />
                        </li>
                    ))*/
                }
                
            </ul>
            {//JSON.stringify(inputValue)
            JSON.stringify(objetoUser)==='0' ? '':
              <>
              <ThemeProvider>
                <Typography variant="h4">Seleccionaste a</Typography>
              </ThemeProvider>
              <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="http://lorempixel.com/500/500/people/"
                      title="Personas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {JSON.stringify(objetoUser)==='null' ? '':objetoUser.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Direccion:{JSON.stringify(objetoUser)==='null' ? '':JSON.stringify(objetoUser.address.street)}
                        Usuario:{JSON.stringify(objetoUser)==='null' ? '':objetoUser.username}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Usuario:{JSON.stringify(objetoUser)==='null' ? '':objetoUser.username}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      WEB: {JSON.stringify(objetoUser)==='null' ? '':objetoUser.website}
                    </Button>
                    <Button size="small" color="primary">
                      Tel: {JSON.stringify(objetoUser)==='null' ? '':objetoUser.phone}
                    </Button>
                  </CardActions>
              </Card>
              </>

            }

            

            <br></br><br></br><br></br>
        </div>
    )
}

export default Parametros