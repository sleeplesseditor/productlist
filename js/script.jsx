var Product = React.createClass({
  
  getInitialState: function(){
    //Return the object of the state.
    return {qty:0};
  },
  
  buy: function(){
    this.setState({qty:this.state.qty + 1});
    this.props.handleTotal(this.props.price);
    //alert(this.state.qty);
  },
  
  
  show:function(){
    this.props.childShow(this.props.name,this.props.price);
  },
  
  render: function(){
    return (
      <div>
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>
        <button onClick = {this.show}>Show</button>
        <h3>Qty: {this.state.qty} items</h3>
        <hr/>
      </div>
    );
  }
});

var Total = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Total Cash: ${this.props.total}</h3>
      </div>
    );
  }
});

var ProductList = React.createClass({
  
  getInitialState: function(){
    return {
      total:0,
      productList:[
        {name:"Android", price: 121},
        {name:"iPhone", price: 123},
        {name:"Nokia", price: 65}
      ]
    };
  },
  
  calculateTotal: function(price){
    this.setState({total: this.state.total + price});
  },
  
  showDetails:function(name,price){
    alert(name + " " + price);
  },
  
  render: function(){
    var com = this;
    var products = this.state.productList.map(function(product){
      return (
        <Product name={product.name} price={product.price}
        childShow = {com.showDetails}
        handleTotal={com.calculateTotal}/>
      );
    });
    
   return (
      <div>
        {products}    
        <Total total = {this.state.total}/>
      </div>
    );
  }
});

ReactDOM.render(<ProductList/>, document.getElementById("root"));