import React, {Component} from 'react'

import AddressInput from 'test'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddressInput submit={(info) => console.log(info)}/>
      </div>
    )
  }
}
