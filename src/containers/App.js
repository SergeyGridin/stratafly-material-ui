import React, { Component } from 'react';
import { Desktop } from '../components/Desktop';
import { AppHeader } from '../components/AppHeader';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Theme } from '../Theme';

class App extends Component {
  render() {
    // if (window.screen.width >= 1024 && window.screen.height >= 768) return <Desktop />;
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
      </MuiThemeProvider>
    );
  }
}
export default App;
