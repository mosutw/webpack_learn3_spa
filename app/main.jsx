var React = require('react');
require('../styles/main.css');

var resolveRoute = function() {
    if (!location.hash || location.hash === 1 ) {
        require.ensure([], function() {
            var Home = require('./Home.jsx');
            React.render(Home(), document.getElementById('app'));
        });
    } else if (location.hash === '#admin') {
        require.ensure([], function() {
            var Admin = require('./Admin.jsx');
            React.render(Admin(), document.getElementById('app'));
        });
    }
};

window.onhashchange = resolveRoute;

resolveRoute();

if (module.hot) {
    module.hot.accept(resolveRoute);
}
