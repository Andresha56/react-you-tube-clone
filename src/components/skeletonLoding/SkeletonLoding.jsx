

import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from "@mui/material/Grid";

export default function SkeletonLoding() {
  return (
    <Grid item xs={3} md={3}  >

      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
   
    </Grid>
  );
}