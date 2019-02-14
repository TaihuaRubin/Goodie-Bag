import React from 'react';
import {connect} from 'react-redux';
import {getSingleCandy, increaseQuantity, decreaseQuantity} from '../reducers'

class SingleCandy extends React.Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    this.props.getSingleCandy(this.props.match.params.id);
  }

  increase() {
    this.props.increaseQuantity(this.props.match.params.id);
  }

  decrease() {
    this.props.decreaseQuantity(this.props.match.params.id);
  }

  render() {
    const {name, description, imageUrl, quantity} = this.props.candy;
    const disabledIncrease = (quantity === 10);
    const disabledDecrease = (quantity === 0);
    return (
      <div>
        <div>
          <img src={imageUrl} />
          <p>{name}</p>
          <p>{description}</p>
          <p>{quantity}</p>
        </div>
        <button type="button" disabled={disabledIncrease} onClick={this.increase}>Increase Quantity</button>
        <button type="button" disabled={disabledDecrease} onClick={this.decrease}>Decrease Quantity</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  candy: state.singleCandy
});

const mapDispatchToProps = (dispatch) => ({
  getSingleCandy: (id) => dispatch(getSingleCandy(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCandy);
