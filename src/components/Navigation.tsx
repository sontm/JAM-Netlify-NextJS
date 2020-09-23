import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
      marginLeft: 10
    },
    subTitleGroup: {
      flexGrow: 2,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: "center",
    },
    subTitle: {
      display: 'inline',
      marginLeft: theme.spacing(5),
    },

    rightGroup: {
      flexGrow: 2,
    },
  }),
);

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={"/images/logo.png"} alt="android" style={{width: 36, height: 36}}/>
          
          <Typography variant="h5" className={classes.title}>
            <Link href="/product"><a>
            YamaStack
            </a></Link>
          </Typography>
          

          <div className={classes.subTitleGroup}>
          {/* <Grid container spacing={0} style={{alignItems: "center"}} justify="center">
            <Grid item xs>
              <Link href="/product"><a>
              <Typography variant="h6" className={classes.subTitle}>
                Products
              </Typography>
              </a></Link>
            </Grid>
            
            <Grid item xs>
              <Link href="/news"><a>
              <Typography variant="h6" className={classes.subTitle}>
                News
              </Typography>
              </a></Link>
            </Grid>

            <Grid item xs>
              <Link href="/about"><a>
              <Typography variant="h6" className={classes.subTitle}>
                About
              </Typography>
              </a></Link>
            </Grid>

            <Grid item xs>
              <Link href="/resource"><a>
              <Typography variant="h6" className={classes.subTitle}>
                Resources
              </Typography>
              </a></Link>
            </Grid>
          </Grid> */}
          </div>

          <div className={classes.rightGroup}>
          {/* <Button color="inherit">Login</Button>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

// export default function Navigation() {
//   const router = useRouter();
//   const [active, setActive] = useState(false);
//   return (
//     <>
//       <Burger active={active} onClick={() => setActive(!active)} />
//       <div className={"container " + (active ? "active" : "")}>
//         <ul>
//           <li>
//             <Link href="/">
//               <a className={router.pathname === "/" ? "active" : null}>about</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/posts">
//               <a
//                 className={
//                   router.pathname.startsWith("/posts") ? "active" : null
//                 }
//               >
//                 blog
//               </a>
//             </Link>
//           </li>
//         </ul>
//         <style jsx>
//           {`
//             .container {
//               width: 0;
//             }
//             ul {
//               opacity: 0;
//               width: 100%;
//               height: 100vh;
//               text-align: right;
//               list-style: none;
//               margin: 0;
//               padding: 0;
//               position: fixed;
//               top: 0;
//               background-color: #fff;
//               display: flex;
//               flex-direction: column;
//               justify-content: center;
//               z-index: 1;
//               transform: translateY(100%);
//               transition: opacity 200ms;
//             }
//             .active ul {
//               opacity: 1;
//               transform: translateY(0);
//             }
//             li {
//               margin-bottom: 1.75rem;
//               font-size: 2rem;
//               padding: 0 1.5rem 0 0;
//             }
//             li:last-child {
//               margin-bottom: 0;
//             }
//             .active {
//               color: #222;
//             }

//             @media (min-width: 769px) {
//               .container {
//                 width: 7rem;
//                 display: block;
//               }
//               ul {
//                 opacity: 1;
//                 width: 7rem;
//                 top: auto;
//                 display: block;
//                 transform: translateY(0);
//               }
//               li {
//                 font-size: 1rem;
//                 padding: 0;
//               }
//             }
//           `}
//         </style>
//       </div>
//     </>
//   );
// }
