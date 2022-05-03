import React, {Component, PropTypes} from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import './App.css';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 5, 10);
       
        pdf.output('dataurlnewwindow');
        // pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (<div>
      
      <div className="mb-5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint" className="mt-4">
    
      <div>------ARJ Tech Milktea------</div>
     <table className=''>
       <thead>
         <tr>
         <th className="heading name">Item</th>
        <th className="heading qty">Qty</th>
        <th className="heading rate">Size</th>
        <th className="heading amount">Amount</th>
       </tr>
       </thead>
       <tbody>
       <tr>
              <td>Chocolate</td>
              <td>1</td>
              <td className="price">S</td>
              <td className="price">200.00</td>
        </tr>
        <tr>
              <td>Chocolate</td>
              <td>1</td>
              <td className="price">M</td>
              <td className="price">200.00</td>
        </tr>
        <tr>
              <td>Chocolate</td>
              <td>1</td>
              <td className="price">L</td>
              <td className="price">200.00</td>
        </tr>
        <tr>
              <td>Chocolate</td>
              <td>1</td>
              <td className="price">L</td>
              <td className="price">200.00</td>
        </tr>
        
        <tr>
              <td colSpan={3}  className="total text"><strong>Total Due</strong></td>
              <td className="total price">600</td>
        </tr>
        <tr>
              <td colSpan={3} className="total text">Cash</td>
              <td className="total price">1000</td>
        </tr>
        <tr>
              <td colSpan={3} className="total text">Change</td>
              <td className="total price">400</td>
        </tr>
         <tr>
              <td colSpan={3} className="total text">Change</td>
              <td className="total price">400</td>
        </tr>
       </tbody>
     </table>
     <div>***** THANK YOU AND *****</div>
     <div>*** PLEASE COME AGAIN ***</div>
     
        {/* <div>GST Number : 4910487129047124</div>
        <div>
          <table className="bill-details">
          <tbody>
            <tr>
              <td>Date : <span>1</span></td>
              <td>Time : <span>2</span></td>
            </tr>
            <tr>
              <td>Table #: <span>3</span></td>
              <td>Bill # : <span>4</span></td>
            </tr>
            <tr>
              <th className="center-align" colSpan={2}><span className="receipt">Not Official Receipt</span></th>
            </tr>
          </tbody>
        </table>
        </div>
        
        <div>
           <table className="items">
          <thead>
            <tr>
              <th className="heading name">Item</th>
              <th className="heading qty">Qty</th>
              <th className="heading rate">Size</th>
              <th className="heading amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chocolate milkshake frappe</td>
              <td>1</td>
              <td className="price">200.00</td>
              <td className="price">200.00</td>
            </tr>
            <tr>
              <td>Non-Veg Focaccoa S/W</td>
              <td>2</td>
              <td className="price">300.00</td>
              <td className="price">600.00</td>
            </tr>
            <tr>
              <td>Classic mojito</td>
              <td>1</td>
              <td className="price">800.00</td>
              <td className="price">800.00</td>
            </tr>
            <tr>
              <td>Non-Veg Ciabatta S/W</td>
              <td>1</td>
              <td className="price">500.00</td>
              <td className="price">500.00</td>
            </tr>
            <tr>
              <td colSpan={3} className="sum-up line">Subtotal</td>
              <td className="line price">12112.00</td>
            </tr>
            <tr>
              <td colSpan={3} className="sum-up">CGST</td>
              <td className="price">10.00</td>
            </tr>
            <tr>
              <td colSpan={3} className="sum-up">SGST</td>
              <td className="price">10.00</td>
            </tr>
            <tr>
              <th colSpan={3} className="total text">Total</th>
              <th className="total price">12132.00</th>
            </tr>
          </tbody>
        </table>
        </div> */}
       
      </div>
    
      
     
    </div>);
  }
}