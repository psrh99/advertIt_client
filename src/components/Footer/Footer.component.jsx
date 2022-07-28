import "./Footer.styles.css"

const Footer = () => (
    <>
        <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="#"><i className="icon ion-email"></i></a>
                <a href="#"><i className="icon ion-social-instagram"></i></a>
                <a href="#"><i className="icon ion-social-twitter"></i></a>
                <a href="#"><i className="icon ion-social-facebook"></i></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">ADvert It © 2022</p>
        </footer>
    </div>
    </>
)

export default Footer