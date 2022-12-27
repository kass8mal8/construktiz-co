import design from "../assets/images/design.jpg"
import plan from "../assets/images/planned.webp"
import execute from "../assets/images/execute.webp"

import "../assets/styles/main.css"


const Main = () => {

    const contents = [
        {src:design,alt:'Designing',h3:'Perfectly Design',txt:'At [Company Name], we offer comprehensive design services to bring your construction project to life.'},
        {src:plan,alt:'Planning',h3:'Carefully Planned',txt:'At [Company Name], we understand that careful planning is essential to the success of any construction project.'},
        {src:execute,alt:'Execuing',h3:'Smartly Execute',txt:'At [Company Name], we pride ourselves on delivering top-quality construction services to our clients.'}
    ]

    return ( 
        <div>
            <div className="main-container">
                {contents.map( (cont, index) => (
                    <div className="design" key={index}>
                        <img src={cont.src} alt={cont.alt} />
                        <aside>
                            <h3>{cont.h3}</h3>
                            <p>{cont.txt}</p>
                        </aside>
                    </div>
                ))}
            </div>

            <form>
                <input type="text" placeholder="message" />
                <button>leave message</button>
            </form>
        </div>
     );
}
 
export default Main;