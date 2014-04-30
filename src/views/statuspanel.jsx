/** @jsx React.DOM */

//
// Components

var StatusPanel = React.createClass({
  getInitialState: function(){
    return {
      status: 'up',
      price: 0.0
    };
  },
  onData: function(data){
    var status = this.state.price > data.price ? 'up' : 'down';
    this.setState({status: status, price: data.price});
  },
  render: function() {
    return (
      <div className="statusPanel">
        <Status status={ this.state.status } price={ this.state.price } />
      </div>
    );
  }
});

var Status = React.createClass({
  render: function() {
    return (
      <div className={ 'status-' + this.props.status } >{this.props.price}</div>
    );
  }
});

var statusPanel = StatusPanel();
React.renderComponent(
  statusPanel,
  document.getElementById('content')
);

//
// Streams

// Initially has value open...
var subject = new Rx.BehaviorSubject();

var source = subject;
var subscription = source.subscribe(
  function (x) {
    console.log('Subject States:', x);
    statusPanel.onData({ price: x });
  },
  function (err) {
    console.log('Error: ', err);   
  },
  function () {
    console.log('Completed');   
  });

// ... later this is changed to matched.
//subject.onNext('matched'); 
//subject.onCompleted();