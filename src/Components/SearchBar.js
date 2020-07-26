import React, { Component } from 'react'

class SearchBar extends Component{
    
    state = { term :' '}

    onTermChange = (event) =>{
        this.setState({term:event.target.value})
    }

    onTermSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
    
    render(){
        return(
            <div className="ui segment">
            <form className="ui form" onSubmit={this.onTermSubmit}>
                <div className="field">
                    <label>Search Video</label>
                    <input type="text" 
                           value={this.state.term}
                           onChange={this.onTermChange}
                     />
                </div>
            </form>
            </div>
        )
    }
}

export default SearchBar;