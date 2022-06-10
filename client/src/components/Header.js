import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();    
  return ( <div>
    <AppBar sx={{backgroundColor:'black'}} position='sticky' >
        <Toolbar>
            <Typography>
                 <SportsEsportsIcon/>
            </Typography>
            <Tabs
                sx={{ml:'auto'}} 
            textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/Add" label="Add product" />
                <Tab LinkComponent={NavLink} to="/Products" label="Products" />
                <Tab LinkComponent={NavLink} to="/About" label="About Us" />
                
                
            </Tabs>
        </Toolbar>
    </AppBar>
    </div>
  );
}

export default Header