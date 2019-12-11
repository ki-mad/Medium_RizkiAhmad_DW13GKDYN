import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';
import {Link} from 'react-router-dom';

const list = [
    { name: 'HOME', url:'/Home'},
    { name: 'ONEZERO', url:'/CategoryPage'}, 
    { name: 'ELEMENTAL', url:'/Regis'},
    { name: 'GEN', url:'/'}, 
    { name: 'ZORA', url:'/'}, 
    { name: 'FORGE', url:'/'},
    { name: 'HUMAN', url:'/'}, 
    { name: 'PARTS', url:'/'}, 
    { name: 'MARKER', url:'/'},
    { name: 'LEVEL', url:'/'}, 
    { name: 'HEATED', url:'/'}, 
    { name: 'MODUS', url:'/'}, 
    { name: 'MORE', url:'/'}
];

const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };

export const Menu = (list, selected) => list.map(el => {
    const {name} = el;
    const {url} = el;

    return <Link to={url}><MenuItem text={name} key={name} selected={selected}></MenuItem></Link>;
});

const Arrow = ({ text, className}) => {
    return (
        <div className={className}>{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev'});
const ArrowRight = Arrow({ text: '>', className: 'arrow-next'});

const selected = 'HOME';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key});
    }

    render() {
        const {selected} = this.state;

        const menu = this.menuItems;

        return (
            <div className="Category">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                ></ScrollMenu>
            </div>
        );
    }
}