"use strict";

var React = require('react');

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
	},
	render: function(){
		var swatchNodes = this.props.data.swatches.map(function(swatch, i ){
			console.log(swatch);
			var swatchStyle = {
				backgroundColor: swatch,
				width: "20%",
				minHeight: "100px",
				lineHeight: "100px",
				color: "#fff",
				display: "inline-block"
			};
			return (
				<div className="swatch" style={swatchStyle}>{swatch}</div>
			)
		});
		return (
			<div className="col-sm-4">
				<div className="panel">
					<div className="swatchWrapper">
						{swatchNodes}
					</div>
					<h1>{this.props.data.title}</h1>
				</div>
			</div>
		)
	}
});


module.exports = SwatchBox;