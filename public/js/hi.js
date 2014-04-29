  /** @jsx React.DOM */
  React.renderComponent(
    React.DOM.h1( {id:"title"}, "Hello, world!"),
    document.getElementById('example'),
    function(){ 
      Rx.Observable.range(0, 100000).subscribe(function(x) {
        document.getElementById('title').innerHTML  = x;
      });
    }
  );