import React from "react"

export default class extends React.Component {

  render() {
    let text = this.props.text || "OK",
      className = this.props.className || null

    return (<button onClick={this.props.onClick} className={className}>
        { text }
      </button>)
  }
}
