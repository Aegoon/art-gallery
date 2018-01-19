import React, {Component} from 'react';

class Flag extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <img name={this.props.name}
           role="button"
           aria-label={this.props.name}
           src={ this.props.image }
           onClick={ this.props.onClick }
           label={this.props.name}></img>
    )
  }
}

export default Flag;