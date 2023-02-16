import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { adduser } from './service/api'


const Container = styled(FormGroup)`
    width : 50% ;
    margin: 5% auto;
   
    & > div {
        margin-top : 20px
    }
`
const Cont =   styled(Button)`
    width : 70%;
    margin:auto
`

const Typo =   styled(Typography)`
    margin: 0 auto 20px auto;
`

function AddUser() {
    
    const [user, changeUser] = useState({
        name : '',
        instagram:'',
        email:'',
        quote:''
    })

    function change(e){
        changeUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails =  (user) => {
        alert("Quote Added !")
       return ( adduser(user))
    }
  return (



    <Container>

       <Typo variant='h4'>Add Quote</Typo>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={(e)=>change(e)}/>
        </FormControl>
        <FormControl>
            <InputLabel>Instagram Id</InputLabel>
            <Input name='instagram'onChange={(e)=>change(e)}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email' onChange={(e)=> change(e)}/>
        </FormControl>
        <FormControl>
        <TextField name="quote" id="outlined-basic" label="Enter the Quote" variant="outlined" multiline onChange={(e)=> change(e)}/>
        </FormControl>
        <FormControl>

        <Cont variant="contained"  onClick={()=>{addUserDetails(user)}}>Add Quote</Cont>
        </FormControl>
    </Container>
  )
}

export default AddUser