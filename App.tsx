import React, {useEffect} from 'react';
import RootNavigator from './src/routes/RootNavigator';
import {createTable} from './src/utils/db';

export default function App() {
  useEffect(() => {
    createTable();
  }, []);

  return <RootNavigator />;
}
