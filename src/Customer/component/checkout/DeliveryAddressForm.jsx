import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'
import Addresscard from '../addresscard/Addresscard'

const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-md shadow-md h-[30.4rem] overflow-y-scroll"
          sx={{ pr: 4, }}
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <Addresscard />
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 2, bgcolor: "blue" }}
            >
              Deliver here!
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5" sx={{ m: 2 }}>
            <form>
              <Grid
                container
                spacing={3}
                direction="column"
                sx={{ width: '60vw' }}
              >
                <Grid container item spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    className='w-[400px]'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name='lastName'
                    label="Last Name"
                    className='w-[400px]'
                  />
                </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="address"
                    label="Address"
                    className='w-[824px]'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid container item spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id='city'
                      name='city'
                      label="City"
                      className='w-[400px]'
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id='state'
                      name='state'
                      label="State/Province/Region"
                      className='w-[400px]'
                    />
                  </Grid>
                </Grid>

                <Grid container item spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id='zip'
                      name='zip'
                      label="Zip / Postal code"
                      className='w-[400px]'
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id='phone'
                      name='phone'
                      label="Phone Number"
                      className='w-[400px]'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ mt: 2, bgcolor: "blue" }}
                    >
                      Deliver here!
                    </Button>
                  </Grid>
                </Grid>

              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm