import "../styles/about.css"
import time from "../images/time.svg"
import customize from "../images/icon-fully-customizable.svg"

const About = () => {

    const info = [
        {src:time,alt:"time",txt:"We've been operational for [Number of years] and have established a reputation for delivering top-quality projects on time and within budget.",h3:"-Time Cautious"},
        {src:customize,alt:"customize",txt:"Our team of experienced professionals is dedicated to providing exceptional customer service and craftsmanship. ",h3:"-Experienced Craftsmanship"},
    ]

    return ( 
        <div>
            <p className="link"></p>
            <div className="about">
                {info.map ( (inf, index) => (
                    <div key={index}>
                        <img src={inf.src} alt={inf.alt} />
                        <p>{inf.txt}</p>
                        <h3>{inf.h3}</h3>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default About;