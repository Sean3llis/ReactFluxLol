"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Velocity = require('../../velocity.min.js');

var SwatchBox = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return {swatches: []}
	},
	componentWillMount: function(){
		var fireBaseRef = new Firebase("https://incandescent-heat-7106.firebaseio.com/swatchLists");
		this.bindAsArray(fireBaseRef, 'swatchLists')
	},
	componentDidMount: function(){
		// component rendered to dom
		// var currentBox = ReactDOM.findDOMNode(this);
		// Velocity(currentBox, {
		// 	marginTop: "+=100px"
		// },
		// {
		// 	duration: 500,
		// 	easing: "ease-in-out"
		// })
	},
	deleteBox: function(e){
		var fireBaseRef = new Firebase("https://incandescent-heat-7106.firebaseio.com/swatchLists");
		// fireBaseRef.child
		console.log(e.target);
	},
	render: function(){
		var _this = this;
		var swatchNodes = this.props.data.swatches.map(function(swatch, i ){
			var swatchStyle = { backgroundColor: swatch };
			return (
				<div className="swatch" key={i} style={swatchStyle}>{swatch}</div>
			);
		});
		return (
			<div className="col-sm-4">
				<div className="panel swatchWrapper">
					<DeleteSwatchBox clickHandler={this.deleteBox} />
						{swatchNodes}
					<h1>{this.props.data.title}</h1>
				</div>
			</div>
		)
	}
});

var DeleteSwatchBox = React.createClass({
	render: function(){
		return (
			<div className="swatchDelete" onClick={ this.props.clickHandler }>
				+
			</div>
		);
	}
});

module.exports = SwatchBox;