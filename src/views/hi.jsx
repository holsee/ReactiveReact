  /** @jsx React.DOM */
  React.renderComponent(
    <h1 id='title'>Hello, world!</h1>,
    document.getElementById('example'),
    function(){ 
      Rx.Observable.range(0, 100000).subscribe(function(x) {
        document.getElementById('title').innerHTML  = x;
      });
    }
  );