import React, {PropTypes, Component} from 'react';

import {greatPlaceStyle} from './great_place_styles.js';

export default class GreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}
