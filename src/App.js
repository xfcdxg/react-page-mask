import React from 'react'
import Mask from './lib'

import './App.css'

const contentStyle = {
  height: '50%',
  width: '50%',
  position: 'absolute',
  zIndex: 2,
  top: '25%',
  left: '25%',
  backgroundColor: '#fff',
  border: '1px solid #000'
}
class App extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {}
  handleShowMask() {
    Mask(<div style={contentStyle}>abc</div>)
  }
  handleShowDarknessMask() {
    Mask(<div style={contentStyle}>abc</div>, { maskStyle: { opacity: .9 } })
  }
  handleShowTransparentMask() {
    Mask(<div style={contentStyle}>cde</div>, { mask: false })
  }
  handleShowNonCloseMask() {
    this.handleCloseMask = Mask(
                             <div style={contentStyle}>
                               <button onClick={ () => this.handleCloseMask() }>关闭</button>
                             </div>,
                             { maskClosable: false }
                           )
  }
  handleProcess() {
    alert('im closed')
  }
  handleShowMaskCloseWithProcess() {
    Mask(<div style={contentStyle}>efg</div>, { maskClick: this.handleProcess })
  }
  render() {
    return (
      <div className="App">
        <button onClick={ this.handleShowMask.bind(this) }>弹出遮罩</button>

        <button onClick={ this.handleShowDarknessMask.bind(this) }>弹出深色遮罩</button>

        <button onClick={ this.handleShowTransparentMask.bind(this) }>弹出透明遮罩</button>

        <button onClick={ this.handleShowNonCloseMask.bind(this) }>弹出不可关闭的透明遮罩</button>

        <button onClick={ this.handleShowMaskCloseWithProcess.bind(this) }>弹出遮罩，关闭后处理更多</button>
      </div>
    )
  }
}


export default App
