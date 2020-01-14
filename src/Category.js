import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { getCategories } from "./_actions/category";


const MenuItem = ({text, selected, url}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };
  
export const Menu = (category, selected) => category.map(el => {
    const {name} = el;
    if(el.id === 0){
        return <Link to={'/Home'}><MenuItem text={name} key={name} selected={selected}></MenuItem></Link>;
    }else{
        return <Link to={`category_page/${el.id}/article`}><MenuItem text={name} key={name} selected={selected}></MenuItem></Link>;
    }
});

const Arrow = ({ text, className}) => {
    return (
        <div className={className}>{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev'});
const ArrowRight = Arrow({ text: '>', className: 'arrow-next'});

const selected = 'HOME';

class Category extends Component {
    constructor(props) {
        super(props);
        // this.menuItems = Menu(list, selected);
    }

    state = {
        selected,
        // category: this.props.category.category
    };

    componentDidMount() {
        this.props.dispatch(getCategories());
      }

    onSelect = key => {
        this.setState({ selected: key});
    }

    render() {
        const {selected} = this.state; 
        const category = this.props.category.dataCategory;

        // const menu = this.menuItems;

        return (
            <div className="Category">
                <ScrollMenu
                    data={Menu(category, selected)}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                ></ScrollMenu>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      category: state.category
    };
  };
  
export default connect(mapStateToProps)(Category);