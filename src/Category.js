import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';

const list = [
    { name: 'HOME'},
    { name: 'ONEZERO', url:'/CategoryPage'}, 
    { name: 'ELEMENTAL'},
    { name: 'GEN'}, 
    { name: 'ZORA'}, 
    { name: 'FORGE'},
    { name: 'HUMAN'}, 
    { name: 'PARTS'}, 
    { name: 'MARKER'},
    { name: 'LEVEL'}, 
    { name: 'HEATED'}, 
    { name: 'MODUS'}, 
    { name: 'MORE'}
];

const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };

export const Menu = (list, selected) => list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected}></MenuItem>;
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