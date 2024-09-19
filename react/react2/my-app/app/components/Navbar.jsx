"use client"
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography,useMediaQuery,useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = ()=>{
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down("md"));
    const toggleDrawer = (open)=>{
       setIsDrawerOpen(open);
    }
    const menuItems=[{title:"Home",link:"/"},
        {title:"About",link:"/about"},
        {title:"Services",link:"/services"},
        {title:"Contact",link:"/contact"}

    ]
    const router = useRouter();
    const handleNavigation = (path)=>{
        router.push(path);
    }
    
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow:1}}>My Website</Typography>
                    {isMobile ? (
                        <>
                             <IconButton
                    aria-label="menu"
                    color="inherit"
                    sx={{display:{xs:"block",md:"none"}}}
                    onClick = {()=>toggleDrawer(true)}>
                    <MenuIcon/>
                    </IconButton>
                    <Drawer open={isDrawerOpen} onClose={()=>toggleDrawer(false)}>
                    <List >
                      {menuItems.map((item)=>(
                        <ListItem key={item.title} onClick={()=>handleNavigation(item.link)}sx={{cursor:"pointer"}}>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                      )
                    
                    )}
                    </List>
                    </Drawer> 
                        </>
                    ):(
                        <List sx={{display:"flex"}}>
                      {menuItems.map((item)=>(
                        <ListItem key={item.title}onClick={()=>handleNavigation(item.link)} sx={{cursor:"pointer"}}>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                      )
                    
                    )}
                    </List>
                    )}
                   
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Navbar;
