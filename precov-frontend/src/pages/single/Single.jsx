import "./single.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">edit</div>
            <h1 className="title">information</h1>
            <div className="item">
              <img 
                src="https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg" 
                alt=""
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Username</span>
                  <span className="itemValue">Janedoe68</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Region</span>
                  <span className="itemValue">Yogyakarta</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">+62 8687 866 578</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single