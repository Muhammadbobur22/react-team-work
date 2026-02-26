import React from 'react'
// import get1 from '../../src/assets/get1.png';
// import get2 from '../../src/assets/get2.png';
import './Expenses.css';

const data = [
  {
    h2: 'Expense Trend',
    button1: 'Last 8 Months ∨',
    h3: 'Expense Breakdown',
    p: '• • •',
    h4: 'Reimbursements Tracking',
    button2: 'This Week ∨',
    p1: 'Request ID ⇕',
    p2: 'Staff Name ⇕',
    p3: 'Amount ⇕',
    p4: 'Date Submitted ⇕',
    p5: 'Proof',
    p6: 'Status',
    data2: [
      {
        p1: 'RQ-3001',
        h1: 'Argen Maulie',
        p2: 'Mathematics',
        h2: '€ $120',
        p3: 'Books Purchase',
        h3: 'Mar 2, 2035',
        p4: '▯ View File',
        p5: 'Approved ',
      },
      {
        p1: 'RQ-3002',
        h1: 'Bella Cruz',
        p2: 'Science',
        h2: '€ $250',
        p3: 'Lab Equipment',
        h3: 'Mar 3, 2035',
        p4: '▯ View File',
        p5: 'Declined',
      },
      {
        p1: 'RQ-3003',
        h1: 'Francesca Gill',
        p2: 'Physical Ed.',
        h2: '€ $180',
        p3: 'Sports Supplies',
        h3: 'Mar 5, 2035',
        p4: '▯ View File',
        p5: 'Approved',
      },
      {
        p1: 'RQ-3004',
        h1: 'Dariah Ahmed',
        p2: 'Social Studies',
        h2: '€ $300',
        p3: 'Seminar Travel',
        h3: 'Mar 6, 2035',
        p4: '▯ View File',
        p5: 'Approved',
      },
      {
        p1: 'RQ-3005',
        h1: 'Esteban Parez',
        p2: 'Arts',
        h2: '€ $90',
        p3: 'Art Materials',
        h3: 'Mar 8, 2035',
        p4: '▯ View File',
        p5: 'Declined',
      },
    ],
    h5: 'Expenses',
    button3: 'All Categories ∨',
    button4: 'This Month ∨',
    p7: 'Expense ID ⇕',
    p8: 'Date ⇕',
    p9: 'Department ⇕',
    p10: 'Category ⇕',
    p11: 'Description ⇕',
    p12: 'Quantity ⇕',
    p13:'Amount ⇕',
    data3: [
      {
        p1: 'EX-5001',
        p2: 'Mar 1, 2035',
        p3: 'Mathematics',
        p4: '🛠️ Supplies',
        p5: 'Graphing calculators',
        p6: '15',
        p7: '$750',
      },
      {
        p1: 'EX-5002',
        p2: 'Mar 1, 2035',
        p3: 'Science',
        p4: '🛠️ Maintenance',
        p5: 'Lab equipment servicing',
        p6: '_',
        p7: '$1,200',
      },
      {
        p1: 'EX-5003',
        p2: 'Mar 2, 2035',
        p3: 'Language',
        p4: '🛠️ Supplies',
        p5: 'English literature textbooks',
        p6: '40',
        p7: '$1,000',
      },
      {
        p1: 'EX-5004',
        p2: 'Mar 3, 2035',
        p3: 'Social',
        p4: '🛠️ Events',
        p5: 'Field trip bus rental',
        p6: '2 buses',
        p7: '$900',
      },
      {
        p1: 'EX-5005',
        p2: 'Mar 3, 2035',
        p3: 'Arts',
        p4: '🛠️ Supplies',
        p5: 'Paint sets & brushes',
        p6: '25 sets',
        p7: '$600',
      },
      {
        p1: 'EX-5006',
        p2: 'Mar 4, 2035',
        p3: 'Physical Education',
        p4: '🛠️ Maintenance',
        p5: 'Gym floor repairs',
        p6: '_',
        p7: '$2,500',
      },
      {
        p1: 'EX-5007',
        p2: 'Mar 5, 2035',
        p3: 'Mathematics',
        p4: '🛠️ Salaries',
        p5: 'Monthly teacher salary',
        p6: '_',
        p7: '$5,000',
      },
      {
        p1: 'EX-5008',
        p2: 'Mar 6, 2035',
        p3: 'Science',
        p4: '🛠️ Salaries',
        p5: 'Monthly teacher salary',
        p6: '_',
        p7: '$5,000',
      },
    ],
    p14: '<',
    p15: '1',
    p16: '2',
    p17: '3',
    p18: '5',
    p19: '>',
  },
];

