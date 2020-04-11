import React, { Component} from "react"
import FilteredTable from './FilteredTable'

class Table extends Component{

    render(){
        return(
            <div id='c4' className='container'>
                <FilteredTable data={this.props.data}/>
            </div>
        );
    }

}

export default Table;