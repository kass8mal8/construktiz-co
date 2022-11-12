import '../assets/styles/footer.css'
import help from '../assets/images/Help Avatar.svg'

const Footer = () => {
    return ( 
        <div className='footer'>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
            <div className='help'>
                <img src={help} alt="help-avatar" />
                <aside>
                    <p>Have any questions?</p>
                    <h4>Talk to a specialist</h4>
                </aside>
            </div>
        </div>
     );
}
 
export default Footer;