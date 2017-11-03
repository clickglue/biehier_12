
import _ from 'lodash';
import { connect } from 'react-redux';
import Drink from '../../components/drink/Drink';
import { drinkersListRequest } from '../../modules/drinkers';

const mapStateToProps = ({ drinkers }) => {
  const { loading, error, drinkersList } = drinkers;
  var items = _.map(drinkersList,(value,id)=>{
      
      return {id,...value}
  })
  return { loading, error, list: items};
};

export default connect(mapStateToProps, { drinkersListRequest })(Drink);

/*
drinkersList.forEach((item) => {
      const itemToPush = item.val();
      itemToPush.id = item.key
      items.push(itemToPush)
  })
  */