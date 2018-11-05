// // TODO
// let Banana = () => (

//       <li>Banana</li>

// 	);

// let Apple = () => (

// 	<li>Apple</li>

// 	);

// let GroceryListItem = (props) => {

// 	var onListItemClick = (event) => {
// 		console.log("hello world");
// 	}

//   return (<ul>
// 	     	<li onClick = {onListItemClick} > {props.item[0]}</li>
// 	     	<li> {props.item[1]}</li>
// 	     </ul> );

// 	};


 // GroceryListItem component to return <li> element of the list with some of event 
class GroceryListItem extends React.Component {
 
	constructor (props) {
		super(props);
    // defined state with object has hover property
		this.state = {
			hover: false
		}
	}
  // method to setState if the mouse hover on the list
	onMouseEnter() {
		this.setState({	hover : true});
	}
  //method to setState if the mouse hover on the list
	onMouseLeave() {
		this.setState({	hover : false});
	}

  // render method to return the element
	render () {
		var style = {
			fontWeight: this.state.hover ? 'bold' : 'normal'
		}

		return (
			<li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
			  {this.props.items} 
			</li>
		);		
	
	}
}

// Grocery component to show all item in the list by using GroceryListItem component
class GroceryList extends React.Component {
	constructor(props) {
		super(props);
	}
	// render unorder list and using GroceryListItem component to do that.
	render () {
    return (
    //use the map to go over the array  that pass when call this component in the property items    
	   	<ul>   	
				{this.props.items.map( item =>	
					<GroceryListItem items={item}/>
				)}
	    </ul>
	  )
	}

}

// render the Grocery list on user interface and put the component int the index html
ReactDOM.render(<GroceryList items= {["Banana", "Apple", "tomato", "lemon"]} />, document.getElementById('app'));







