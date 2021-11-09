import '../App.css';
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Table from 'react-bootstrap/Table'




export default class URLTable extends Component {

  constructor() {
    super();
}

  render(){
    return (
     <div className="App-header">
       <header className="App-header">
          <Table striped bordered hover size="sm">
            <thead style={{ background: '#47597E' }}>
              <tr>
                <th style={{fontWeight: 'normal',color: "#FFFFFF",}}>Long URL</th>
                <th style={{fontWeight: 'normal',color: "#FFFFFF",}}>Shortened URL</th>
                <th style={{fontWeight: 'normal',color: "#FFFFFF",}}>Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
       </header>
     </div>
    );
  }
 
}