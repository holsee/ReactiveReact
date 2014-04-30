/** @jsx React.DOM */

//
// Components

var PriceBoard = React.createClass({displayName: 'PriceBoard',
  getInitialState: function(){
    return {
      status: 'up',
      price: 0.0
    };
  },
  onData: function(data){
    this.setState({
      status: (this.state.price < data.price ? 'up' : 'down'), 
      price: data.price
    });
  },
  render: function() {
    console.log(this.state);
    return (
      React.DOM.div( {className: 'status-' + this.state.status }, 
        Price( {value:this.state.price}),React.DOM.br(null),
        Price( {value:this.state.price}),
        Price( {value:this.state.price})
      )
    );
  }
});

var Price = React.createClass({displayName: 'Price',
  render: function() {
    return (
      React.DOM.div(null, this.props.value)
    );
  }
});

var priceBoard = PriceBoard();
React.renderComponent(
  priceBoard,
  document.getElementById('content')
);

//
// Streams

// Initially has value open...
var subject = new Rx.Subject();

var source = subject;
var subscription = source.subscribe(
  function (x) {
    console.log('Subject States:', x);
    priceBoard.onData({ price: x });
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