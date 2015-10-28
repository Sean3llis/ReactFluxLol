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
	render: function(){
		var swatchNodes = this.props.data.swatches.map(function(swatch, i ){
			var swatchStyle = { backgroundColor: swatch };
			return (
				<div className="swatch" key={i} style={swatchStyle}>{swatch}</div>
			)
		});
		return (
			<div className="col-sm-4">
				<div className="panel swatchWrapper">
					<div className="swatchDelete">+</div>
						{swatchNodes}
					<h1>{this.props.data.title}</h1>
				</div>
			</div>
		)
	}
});

module.exports = SwatchBox;