"use strict";

var React = require('react');

var Header = React.createClass({
	render: function(){
		return (
			<nav>
				<ul className="list-inline">
					<li><a href="/">Home</a></li>
					<li><a href="#swatches">Swatches</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/">Link</a></li>
				</ul>
			</nav>
		);
	}
});

module.exports = Header;