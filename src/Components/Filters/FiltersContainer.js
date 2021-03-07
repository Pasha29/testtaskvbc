import React from 'react';
import Filters from "./Filters";
import { getFilteredDataTC } from './../../Redux/commonReducer';
import { connect } from 'react-redux';

class FiltersContainer extends React.Component {
    render() {
        return (
            <Filters getFilteredDataTC={this.props.getFilteredDataTC}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        arrayRecievedData: state.common.arrayRecievedData
    }
}

export default connect(mapStateToProps, { getFilteredDataTC })(FiltersContainer);