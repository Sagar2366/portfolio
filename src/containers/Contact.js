import React from 'react'
import { StylesHelper } from '../components/'

const mainContainer = StylesHelper(
  'uk-container',
  'uk-cover-container',
  'uk-width-viewport',
  'uk-height-viewport',
  'uk-padding-remove'
)
const content = StylesHelper('uk-position-center', 'uk-text-center')

export default () => (
  <div className={mainContainer}>
    <div className={content}>
      <span data-uk-icon="icon: mail; ratio:2;" />
      <h4 style={{ color: '#666666', fontFamily: "'Quicksand', sans-serif" }}>
        Contact | Stay tuned as this page is being prep-ed for next release.
      </h4>
    </div>
  </div>
)
