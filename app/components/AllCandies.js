import React from 'react';
import {connect} from 'react-redux';
import {getAllCandies} from '../reducers';
import Candy from './Candy';

class AllCandies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCandies();
  }

  render() {
    return (
      <div>
        {this.props.candies.map(candy => {
          return <Candy key={candy.id} candy={candy} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  candies: state.allCandies
});

const mapDispatchToProps = (dispatch) => ({
  getAllCandies: () => dispatch(getAllCandies())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCandies);
