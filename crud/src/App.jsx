import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Data } from './employeeData'

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);


  useEffect(() => {
    setData(Data)
  },[])

  const handleEdit = (id) => {
    setIsUpdate(true)
    const dt = data.filter(item => item.id === id);
    if(dt !== undefined) {
      setId(dt[0].id)
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  }

  const handleDelete = (id) => {
    if ( id > 0) {
      if(window.confirm("Are you sure you want to delete this item?")) {
        const dt = data.filter(item => item.id !== id)
        setData(dt);
      }
    }
  }

  const handeleSave = (e) => {
    let error = '';
    if(firstName === ''){
      error += 'First name is required. ';
    }
    if(lastName === ''){
      error += 'Last name is required. ';
    }
    if(age <=0) {
      error += 'Age is required'
    }

    if(error === '') {
      e.preventDefault();
    const dt = [...data];
    const newObject = {
      id: Data.length + 1,
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    dt.push(newObject);
    setData(dt);
    handeleClear();
    } else {
      alert(error);
    }


    
  }
  const handeleUpdate = () => {
    const index = data.map((item) => {
      return item.id
    }).indexOf(id);

    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;
    setData(dt);
    handeleClear();
  }

  const handeleClear = () => {
    setIsUpdate(false)
    setId(0)
      setFirstName('');
      setLastName('');
      setAge('');
  }
  return (
    <div className='App'>
       <div style={{display: 'flex', justifyContent: 'center', marginTop: "10px", marginBottom: "10px", margin:"10px"}}>
        <div>
          <label>First Name : 
            <input type="text" value={firstName} name="" id="" onChange={(e) => setFirstName(e.target.value)} placeholder='Enter first name' required />
          </label>
        </div>
        <div>
        <label>Last Name : 
            <input type="text" value={lastName} name="" id="" onChange={(e) => setLastName(e.target.value)} placeholder='Enter last name' required />
          </label>
        </div>
        <div>
        <label>Age : 
            <input type="number" value={age} name="" onChange={(e) => setAge(e.target.value)} id="" placeholder='Enter Age' required />
          </label>
        </div>
        <div>
          {
            isUpdate ? (<button className='btn btn-primary' onClick={() => handeleUpdate()}>Update</button>):
            (<button className='btn btn-primary' onClick={(e) => handeleSave(e)}>Save</button>)
          }
        
       
        <button className='btn btn-danger' onClick={() => handeleClear()}>Clear</button>
        </div>
       </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>age</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}> 
                <td>{index + 1 } </td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>edit</button>&nbsp;
                  <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )) 
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
