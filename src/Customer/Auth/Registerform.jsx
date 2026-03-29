import React from 'react'
import { Button, Grid,TextField } from '@mui/material'
const Registerform = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();

        const data=new FormData(event.currentTarget);

        const userData = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }
        console.log(userData);
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='First name'
                    fullWidth
                    autoComplete='given-name'/>
                </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='Last name'
                    fullWidth
                    autoComplete='given-name'/>
                </Grid>
                  <Grid item xs={12} className='w-full'>
                    <TextField
                    required
                    id='email'
                    name='email'
                    label='E-mail'
                    fullWidth
                    autoComplete='given-name'/>
                </Grid>
                  <Grid item xs={12} className='w-full'>
                    <TextField
                    required
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
                    autoComplete='password'
                    type='password'/>
                </Grid>
                  <Grid item xs={12} className='w-full'>
                    <Button
                    className='bg-[#9155FD] w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{padding:".8rem 0",bgcolor:"#9155FD"}}>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </form>
    </div>
  )
}

export default Registerform