import NavMenu from "./appbar";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getApps } from '../api/postings'
import { Card } from '@mui/material'
import {
    Box,
    CardContent,
    Typography,
    CardActions,
    CardHeader,
    Button,
  } from "@mui/material";
export default function ViewApps(){
    const [ apps, setApps ] = useState([])
    useEffect(() => {
        getApps().then(x=>setApps(x))
        //window.alert(apps)
    }, [ ]);
    return(<>
    <h1>Browse positions</h1>
    {apps.map((app)=>{return(
    <Card variant="outlined" display="inline-block">
        <CardHeader
          title={app[2]}
          subheader={app[3]}
        /><CardContent>
    <Typography variant="h4">{ app[1] }</Typography>
  </CardContent>
  <CardContent>{app[4]}</CardContent></Card>);})
   }
    </>

    )

}