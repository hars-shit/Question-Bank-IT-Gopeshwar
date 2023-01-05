  import './UpperNavBar.css'
  function UpperNavBar(){

        return (
       <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0 d-flex ">
        <div className="container-fluid">
          
          
          <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarNav">
            <ul className="navbar-nav align-items-center">
                  
              <li className="nav-item d-flex  ">
                <a className="nav-link active fw-bold" aria-current="page" href="/">✉ itgopeshwar@gmail.com </a>
              </li>
             
             
              <li className="nav-item d-flex ">
                <a className="nav-link active fw-bold" href="/">🔎 Institute of Technology, Gopeshwar, Chamoli Uttarakhand-246424</a>
              </li>
             
          <div className='clg-feedback-enquiry d-flex align-items-center'>
              <li className="nav-item">
                <a className="nav-link active me-1 fw-bold" href="/">📞 ONLINE STUDENT FEEDBACK </a>
                
              </li>
              <li className='nav-iteam'>
              <button type="button active " className="btn btn-success  btn-sm fw-bold">ENQUIRY</button>
              </li>
            </div>
              
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )}
    export default UpperNavBar;