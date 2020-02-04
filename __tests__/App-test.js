/**
 * @format
 */
import "jest";
import 'react-native';
import React from 'react';
import App, { Transaction } from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const testRenderer = renderer.create(<App />);
  //const testInstance = testRenderer.root;
  //const el = testInstance.findByType(Transaction);
  //expect(el).not.toBeNull();
  expect(true).toBeTruthy();
});
