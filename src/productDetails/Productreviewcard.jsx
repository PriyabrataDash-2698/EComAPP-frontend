import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const Productreviewcard = () => {
  return (
    <div>
          <Grid container spacing={2}>
              {/* Avatar */}
              <Grid item xs={1}>
                  <Avatar
                      className="text-white"
                      sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
                  />
              </Grid>

              {/* Content */}
              <Grid item xs={11}>
                  <div className="space-y-2">
                      <div>
                          <p className="font-semibold text-lg">Raaj</p>
                          <p className="opacity-70">February 3, 2026</p>
                      </div>

                      {/* 👇 BELOW name */}
                      <Rating value={4.5} precision={0.5} readOnly />

                      <p>Nice Product, I love this one. Go for it.</p>
                  </div>
              </Grid>
          </Grid>
    </div>
  )
}

export default Productreviewcard