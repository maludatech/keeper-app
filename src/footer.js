import "./App.css";

const time = new Date();
const currentYear = time.getFullYear();

function Footer(){
   return(
    <div>
        <p className="footer-item">Copyright © {currentYear}</p>
    </div>
   );
};
export default Footer;