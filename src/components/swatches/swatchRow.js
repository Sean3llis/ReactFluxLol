"use strict";

var React = require('react');
var SwatchBox = require('../swatches/swatchBox');

var SwatchRow = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return {swatchGroups: []}
	},
	componentWillMount: function(){
		var fireBaseRef = new Firebase("https://incandescent-heat-7106.firebaseio.com/swatchLists");
		this.bindAsArray(fireBaseRef, 'swatchGroups')
	},
	componentDidMount: function(){
		// component rendered to dom
	},
	render: function(){
		var swatchBoxes = this.state.swatchGroups.map(function(swatchObj){
			return (
				<SwatchBox key={swatchObj.key} data={swatchObj}/>
			);
		})
		return (
			<div>
				<h1>SwatchRow</h1>
				{swatchBoxes}
			</div>
		)
	}
});


module.exports = SwatchRow;