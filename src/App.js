import React from 'react';
import './App.css';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator,AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App({signOut}) {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
                <h2>React Login page using Amazon cognito</h2>
                {/* <button onClick={signOut}>Sign out</button> */}
            </header>
        </div>
  );
}

export default withAuthenticator(App);
