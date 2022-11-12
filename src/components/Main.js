import '../assets/styles/main.css'
import model from '../assets/images/Hero Image (Model).png'
import blue from '../assets/images/Blue Shape.svg'
import purple from '../assets/images/Purple Shape.svg'
import pink from '../assets/images/Pink Shape.svg'
import check from '../assets/images/Checkmark.svg'

const Main = () => {

    return ( 
        <div className='main'>
            <div className='hero-and-shapes'>
                <img src={purple} alt="purple" className='purple'/>
                <img src={pink} alt="pink" className='pink'/>
                <img src={blue} alt="blue" className='blue' />
                <img src={model} alt="model" className='hero'/>
            </div>
            <div>
                <h1>Host your website in less than 5 minutes</h1>
                <p>
                    With Hosterr, get your website up and running in no less than 5 minutes
                    with the most competitive pricing packages available online.
                </p>
                <form>
                    <input 
                        type="email" 
                        placeholder='Enter e-mail address'
                        required/>
                    <button>Join Waitlist</button>
                    <aside>
                        <img 
                            src={check} 
                            alt="checkmark" 
                            className='check'/>
                        <p>  No spam, ever, Unsubscribe anytime.</p>
                    </aside>
                </form>
            </div>
        </div>
     );
}
 
export default Main;