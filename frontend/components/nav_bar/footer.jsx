import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer-div'>
        <p>created by Ezekiel Yu</p>
        <div className='footer-link-div'>
          <a className='footer-link' href="https://github.com/cellozeke">
            <img className='footer-link-img github' src="/images/gh-mark.png"/>
          </a>
          <a className='footer-link' href="https://www.linkedin.com/in/ezekiel-yu/">
            <img className='footer-link-img' src="/images/li-mark.png"/>
          </a>
        </div>
      </div>
    )
  }
}
