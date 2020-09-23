import Link from "next/link";
import {theme, cssVariables} from '../lib/theme';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';

export default function Footer() {
  return (
    <footer style={{background: cssVariables.color.footerbg, height: "200px", paddingTop: 30}}>
      <Grid container spacing={0} justify="center">
        <Grid item xs={6} style={{textAlign: "center", verticalAlign: "middle"}}>
            <a href="#">
              <Typography variant="h5" component="h2" gutterBottom style={{color: "white"}}>
              YamaStack</Typography>
            </a>
            <Typography variant="body1" gutterBottom style={{color: "white"}}>
              Ứng Dụng cho Cuộc Sống!
           </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" component="h2" gutterBottom style={{color: "white"}}>
              Tải Về
          </Typography>
          <ul>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.sansan.VehicleCMS" target="_blank">
                <Typography variant="body1" gutterBottom style={{color: "white"}}>Tải Về từ Android Google Play</Typography>
              </a>
            </li>
            <li>
              <a href="https://apps.apple.com/app/id1498085260" target="_blank">
                <Typography variant="body1" gutterBottom style={{color: "white"}}>Tải Về từ Apple App Store</Typography>
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
}