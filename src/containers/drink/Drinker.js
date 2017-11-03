
import _ from 'lodash';
import { connect } from 'react-redux';
import Drinker from '../../components/drink/Drinker';
import { toggleSelected } from '../../modules/drinkers';

const mapStateToProps = ({ drinkers }, props) => {
    const { loading, error, drinkersList } = drinkers;
    return {dr:drinkersList, id: props.id}
};

export default connect(mapStateToProps, { toggleSelected })(Drinker);