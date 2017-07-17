// Code YouTubeDebugger Component Here

import React, {Component} from 'react'

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }
  changeToTwelve = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  changeSize = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeToTwelve} type="number">{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.changeSize} type="number">{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
