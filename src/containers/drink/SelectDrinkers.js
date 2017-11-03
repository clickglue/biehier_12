
import _ from 'lodash';
import { connect } from 'react-redux';
import SelectDrinkers from '../../components/drink/SelectDrinkers';
import { drinkersListRequest } from '../../modules/drinkers';

const mapStateToProps = ({ drinkers }) => {
  const { loading, error, drinkersList } = drinkers;
  var items = _.map(drinkersList,(value,id)=>{
      
      return {id,...value}
  })
  return { loading, error, list: items};
};

export default connect(mapStateToProps, { drinkersListRequest })(SelectDrinkers);