import React from "react";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList";

class App extends React.Component {

	componentDidMount() {
		this.props.fetchCats()
	}

	render() {
		return (
			<div>
				<h1>CatBook</h1>
				{this.props.loading ? <h3>Loading...</h3> : null}
				<CatList catPics={this.props.cats} />
			</div>
		)
	}

}

const mapStateToProps = ({ cats, loading }) => ({ cats, loading })

export default connect(mapStateToProps, { fetchCats })(App)
