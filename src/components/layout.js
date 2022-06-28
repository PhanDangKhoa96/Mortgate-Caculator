import React from 'react'

import 'remixicon/fonts/remixicon.css'
import Seo from './seo'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <main className='overflow-hidden'>{children}</main>
      </>
    )
  }
}

export default Template