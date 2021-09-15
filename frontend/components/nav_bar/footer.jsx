import React from 'react'

export default class Footer extends React.Component {
  handleClick = url => e => {
    e.preventDefault()
    window.open(url, '_blank').focus()
  }

  render() {
    return (
      <div className='footer-div'>
        <p>created by Ezekiel Yu</p>
        <div className='footer-link-div'>
          <a className='footer-link' onClick={this.handleClick("https://github.com/cellozeke")}>
            <img className='footer-link-img github' src="/images/gh-mark.png"/>
          </a>
          <a className='footer-link' onClick={this.handleClick("https://www.linkedin.com/in/ezekiel-yu/")}>
            <img className='footer-link-img' src="/images/li-mark.png"/>
          </a>
        </div>
      </div>
    )
  }
}
