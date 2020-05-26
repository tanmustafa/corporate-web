import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));


 const Login = (props) =>  {

        let history = useHistory();
        const onSubmit =(event) =>{
                
                event.preventDefault();
                var apiBaseUrl = "http://localhost:4000/api/";
                
                var login={
                "userName": event.target.elements.email.value,
                "password": event.target.elements.password.value
                }
                
                axios.post(apiBaseUrl+'login', login)
                .then(function (response) {
                console.log(response);
                if(response.data){
                console.log("Login successfull");
                
                 history.push(`/`)

                
                }                 
                else{
                console.log("Username does not exists");
                alert("Username does not exist");
                }
                })
                .catch(function (error) {
                console.log(error);
                });
                }

    return (

        <Container component="main" maxWidth="xs">
       
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Yönetici Girişi
          </Typography>
          <form className={useStyles.form} noValidate onSubmit={ onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Kullanıcı adı"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            
            >
             Giriş
            </Button>
           
          </form>
        </div>     
      </Container>
    );
  }

export default Login;