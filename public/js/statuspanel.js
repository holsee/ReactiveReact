/** @jsx React.DOM */
var StatusPanel = React.createClass({displayName: 'StatusPanel',
  render: function() {
    return (
      React.DOM.div( {className:"statusPanel"}, 
        Status( {status: this.props.status } )
      )
    );
  }
});

var Status = React.createClass({displayName: 'Status',
  render: function() {
    return (
      React.DOM.div( {className: 'status-' + this.props.status } )
    );
  }
});

var subject = new Rx.Subject();


var source = subject;

var subscription = subject.subscribe(
  function (x) {
    console.log('Subject States:', x);
    React.renderComponent(
      StatusPanel( { status: x } ),
      document.getElementById('content')
    );
  },
  function (err) {
    console.log('Error: ', err);   
  },
  function () {
    console.log('Completed');   
  });
