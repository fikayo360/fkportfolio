 import './about.css'
 import gsap from "gsap";
 import { useGSAP } from "@gsap/react";
 import { useRef } from 'react';

 export const About = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    
    useGSAP(() => {
        
        gsap.from('#aboutWrap', {
                duration: 1.5,
                y: '-70vh',
                ease: 'power3.inOut',
        })
      }, { scope: container });

    return (
        <section id='about' ref={container}>
            <div id='aboutWrap'>
            <h1 id='aboutH'>about me </h1>
            <p className='aboutp'>
                I am a seasoned backend developer with a strong passion for technology and a specialized focus on building secure, scalable,
                 and high-performing server-side systems. My career is dedicated to architecting and maintaining the backbone of modern applications—powerful APIs, efficient data workflows, and resilient infrastructures—designed to meet business goals with precision. By translating complex requirements into reliable backend solutions,
                I ensure seamless integration with front-end interfaces while driving performance, security, and long-term growth.
            </p>

            <p className='aboutp'>
            My expertise lies in designing and implementing robust backend architectures using modern technologies and best practices.
             I specialize in developing efficient server-side logic, RESTful and GraphQL APIs, and microservices that prioritize scalability, 
             maintainability, and security. With extensive experience in databases such as PostgreSQL and MongoDB, I excel at modeling, optimizing,
              and managing data for both performance and reliability. I also leverage tools like Docker and cloud environments for deployment, ensuring 
              continuous integration, smooth operation, and fault tolerance. While my work is primarily backend, 
            I collaborate seamlessly with front-end and mobile teams to deliver cohesive, end-to-end solutions.
            </p>

            <p className='aboutp'>
              I am a firm believer in continuous learning and staying ahead of emerging backend technologies, frameworks, and infrastructure trends.
               This forward-thinking mindset ensures that the systems I build are not only reliable today but also adaptable for the future. 
               Whether working independently or as part of a cross-functional team, I bring a methodical, results-oriented approach to solving challenges. 
               My dedication lies in crafting backend solutions that are technically sound,
               business-driven, and capable of powering high-quality, impactful digital products.
            </p>
            </div>
        </section>
    )
 }