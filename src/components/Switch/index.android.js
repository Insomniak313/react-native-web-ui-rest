import React, { Component } from 'react';
import { Switch as NativeSwitch } from 'react-native';
import { Colors } from '../../constants';

export default class Switch extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: props.active
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(){
    this.setState({
      active: !this.state.active
    });
  }

  render(){
    const { color } = this.props;
    const { active } = this.state;

    let colorAttr;
    switch(color){
      case 'primary':
        colorAttr = Colors.primary;
        break;
      case 'secondary':
        colorAttr = Colors.secondary;
        break;
      default:
        colorAttr = color;
        break;
    }

    return (
      <NativeSwitch tintColor={colorAttr} onValueChange={this.toggleActive} value={active} />
    );
  }
}
