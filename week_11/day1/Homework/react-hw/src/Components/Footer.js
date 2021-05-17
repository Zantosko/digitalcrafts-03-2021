import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="top-footer">
          <p>🥬 Carbon neutral since 2007</p>
        </div>
        <div className="bottom-footer">
          <div className="left-footer">
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search works</p>
          </div>
          <div className="right-footer">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </div>
    )
  }
}
