import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { merge, compose } from 'ramda'
import './index.css'

const MaskList = []

const Mask = (content, options) => {
    const body = document.body
    const node = document.createElement('div')

    const preventDefaul = e => e.preventDefault()
    const handleContainerClose = () => {
      if (unmountComponentAtNode(node)) node.remove()
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }

    MaskList.push(handleContainerClose)

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    node.style.height = '100%'
    node.style.width = '100%'
    body.appendChild(node)

    render(
      <MaskContainer { ...{ handleContainerClose } } { ...options}>
        { React.cloneElement(content, { handleContainerClose }) }
      </MaskContainer>,
      node
    )
    return handleContainerClose
}

Mask.__proto__.closeAll = () => {
  if (MaskList.length > 0) {
    setTimeout(MaskList.shift(), 0)
    Mask.closeAll()
    window.location.hash = ''
  }
}
// 以下为扩展属性
const localMaskContainerStyle = {}
const localMaskStyle = {}
const localContentStyle = {}
const defultMaskClick = () => {}

const defaultBgColor = { backgroundColor: '#000' }

const MaskContainer = (
  {
    children,                 // 遮罩的内容
    mask = true,              // 是否展示遮罩
    maskClosable = true,      // 遮罩是否可被关闭
    style = {},               // 容器的样式
    maskStyle = {},           // 遮罩的样式
    contentStyle,             // 内容的样式，不建议设置，因为可能会屏蔽掉mask的点击
    contentClass = '',        // 内容的样式类
    containerClass = '',      // 容器的样式类
    handleContainerClose,
    maskClick = defultMaskClick, // 遮罩的点击，与关闭一起执行
  }
) =>
(
  <div className={ `mask-container ${ containerClass }` } style={ merge(localMaskContainerStyle, style) }>
    <div className='mask'
         onClick={ maskClosable ? compose(handleContainerClose, maskClick) : defultMaskClick }
         style={
           !mask ? merge(localMaskStyle, maskStyle)
                 : compose(merge(localMaskStyle), merge(defaultBgColor))(maskStyle)
         }
    />
    <div className={ `content ${ contentClass }` } style={ merge(localContentStyle, contentStyle) }>
      { children }
    </div>
  </div>
)

export default Mask
