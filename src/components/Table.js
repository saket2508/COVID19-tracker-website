import React, { Component} from "react"
import FilteredTable from './FilteredTable'


class Table extends Component{
   constructor(props){
       super(props)

   }

    render(){
        return(
            <div className='container'>
                <FilteredTable DataCountries={this.props.DataCountries} sortValues={this.props.sortValues} changeContinent={this.props.changeContinent} data={this.props.data} dataw= {this.props.dataw} list={this.props.list}/>
            </div>
        );
    }

}

export default Table;