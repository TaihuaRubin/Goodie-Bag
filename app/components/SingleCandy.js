import React from 'react';
import {connect} from 'react-redux';
import {getSingleCandy} from '../reducers'

class SingleCandy extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleCandy(this.props.match.params.id);
  }

  render() {
    const {name, description, imageUrl, quantity} = this.props.candy;
    return (
      <div>
        <img src={imageUrl} />
        <p>{name}</p>
        <p>{description}</p>
        <p>{quantity}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  candy: state.singleCandy
});

const mapDispatchToProps = (dispatch) => ({
  getSingleCandy: (id) => dispatch(getSingleCandy(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCandy);
