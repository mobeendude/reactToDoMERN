import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, CardTitle } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export function WelcomePage(props) {
  return (
    <div className="container">
      <div className="jumbotron">
      <MuiThemeProvider >
        <Card className="container">
    <CardTitle title="React Application" subtitle="This is the home page." />
  </Card>
   </MuiThemeProvider>
  </div>

    </div>
  );
}

export default WelcomePage;
