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



class GroceryListItem extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			hover: false
		}
	}

	onMouseEnter() {
		this.setState({	hover : true});
	}

	onMouseLeave() {
		this.setState({	hover : false});
	}

   
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


class GroceryList extends React.Component {
	constructor(props) {
		super(props);
	}
	 render () {
     return (  
	   		<ul>
				  {this.props.items.map( item =>	
					  <GroceryListItem items={item}/>
				  )}
	      </ul>
	   )
	}

}


ReactDOM.render(<GroceryList items= {["Banana", "Apple", "tomato", "lemon"]} />, document.getElementById('app'));







