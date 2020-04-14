import React, { Component} from "react"

function TableHeader(){
    const tableheader=(
        <thead className='thead'>
            <th scope='col'>State</th>
            <th scope='col'>Confirmed Cases</th>
            <th scope='col'>Deaths</th>
            <th scope='col'>Recovered</th>
            <th scope='col'>Active Cases</th>
        </thead>
    );
    return tableheader;
}

class FilteredTableIndia extends Component{
    constructor(props){
        super(props);
        this.state={
            filterStr:""
        }
    }
    render(){
        const elements= this.props.data;
        const filtertStr= this.state.filterStr;

        const filteredElements=(
            elements.filter(e => e.state.toLowerCase().includes(filtertStr.toLowerCase()))
        )
        var tableBody=(
            <tbody>
            {filteredElements.map((item) =>
            (
                <tr>
                    <th scope='row'>{item.state}</th>
                    <td>{item.confirmed} <span class="badge badge-pill badge-secondary">{'+'}{item.deltaconfirmed}</span></td>
                    <td>{item.deaths} <span class="badge badge-pill badge-danger">{'+'}{item.deltadeaths}</span></td> 
                    <td>{item.recovered} <span class="badge badge-pill badge-success">{'+'}{item.deltarecovered}</span></td>
                    <td>{item.active}</td>
                </tr>
            ))}
        </tbody>
        )

        if(filteredElements.length===0){
            tableBody=(
                    <td colSpan='5' bgcolor="#ffcdd2">
                        <p className='small text-danger'>NO MATCHING RECORDS FOUND</p>
                    </td>
            )
        }

        return(
            <div className='FilteredTable'>
            <h4 className='text-center text-muted' style={{fontWeight:'400'}}>CONFIRMED CASES AND DEATHS BY STATE</h4>
            <div className='container-lg'>
                <div class="d-flex justify-content-center mt-2 mb-3">
                    <p className='small text-info mt-2'>SEARCH A STATE</p>
                    <div class='col-5'>
                        <input type="text" 
                                class="form-control" 
                                value={filtertStr} 
                                placeholder="State..."
                                onChange={ e => this.setState({ filterStr: e.target.value }) }/>
                    </div>
                </div>
            </div>
        
              <div className='table-responsive'>
                    <table class="table table-bordered table-striped">
                        <TableHeader/>
                            {tableBody}
                    </table>
                </div>   
            </div>
        );
    }
}

export default FilteredTableIndia