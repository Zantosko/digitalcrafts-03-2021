import React, { Component } from 'react'
import ButtonBox from './ButtonBox'
import Logo from './Logo'
import SearchBar from './SearchBar'

export default class Container extends Component {
  render() {
    return (
      <div className="Container">
        <Logo />
        <SearchBar />
        <ButtonBox />
      </div>
    )
  }
}
