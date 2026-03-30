import React from 'react';
import { Button, Grid,TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const Loginform = () => {
  const navigate = useNavigate();
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
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p className='text-black-600'>If you don't have Account ?</p>
          <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default Loginform