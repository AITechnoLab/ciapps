/**	
 * @format	
 */	

import 'react-native';	
import React from 'react';	
import App from '../App';	

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

// Note: test renderer must be required after react-native.	
import renderer from 'react-test-renderer';	

it('renders correctly', () => {	
  renderer.create(<App />);	
})
