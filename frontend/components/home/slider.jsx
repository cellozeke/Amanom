import React from 'react'
import { Link } from 'react-router-dom';

export default class Slider extends React.Component {
  componentDidMount() {
    this.counter = 1;
    this.slide = setInterval(() => {
      this.counter++;
      document.getElementById('radio' + this.counter).checked = true;
      if(this.counter > 4) clearInterval(this.slide)
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.slide)
  }

  handleLeft = e => {
    clearInterval(this.slide)
    if (this.counter > 1) {
      this.counter--
      document.getElementById('radio' + this.counter).checked = true;
    }
  }

  handleRight = e => {
    clearInterval(this.slide)
    if (this.counter < 5) {
      this.counter++
      document.getElementById('radio' + this.counter).checked = true;
    }
  }

  render() {
    return (
      <div className="slider">
        <div className='slider-arrows'>
          <div className='slider-arrow' onClick={this.handleLeft}>{`<`}</div>
          <p className='slider-arrow' onClick={this.handleRight}>{`>`}</p>
          {/* <div className='slider-arrow-left'></div>
          <div className='slider-arrow-right'></div> */}
        </div>
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" value='1' onClick={this.handleClick}/>
          <input type="radio" name="radio-btn" id="radio2" value='2' onClick={this.handleClick}/>
          <input type="radio" name="radio-btn" id="radio3" value='3' onClick={this.handleClick}/>
          <input type="radio" name="radio-btn" id="radio4" value='4' onClick={this.handleClick}/>
          <input type="radio" name="radio-btn" id="radio5" value='5' onClick={this.handleClick}/>
          <Link className="slide first slide-img1" to='/search?q=chips'></Link>
          <Link className="slide slide-img2" to='/snacks/33'></Link>
          <Link className="slide slide-img3" to='/search?q=cookie'></Link>
          <Link className="slide slide-img4" to={`/search?q=chocolate%20candy`}></Link>
          <Link className="slide slide-img5" to='/snacks/37'></Link>
          {/* <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
          </div> */}
        </div>
        {/* <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
          <label htmlFor="radio5" className="manual-btn"></label>
        </div> */}
      </div>
    )
  }
}
