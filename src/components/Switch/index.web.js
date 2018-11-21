import React, { Component } from 'react';
import WebSwitch from "react-switch";
import { Colors } from '../../constants';

export default class Switch extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: props.active
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(active){
    this.setState({
      active: active
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
      <WebSwitch
        offColor={colorAttr}
        onChange={this.toggleActive}
        checked={active}
        onColor="#99d5cf"
        onHandleColor="#009688"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        />
    );
  }
}
