// src/App.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, Grid, Box } from '@mui/material';
import logo from './assets/logo.png';

const App = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: '#fff', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="The Stunnas Frontier Logo" style={{ height: 40, marginRight: 12 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            The Stunnas Frontier
          </Typography>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#vip">VIP</Button>
          <Button color="inherit" href="https://discord.gg/5StDhW6h8T" target="_blank">Discord</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to The Stunnas Frontier
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Vanilla Rust + Offline Raid Protection | Max Team Size: 4 | 60% Upkeep
        </Typography>
      </Container>

      <Container id="features" sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Server Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Vanilla Experience</Typography>
                <Typography variant="body2">Play Rust as intended, no game-breaking mods.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Offline Raid Protection</Typography>
                <Typography variant="body2">Protect your base while you're offline. Fair play encouraged.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Max Team Size: 4</Typography>
                <Typography variant="body2">Balance and fair PvP ensured through capped team size.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container id="vip" sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Get VIP Access
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">R99 / month</Typography>
            <Typography variant="body2" paragraph>
              Support the server and gain access to exclusive cosmetic perks.
            </Typography>
            <Button variant="contained" color="secondary" href="#" disabled>
              Buy VIP (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </Container>

      <Box sx={{ textAlign: 'center', py: 3, bgcolor: '#1e1e1e' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} The Stunnas Frontier — All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default App;