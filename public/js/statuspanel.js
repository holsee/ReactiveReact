/** @jsx React.DOM */

//
// Components

var PriceBoard = React.createClass({displayName: 'PriceBoard',
  componentWillMount: function () {
    var _this = this;
    this.props.stream.subscribe(
      function (x) {
        _this.onData({ price: x });
      },
      function (err) {
        console.log('Error: ', err); 
        _this.setState({ status: 'err' });
      },
      function () {
        console.log('Completed');
        _this.setState({ status: 'closed' });
      });
  },
  getInitialState: function(){
    return {
      status: 'closed',
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
    //console.log(this.state);
    return (
      React.DOM.div( {className: 'status-' + this.state.status }, 
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
