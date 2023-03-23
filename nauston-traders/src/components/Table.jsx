import React,{useState,useEffect} from 'react';
import './Table.css';
import axios from 'axios';

const Table = () => {

    const [tableData, setTableData ] =  useState('');

    

    useEffect(() => {
       const fetchData =async () => {
        const response =await axios.get("http://localhost:4000/data");
      console.log(response);
        setTableData(response.data);
       }
       fetchData();
    }, []);
    
    return (
        <div>
            <div className='title' > 
        <div className='data heading'>No </div>
        <div className='data heading'>Account NO. </div>
        <div className='data heading'>Division </div>
        <div className='data heading'>Country </div>
        <div className='data heading'>Legacy No. </div>
        <div className='data heading'>Legacy Division </div>
        <div className='data heading '>Action</div>
       </div>
      

      
        

        {tableData&&tableData.map(({no,account_no,division,country,legacy_no,legacy_division},index)=>{
            return (
                <div className='title ' key={index}>
        <div className=' heading data'>{no} </div>
        <div className=' heading data'>{account_no} </div>
        <div className=' heading data'>{division} </div>
        <div className=' heading data'>{country} </div>
        <div className=' heading data'>{legacy_no} </div>
        <div className=' heading data'>{legacy_division} </div>
        <div className=' heading data'><button className='btn-edit'>Edit</button></div>
        </div>
        )
        }) }
      
      
 
       
        
      </div>
      
    );
}

export default Table;
