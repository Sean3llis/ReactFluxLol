"use strict";

var React = require('react');
var SwatchList = require('../swatches/swatchList');

var SwatchBox = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return {swatches: []}
	},
	componentWillMount: function(){
		var fireBaseRef = new Firebase("https://incandescent-heat-7106.firebaseio.com/kitty");
		console.log(fireBaseRef);
	},
	componentDidMount: function(){
		this.setState({
			swatches: ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A"]
		})
	},
	render: function(){

		return (
			<div className="panel">
				<div className="swatches">
					<SwatchList swatches={this.state.swatches} />
				</div>
				<div>
					<h3>Swatch Group</h3>
				</div>
			</div>
		)
	}
});


module.exports = SwatchBox;