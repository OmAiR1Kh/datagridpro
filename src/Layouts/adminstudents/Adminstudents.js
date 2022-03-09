import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import './Adminstudents.css'

const AdminStudents = () => {
    const { data } = useDemoData({
        dataSet: 'Student',
        rowLength: 100,
        editable: true,
      });
    
      return (
          <>
          <div className="container-all">
            <div className='header'>
                <div className='header-content'>
                    
                </div>
            </div>
            <div className="container">
                <div className='card'>
                    <div className='card-header'>
                        <p>Welcome Admin</p>
                    </div>
                    <div className='card-btn btn1'>
                        <button type="button" style={{background: 'rgb(243, 243, 243)'}}>Students</button>
                    </div>
                    <div className='card-btn btn2'>
                    <button type="button" style={{background: 'rgb(205, 205, 205)'}}>Admins</button>
                    </div>
                    <div className='card-btn btn3'>
                    <button type="button" style={{background: 'rgb(205, 205, 205)'}}>Courses</button>
                    </div>
                    <div className='card-btn btn3'>
                    <button type="button" style={{background: 'rgb(205, 205, 205)'}}>Classes</button>
                    </div> 
                </div>
                <div style={{ height: 608, width: '80%', background: 'white', display: 'flex', flexDirection:'column'}}>
                <button className="add-btn">Add student</button>
                <DataGridPro
                    
                    {...data}
                    loading={data.rows.length === 0}
                    rowHeight={62}
                    pagination
                    checkboxSelection
                    disableSelectionOnClick
                />
                </div>
            </div>
            </div>
        </>
      );
}
 
export default AdminStudents;