import React from 'react';
import RouteProvider from './RouteProvider';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import store from './redux/store';
import AlertSnackBar from './components/AlertSnackBar';
import { CustomPageLoader } from './components/CustomPageLoader';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#43a047' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: ['Oxygen', 'sans-serif'].join(','),
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <AlertSnackBar />
        <CustomPageLoader />
        <RouteProvider />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
