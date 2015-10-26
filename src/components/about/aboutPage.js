"use strict";

var React = require('react');

var About = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1>About</h1>
				<ul>
					<li>This is the </li>
					<li>about page for</li>
					<li>this test app</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;