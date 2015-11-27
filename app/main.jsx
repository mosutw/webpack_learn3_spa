var React = require('react');
require('../styles/main.css');

var resolveRoute = function() {
    console.log('location:' + location.hash);
    if (!location.hash || location.hash.length === 1 ) {
        console.log('home');
        require.ensure([], function() {
            var Home = require('./Home.jsx');
            React.render(<Home />, document.getElementById('app'));
        });
    } else if (location.hash === '#admin') {
        console.log('admin');
        require.ensure([], function() {
            var Admin = require('./Admin.jsx');
            React.render(<Admin />, document.getElementById('app'));
        });
    }
};

window.onhashchange = resolveRoute;

resolveRoute();

//if (module.hot) {
//    module.hot.accept(resolveRoute);
//}
