import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './newdata.scss'
const NewData = () => {
  return (
    <div className="newdata">
        <Sidebar/>
        <div className="newdataContainer">
            <Navbar/>
            <div className="top">
            <h1>
            Add New Data
            </h1>
            </div>
            <div className="bottom">
            <form action="">
            {/* <div className="formInput">
                <label htmlFor="file">image: <DriveFolderUploadIcon className="icon"/></label>
                <input type="file"  id="file" style={{display:"none"}}/>
              </div> */}
              <div className="formInput">
                <label >Tanggal</label>
                <input type="Date" placeholder="Nama" />
              </div>
              <div className="formInput">
                <label >Jumlah Kasus</label>
                <input type="text" placeholder="Username" />
              </div>
              {/* <div className="formInput">
                <label >Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="formInput">
                <label >Phone</label>
                <input type="text" placeholder="+62 2345 234 2342" />
              </div>
              <div className="formInput">
                <label >Password</label>
                <input type="password" placeholder="password" />
              </div>
              <div className="formInput">
                <label >Alamat</label>
                <input type="text" placeholder="Alamat" />
              </div>
              <div className="formInput">
                <label >Negara</label>
                <input type="text" placeholder="Negara" />
              </div> */}
              <button>Send</button>
            </form>

            </div>
        </div>
    </div>

  )
}

export default NewData