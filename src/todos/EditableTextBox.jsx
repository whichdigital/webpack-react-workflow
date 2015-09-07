import React from "react"

export default class extends React.Component {

  render() {
    let autoFocus = this.props.autoFocus || true

    return (<input
      autoFocus={autoFocus}
      defaultValue={this.props.defaultValue}
      onBlur={this.props.onBlur}
      onKeyPress={this.props.onKeyPress}
    />)
  }
}
