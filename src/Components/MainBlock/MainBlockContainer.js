import React from 'react';
import { connect } from 'react-redux';
import MainBlock from './MainBlock';
import { getDataTC } from './../../Redux/commonReducer';

class MainBlockContainer extends React.Component {
    componentDidMount() {
        this.props.getDataTC();
    }

    render() {
        return this.props.filteredData && this.props.filteredData.length > 0 ?
            <MainBlock arrayRecievedData={this.props.filteredData}/> :
            <MainBlock arrayRecievedData={this.props.arrayRecievedData}/>
    }
}

let mapStateToProps = (state) => {
    return {
        arrayRecievedData: state.common.arrayRecievedData,
        filteredData: state.common.filteredData
    }
}

export default connect(mapStateToProps, { getDataTC })(MainBlockContainer);