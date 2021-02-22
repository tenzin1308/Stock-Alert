import React from 'react';
import './Stock.css';
import './Floating_Button.css';


// class FloatingMenuItem extends React.Component {

// 	handleClick() {
// 		this.props.action();
// 	}
	
// 	render() {
// 		let buttonStyle = {
// 			backgroundImage: `url(${this.props.icon})`
// 		}
		
// 		let label;
		
// 		if (this.props.label) {
// 			label = <label>{this.props.label}</label>;
// 		}
		
// 		return <div
// 					onClick={this.handleClick.bind(this)}
// 					className="floating-menu-item">
// 				  {label}
// 				  <div className="floating-menu-icon"><i className="material-icons">{this.props.icon}</i></div>
// 			  </div>;
// 	}
// }

// class FloatingMenu extends React.Component {
// 	constructor() {
// 		super();
		
// 		this.state = {
// 			toggled: false
// 		}
// 	}
	
// 	toggleMenu() {
// 		this.setState({toggled: !this.state.toggled});
// 	}
	
// 	render() {
// 		let buttons = [];
// 		let className = "floating-menu";
// 		let icon = "";
		
// 		if (this.state.toggled) {
// 			className += " open";
// 			icon = "clear";
// 			buttons.push(
// 					<FloatingMenuItem label="Item 1" icon="" action="" key="i1"/>);
// 			buttons.push(
// 					<FloatingMenuItem label="Item 2" icon="" action="" key="i2"/>);
// 		}
		
// 		buttons.push(<FloatingMenuItem label="" icon={icon} action={this.toggleMenu.bind(this)} key="m"/>); 
		
// 		return <div className="container">
// 			<div className={className}>
// 			{buttons}
// 		</div>
// 			</div>;
// 	}
// }



 const Stock_Detail = ({image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className="details">

            {/* // description container */}
            <div className="detail-container">
                <div className="detail-header">
                    <img src={image} className="detail-header-icon"/>
                    <h4 className="detail-header-name">{name}</h4>
                    
                </div>
                <hr />
                <div className="detail-body">
                    <div className="detail-body-item">
                        <p className="detail-body-item-label">Symbol</p>
                        <p className="detail-body-item-value">{symbol.toUpperCase()}</p>
                    </div>
                    <div className="detail-body-item">
                        <p className="detail-body-item-label">Price</p>
                        <p className="detail-body-item-value">${price}</p>
                    </div>
                    <div className="detail-body-item">
                        <p className="detail-body-item-label">Price Change</p>
                        <p className="detail-body-item-value">
                            {priceChange < 0 ? (
                                <p className="stock-percent-red">{parseFloat(priceChange).toFixed(2)}%</p>
                            ) : (
                                <p className="stock-percent-green">{parseFloat(priceChange).toFixed(2)}%</p>
                            )}
                        </p>
                    </div>
                    <div className="detail-body-item">
                        <p className="detail-body-item-label">Volume</p>
                        <p className="detail-body-item-value">${volume}</p>
                    </div>
                    <div className="detail-body-item">
                        <p className="detail-body-item-label">Market Cap</p>
                        <p className="detail-body-item-value">${marketcap}</p>
                    </div>
                </div>

            </div>

        {/* Graph Container */}

        <div className="graph-container">
            <div className="graph">
                                <h1>something</h1>
            </div>
            <hr />
            <div className="graph-timeline">
                <p>1D</p>&nbsp;<p>1W</p>&nbsp;<p>1M</p>&nbsp;<p>3M</p>&nbsp;<p>1Y</p>&nbsp;<p>5D</p>
            </div>
        </div>

        {/* // floating button */}
        {/* <FloatingMenu />, */}


    </div>
    )
}

export default Stock_Detail