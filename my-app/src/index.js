import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './Hello.css';

import HelloMessage from './Hello';

ReactDOM.render(<HelloMessage name="John"/>, document.getElementById('root'));
registerServiceWorker();
