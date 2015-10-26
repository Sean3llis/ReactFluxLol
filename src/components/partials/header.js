"use strict";

var React = require('react');

var Header = React.createClass({
	render: function(){
		return (
			<nav>
				<ul className="list-inline">
					<li>link</li>
					<li>link</li>
					<li>link</li>
					<li>link</li>
				</ul>
			</nav>
		);
	}
});

module.exports = Header;