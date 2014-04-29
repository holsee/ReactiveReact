/** @jsx React.DOM */
var StatusPanel = React.createClass({displayName: 'StatusPanel',
  render: function() {
    return (
      React.DOM.div( {className:"statusPanel"}, 
        this.props.data
      )
    );
  }
});

React.renderComponent(
  StatusPanel( {data:"hai"}),
  document.getElementById('content')
);

var source = Rx.Observable
    .interval(500 /* ms */)
    .timeInterval()
    .take(10);

var subscription = source.subscribe(
function (x) {
  React.renderComponent(
    StatusPanel( {data:x}),
    document.getElementById('content')
  );
},
function (err) {
    console.log('Error: ' , err);   
},
function () {
  React.renderComponent(
    StatusPanel( {data:"FIN"}),
    document.getElementById('content')
  );
});