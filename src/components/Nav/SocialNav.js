import React from 'react'

const raisedButtonStyle = {
  height: 50,
  margin: '4px 0 4px 0',
  backgroundColor: '#00000000',
  color: '#f8f8f8'
}
export default props => (
  <nav
    className="uk-navbar-container uk-navbar-transparent"
    data-uk-navbar
    {...props}
  >
    <div className="uk-navbar-center">
      <ul className="uk-navbar-nav uk-iconnav">
        <li>
          <a
            title="Twitter"
            href="https://twitter.com/raisedadead"
            className="uk-border-circle"
            data-uk-icon="icon: twitter"
            data-uk-tooltip="pos: top"
            target="_blank"
            rel="noopener noreferrer"
            style={raisedButtonStyle}
          >
            <span className="label uk-hidden">Twitter</span>
          </a>
        </li>
        <li>
          <a
            title="GitHub"
            href="https://github.com/raisedadead"
            className="uk-border-circle"
            data-uk-icon="icon: github"
            data-uk-tooltip="pos: top"
            target="_blank"
            rel="noopener noreferrer"
            style={raisedButtonStyle}
          >
            <span className="label uk-hidden">GitHub</span>
          </a>
        </li>
        <li>
          <a
            title="Medium"
            href="https://blog.raisedadead.com"
            className="uk-border-circle"
            data-uk-icon="icon: pencil"
            data-uk-tooltip="pos: top"
            target="_blank"
            rel="noopener noreferrer"
            style={raisedButtonStyle}
          >
            <span className="label uk-hidden">Medium</span>
          </a>
        </li>
        <li>
          <a
            title="freeCodeCamp"
            href="https://freeCodeCamp.org/raisedadead"
            className="uk-border-circle"
            data-uk-icon="icon: code"
            data-uk-tooltip="pos: top"
            target="_blank"
            rel="noopener noreferrer"
            style={raisedButtonStyle}
          >
            <span className="label uk-hidden">freeCodeCamp</span>
          </a>
        </li>
        <li>
          <a
            title="LinkedIn"
            href="https://linkedin.com/in/mrugeshm"
            className="uk-border-circle"
            data-uk-icon="icon: linkedin"
            data-uk-tooltip="pos: top"
            target="_blank"
            rel="noopener noreferrer"
            style={raisedButtonStyle}
          >
            <span className="label uk-hidden">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
