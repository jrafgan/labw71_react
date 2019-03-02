import React, {Component} from 'react';
import './DishesPage.css';
import {connect} from "react-redux";
import {deleteDish, editDishInState, fetchDishes} from "../../store/actions/dishAction";
import {NavLink} from "react-router-dom";

class DishesPage extends Component {
    componentDidMount(){
        this.props.fetchDishes();
    }

    render() {

        if (!this.props.dishMenu) {
            return <h1>Loading...</h1>
        }

        const menu = this.props.dishMenu;
        console.log(menu);
        return (
            <div className='pizza_list'>
                <div className='list_top'>
                    <h1>Dishes</h1>
                    <NavLink to='/add' className='add_btn'><button>Add new Dish</button></NavLink>
                </div>


                    {menu.map(item=>(
                        <div key={item.id} className='item'>
                            <img src={item.url} className='item_img' alt={item.title} />
                            <h6>{item.name}</h6>
                            <p>{item.cost} сом</p>
                            <button className='delete_btn' id={item.id} onClick={this.props.deleteDish}>Delete</button>
                            <button className='edit_btn' id={item.id} onClick={this.props.editDish}>Edit</button>
                        </div>
                    ))}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dishMenu: state.dishes.dishMenu,
        loading: state.dishes.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        deleteDish: (e) => dispatch(deleteDish(e.currentTarget.id)),
        editDish: (e) => dispatch(editDishInState(e.currentTarget.id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesPage);