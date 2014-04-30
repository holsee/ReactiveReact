/** @jsx React.DOM */

//
// Components

var PriceBoard = React.createClass({
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
      <div className={ 'status-' + this.state.status }>
        <Price value={this.state.price}/>
      </div>
    );
  }
});

var Price = React.createClass({
  render: function() {
    return (
      <div>{this.props.value}</div>
    );
  }
});
