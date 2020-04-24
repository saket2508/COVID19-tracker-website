import React, { Component, Fragment} from "react"

function TableHeader(props){
    const tableheader=(
        <Fragment>
        <thead className='thead-dark'>
            <td>Location</td>
            <td>Confirmed</td>
            <td>Deaths</td>
            <td>Recovered</td>
            <td>Active</td>
            <td>Critical</td>
            <td>Cases/1M People</td>
        </thead>
        <tr className="table-secondary">
            <td style={{fontWeight:"500"}}>Worldwide</td>
            <td style={{fontWeight:"500"}}>{props.data.Cases}</td>
            <td style={{fontWeight:"500"}}>{props.data.Deaths}</td>
            <td style={{fontWeight:"500"}}>{props.data.Recovered}</td>
            <td style={{fontWeight:"500"}}>{props.data.Active}</td>
            <td style={{fontWeight:"500"}}>{props.data.Critical}</td>
            <td style={{fontWeight:"500"}}>{props.data.casespermillion}</td>
        </tr>
        </Fragment>
    );
    return tableheader;
}

class FilteredTable extends Component{
    constructor(props){
        super(props);
        this.state={
            filterStr:""
        }
    }
    checkConfirmedValue= (item) =>{
        if(item.todayCases >0){
                return <small><span class="badge badge-pill badge-secondary">{'+'+item.todayCases}</span></small>
        }
    }
    checkDeathsValue = (item) =>{
        if(item.todayDeaths >0){
            return <small><span class="badge badge-pill badge-danger">{'+'+item.todayDeaths}</span></small>
        }
    }
    checkCountryName = (item) =>{
        if(item.country==="Lao People's Democratic Republic"){
            item.country='Laos'
            return <td id='statename'><span class="mr-1"><img src={"https://www.countryflags.io/"+item.countryInfo.iso2+"/flat/32.png"} alt='flag-icon'></img></span> {item.country}</td>
        }
        if(item.country==="USA"){
            item.country= 'United States'
            return <td id='statename'><span class="mr-1"><img src={"https://www.countryflags.io/"+item.countryInfo.iso2+"/flat/32.png"} alt='flag-icon'></img></span> {item.country}</td>
        }
        if(item.country==="UK"){
            item.country='United Kingdom'
            return <td id='statename'><span class="mr-1"><img src={"https://www.countryflags.io/"+item.countryInfo.iso2+"/flat/32.png"} alt='flag-icon'></img></span> {item.country}</td>
        }
       if(item.country.length > 18){
           return <td><span class="mr-1"><img src={"https://www.countryflags.io/"+item.countryInfo.iso2+"/flat/32.png"} alt='flag-icon'></img></span> {item.country}</td>
       }
        if(item.country==="MS Zaandam"){
            return <td>{item.country}</td>
        }
        if(item.country==="Diamond Princess"){
            return <td>{item.country}</td>
        }
        else{
            return <td id='statename'><span class="mr-1"><img src={"https://www.countryflags.io/"+item.countryInfo.iso2+"/flat/32.png"} alt='flag-icon'></img></span> {item.country}</td>
        }
    }
    render(){
        const elements= this.props.data;
        const filtertStr= this.state.filterStr;

        const filteredElements=(
            elements.filter(e => e.country.toLowerCase().includes(filtertStr.toLowerCase()))
        )
        
        var tableBody=(
                <tbody>
                        {filteredElements.map((item) =>
                            (
                                <tr>
                                   {this.checkCountryName(item)}
                                    <td id='nowrap'> {item.cases} 
                                        {this.checkConfirmedValue(item)}
                                    </td>
                                    <td id='nowrap'>{item.deaths}
                                        {this.checkDeathsValue(item)}
                                    </td> 
                                    <td id='nowrap'>{item.recovered}</td>
                                    <td id='nowrap'>{item.active}</td>
                                    <td id='nowrap'>{item.critical}</td>
                                    <td id='nowrap'>{item.casesPerOneMillion}</td>
                                </tr>
                            ))}
                </tbody>
        )

        if(filteredElements.length===0){
            tableBody=(
                    <td colSpan='7' bgcolor='#ffcdd2'>
                        <p className='small text-danger'>NO MATCHING RECORDS FOUND</p>
                    </td>
            )
        }

        return(
            <div className='FilteredTable'>
            <p className='text-center text-muted' style={{fontWeight:'500'}}>CONFIRMED CASES AND DEATHS BY COUNTRY</p>
            <div className='container-lg'>
                <div class="d-flex justify-content-center mt-2 mb-3">
                    <div class='col-9'>
                        <input type="text" 
                                class="form-control" 
                                value={filtertStr} 
                                placeholder="Search A Country..."
                                onChange={ e => this.setState({ filterStr: e.target.value }) }/>
                    </div>
                </div>
            </div>
              <div className='table-responsive-sm'>
                    <table class="table table-sm">
                        <TableHeader data= {this.props.dataw}/>
                        {tableBody}
                    </table>
                </div>   
            </div>
        );
    }
}

export default FilteredTable