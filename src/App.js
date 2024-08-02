import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import imagess from "./assites/rjhs.png"

function App() {

  const [editMode, setEditMode] = useState(false)

  const [tableCount, setTableCount] = useState(0)

  const EditModeFun = () => {
    setEditMode((prev) => prev === "true" ? "false" : "true")
  }


  const tableCountFun = (e) => {
    let count = e.target.value
    let array = []
    for (let index = 0; index < count; index++) {
      array.push(<tr contenteditable={editMode} className='editable-table'>
        <td></td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td>   </td>
        <td> </td>
        <td> </td>
      </tr>)

    }
    setTableCount(array)

  }

  return (
    <div className="App">
      {editMode == "true" && <div>
        <h2>
          <center>
            Edit Mode is Activated - Happy Edit &#128522;
          </center>
        </h2>
        <div className='input-table' style={{ marginTop: "30px", marginBottom: "50px" }}>
          <center>
            <lable>Enter Table Size</lable>   <input type='number' onChange={(e) => tableCountFun(e)} placeholder='Enter table count' />
          </center>
        </div>
      </div>}

      <header className='main-header'>
        <div>
          <img src={imagess} />
        </div>
        <h4 contenteditable={editMode}>KRISHNA MEDICAL STORE(2025-2025)-BY-MAGHRAJ 9090909090 - (Daily issue/Receipt)</h4>
      </header>

      <div className='first-dev'>
        <ul>
          <li>Master</li>
          <li>Invoice</li>
          <li>Account</li>
          <li>Special</li>
          <li>Periodical</li>
          <li>Utility</li>
          <li>Printers</li>
          <li>ActiveWork</li>
          <li>Infoserver</li>
          <li onClick={(e) => EditModeFun(e)}>Exit</li>
        </ul>

      </div>

      <div className='second-dev'>
        <ul>
          <li>Master</li>
          <li>Invoice</li>
          <li>Account</li>
          <li>Special</li>
          <li className='unityUp'>Periodical</li>
          <li className='unity'><b> Utility </b></li>
          <li>Calculator</li>
          <li>Exit</li>
        </ul>

      </div>

      <div className='second-dev'>
        <ul>
          <li>Task</li>
          <li>AddressBook</li>
          <li>ProductInfo</li>
          <li>ProvPuchase</li>
          <li>Preferences</li>
          <li>Backup</li>
          <li>YearChange</li>
          <li>PIS</li>
        </ul>
      </div>

      <div className='fourth-dev'>

        <h2 contenteditable={editMode}><i> Daily Issue/Reciept </i></h2>
        <div className='buttons'>
          <button><span> R</span>eportView</button>
          <button><span>C</span>lose</button>
        </div>

      </div>


      <div className='table-first'>
        <table>
          <tr>
            <td>Date</td>
            <td>Party</td>
            <td>Bill#/Vou#</td>
            <td>Batch</td>
            <td>Rate</td>
            <td> Reciept </td>
            <td>Issue</td>
            <td>Balance</td>
          </tr>
          <tr  contenteditable={editMode}>
            <td className='tablate-name' style={{ borderRight: "none" }} >
              <b>
                SARTEL-40MG TAB., 15'S
              </b>
            </td>
          </tr>
          <tr className='red-table' contenteditable={editMode}>
            <td>20-20-24</td>
            <td> Opening Blance</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>   </td>
            <td> </td>
            <td> </td>
          </tr>
          {tableCount != 0 && tableCount}




        </table>
        <div className='greeyBg'>

        </div>



      </div> 

    </div>
  );
}

export default App;
