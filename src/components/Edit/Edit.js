import React, {Component} from 'react';
import {addNewDish, postDishes} from "../../store/actions/dishAction";
import {connect} from "react-redux";

class Edit extends Component {



    render () {
    return (
        <div className='edit'>
            <form className='add_form'>
                <input type="text" name='name' onChange={this.props.editValue} value={this.props.itemToEdit.name}
                       placeholder='Название блюда'/>
                <input type="text" name='url' onChange={this.props.editValue} value={this.props.itemToEdit.url}
                       placeholder='url кртинки'/>
                <input type="text" name='cost' onChange={this.props.editValue} value={this.props.itemToEdit.cost}
                       placeholder='цена блюда'/>
                <button className="btn-addTask" type="submit" onClick={props.submitNewDish}>Add New Dish</button>
            </form>
        </div>
    );
    }
};

const mapStateToProps = state => {
    return {
        itemToEdit: state.dishes.dishMenu,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editValue: (e) => dispatch(addNewDish(e.currentTarget)),
        submitNewDish: (e) => dispatch(postDishes(e)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);