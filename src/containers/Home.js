import React, { Component } from 'react'
import {
  TopNav,
  SocialNav,
  Footer,
  Background,
  StylesHelper
} from '../components'

import HomeContent from './HomeContent'

const mainContainer = StylesHelper(
  'uk-container',
  'uk-cover-container',
  'uk-width-viewport',
  'uk-height-viewport',
  'uk-padding-remove'
)
const content = StylesHelper('uk-position-center', 'uk-text-center')

export default class Home extends Component {
  render() {
    return (
      <div className={mainContainer}>
        <Background data-uk-cover />
        <div
          className="uk-position-cover"
          style={{
            background: 'linear-gradient(to right, #36d1dcaa, #5b86e5aa)'
          }}
        />
        <TopNav />
        <div className={content}>
          <HomeContent />
          <SocialNav />
        </div>
        <Footer />
      </div>
    )
  }
}