const Expenses = () => {
  return (
    <div className="expenses">
      {data.map((item, index) => {
        return (
          <div className="container">
            <div className="div1">
              <div className="div1-1">
                <div className="div1-1-1">
                  <div className='div1-1-1-div'>
                    <h2>{item.h2}</h2>
                    <button>{item.button1}</button>
                  </div>
                  <img src={get1} alt="" />
                </div>
                <div className="div1-1-2">
                  <div className='div1-1-1-div'>
                    <h2>{item.h3}</h2>
                    <p>{item.p}</p>
                  </div>
                  <img src={get2} alt="" />
                </div>
              </div>
              <div className='div1-2'>
                <div className='div1-1-1-div'>
                  <h2>{item.h4}</h2>
                  <button>{item.button2}</button>
                </div>
                <nav>
                  <ul className='div1-2-nav'>
                    <li className='div1-2-li'>
                      <p className='div1-2-li-p1'>{item.p1}</p>
                      <p className='div1-2-li-p2'>{item.p2}</p>
                      <p className='div1-2-li-p3'>{item.p3}</p>
                      <p className='div1-2-li-p4'>{item.p4}</p>
                      <p className='div1-2-li-p5'>{item.p5}</p>
                      <p className='div1-2-li-p6'>{item.p6}</p>
                    </li>
                    {item.data2.map((items, indexs) => {
                      return (
                        <li className='div1-2-li2'>
                          <p className='div1-2-li2-p1'>{items.p1}</p>
                          <div className='div1-2-li2-div1'>
                            <h4 className='div1-2-li2-h'>{items.h1}</h4>
                            <p>{items.p2}</p>
                          </div>
                          <div className='div1-2-li2-div2'>
                            <h4 className='div1-2-li2-p2'>{items.h2}</h4>
                            <p>{items.p3}</p>
                          </div>
                          <p className='div1-2-li2-p3'>{items.h3}</p>
                          <p className='div1-2-li2-p4'>{items.p4}</p>
                          <p className='div1-2-li2-p5'>{items.p5}</p>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </div>
            <div className='div2'>
              <div div className='div1-1-1-div'>
                <h2>{item.h5}</h2>
                <div className='div2-1'>
                  <button>{item.button3}</button>
                  <button>{item.button4}</button>
                </div>
              </div>
              <nav>
                <ul className='div2-2-nav'>
                  <li className='div2-2-li'>
                    <p className='div2-2-li-p1-1'>{item.p7}</p>
                    <p className='div2-2-li-p2-1'>{item.p8}</p>
                    <p className='div2-2-li-p3-1'>{item.p9}</p>
                    <p className='div2-2-li-p4-1'>{item.p10}</p>
                    <p className='div2-2-li-p5-1'>{item.p11}</p>
                    <p className='div2-2-li-p6-1'>{item.p12}</p>
                    <p className='div2-2-li-p7-1'>{item.p13}</p>
                  </li>
                  {item.data3.map((iteml, indexl) => {
                    return (
                      <li className='div2-2-li2'>
                        <p className='div2-2-li-p1'>{iteml.p1}</p>
                        <p className='div2-2-li-p2'>{iteml.p2}</p>
                        <p className='div2-2-li-p3'>{iteml.p3}</p>
                        <p className='div2-2-li-p4'><a>{iteml.p4}</a></p>
                        <p className='div2-2-li-p5'>{iteml.p5}</p>
                        <p className='div2-2-li-p6'>{iteml.p6}</p>
                        <p className='div2-2-li-p7'>{iteml.p7}</p>
                      </li>
                    )
                  })}
                  <div className='div2-2-li3'>
                    <h3>Show <input type='text' placeholder='   8 ∨'/> of 40 results</h3>
                    <div>
                      <p className='div2-2-li2-p1'>{item.p14}</p>
                      <p className='div2-2-li2-p2'>{item.p15}</p>
                      <p className='div2-2-li2-p3'>{item.p16}</p>
                      <p className='div2-2-li2-p3'>{item.p17}</p>
                      <p className='div2-2-li2-p3'>{item.p18}</p>
                      <p className='div2-2-li2-p3'>{item.p19}</p>   
                    </div>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Expenses;
