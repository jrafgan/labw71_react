import React, {Component} from 'react';
import {connect} from "react-redux";

class OrdersPage extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        /*dishMenu: state.dishes.dishMenu,
        loading: state.dishes.loading*/
    };
};

const mapDispatchToProps = dispatch => {
    return {
        /*fetchDishes: () => dispatch(fetchDishes())*/
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);