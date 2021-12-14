import React, { Component } from 'react'
import List from '../List';
import WetherList from '../WetherList';

import {Route, Routes} from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<List/>} exact />
          <Route path="/todo" element={<List/>} />
          <Route path="/weather" element={<WetherList/>} />
        </Routes>
      </main>
    )
  }
}
