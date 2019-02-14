import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuider extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build control</div>
      </Aux>
    );
  }
}

export default BurgerBuider;
