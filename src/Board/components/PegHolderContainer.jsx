import PegHolder from './PegHolder';
import {connect} from 'react-redux';
//import {pickPeg} from '../../App/Actions/pegActions';
import {setCursor} from '../../App/Actions/boardActions';

const mapStateToProps = state => {
    return {
      pegColours: state.peg.availableColours,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      onPegClick: peg => {
        dispatch(setCursor(peg))
      }
    }
  
}

const PegHolderContainer = connect(mapStateToProps, mapDispatchToProps)(PegHolder)
export default PegHolderContainer
  