"use strict";

var React = require('react');

var SwatchList = React.createClass({
	render: function(){
		var swatchNodes = this.props.swatches.map(function(swatch, i){
			var swatchStyle = {
				backgroundColor: swatch,
				width: "20%",
				display: "inline-block",
				color: "#fff",
				minHeight: "100px",
				lineHeight: "100px"
			};
			return (
				<div className="swatch" style={swatchStyle} key={i}>{swatch}</div>
			)
		});
		return (
			<div>
				{swatchNodes}
			</div>
		)
	}
});

module.exports = SwatchList;