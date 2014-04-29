/** @jsx React.DOM */
var StatusPanel = React.createClass({
  render: function() {
    return (
      <div className="statusPanel">
        {this.props.data}
      </div>
    );
  }
});

React.renderComponent(
  <StatusPanel data="hai"/>,
  document.getElementById('content')
);

React.renderComponent(
  <StatusPanel data="ho"/>,
  document.getElementById('content')
);
