import './services.css'


export const Services = () => {

    return (
        <section id='services'>
            <div id='sWrap'>
            <h1 id='sHead'>My skills </h1>
            <div id='offers' >

                

                <div className='service'>
                    <img  className='sFi' src='./integrations.png'/>
                    <h1 className='sMH'>Backend development</h1>
                    <div className='sLi'><img src='./star.png'/><h1>Server-side languages (Node.js, Python, Ruby)</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>api design and developement</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>Authentication and authorization</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>Server-side architecture (MVC, Microservices)</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>scalability and perfomance optimization</h1></div>
                </div>

                <div className='service' >
                  <img  className='sFi' src='./integrations.png'/>
                    <h1 className='sMH'>Database management </h1>
                    <div className='sLi'><img src='./star.png'/><h1>SQL databases (PostgreSQL, MySQL)</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>NoSQL databases (MongoDB, Redis)</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>Database design and modeling</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>Query optimization</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>database security</h1></div>
                </div>

                <div className='service' >
                   <img  className='sFi' src='./integrations.png'/>
                    <h1 className='sMH'>Automations </h1>
                    <div className='sLi'><img src='./star.png'/><h1>Automated Data entry </h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>api integration/development </h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>custom automations/workflows</h1></div>
                </div>

                <div className='service' >
           <img  className='sFi' src='./integrations.png'/>
                    <h1 className='sMH'>Devops and Deployment</h1>
                    <div className='sLi'><img src='./star.png'/><h1>Cloud services (AWS, Google Cloud, Azure) </h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>Containerization (Docker) </h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>Continuous Integration/Continuous Deployment (CI/CD)</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>Server management</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>monitoring and logging</h1></div>
                </div>

                
                <div className='service' >
                    <img  className='sFi' src='./integrations.png'/>
                    <h1 className='sMH'>external integrations </h1>
                    <div className='sLi'><img src='./star.png'/><h1>zapier automations </h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>word press plugins </h1></div>
                    <div className='sLi'><img src='./star.png'/><h1>calendly integrations</h1></div>
                    <div className='sLi'><img src='./star.png'/><h1> social media integrations </h1></div>
                </div>
                </div>
            </div>
        </section>
    )
}