import React, { useEffect, useRef, useState } from 'react';
import '../../../common.css'
import { FaMinus, FaPlus } from "react-icons/fa";

const Questions = () => {

        const [activeToggle, setActiveToggle] = useState(null); // Use a single activeToggle state
        const contentRefs = useRef([]); // Use a single array of content refs
      
        const toggleHandle = (index) => { // Use a single toggle handler function
          if (activeToggle === index) {
            setActiveToggle(null); // Close the active toggle if clicking the same one
          } else {
            setActiveToggle(index); // Open the clicked toggle
          }
        };
      
        useEffect(() => {
          contentRefs.current.forEach((ref, index) => {
            if (ref.current) {
              ref.current.style.maxHeight = index === activeToggle ? `${ref.current.scrollHeight}px` : '0';
            }
          });
        }, [activeToggle]);
      
        const questions =  [
                {
                  question: 'Q1. Who is eligible to participate in the program?',
                  answer: 'The program is open to all college students who are eager to enhance their skills, gain practical work experience, and develop leadership abilities. We welcome students from various fields and backgrounds to join our transformative journey.',
                },
                {
                  question: 'Q2. How will participating in the program benefit my future career?',
                  answer: 'The program offers a unique blend of hands-on experiences, leadership opportunities, and expert mentorship that are designed to supercharge your skillset and accelerate your career growth. By engaging in real-world projects and honing essential skills, you\'ll gain a competitive edge and be well-prepared to excel in your chosen field.',
                },
                {
                  question: 'Q3. What type of mentorship and support will I receive throughout the program?',
                  answer: 'The program is committed to providing personalized mentorship and support. You\'ll be guided by a team of industry experts and professionals who will offer insights, advice, and guidance as you navigate your projects and leadership roles. Regular check-ins, workshops, and resources are in place to ensure you have the support you need.',
                },
                {
                  question: 'Q4. How does the leadership aspect of the program work?',
                  answer: 'In the program, you\'ll have the opportunity to lead junior interns as part of your experiential learning. As you progress, you\'ll take on increasing leadership responsibilities, enhancing your communication, management, and decision-making skills. The program is structured to provide a gradual and supportive transition into leadership roles.',
                },
                {
                  question: 'Q5. What types of projects and practical experiences can I expect to work on?',
                  answer: 'The program offers a diverse range of projects spanning various industries and challenges. From web development and data analytics to machine learning and more, you\'ll engage in real-world tasks that blend theory with practical application. These projects are designed to empower you with skills that are directly transferable to your future career.',
                },
              ];
      
        return (
          <div>
            <div>
              <h1 className='text-xl md:text-5xl text-blue font-bold flex justify-center mb-6'>Frequently Asked <span className='text-pink ml-2'>Questions</span></h1>
            </div>
            <div className='mx-5 md:mx-24'>
              {questions.map((item, index) => (
                <div className='collapseContainer' key={index}>
                  <h1
                    className='flex p-6 items-center justify-between cursor-pointer'
                    onClick={() => toggleHandle(index)}>
                    {item.question} {activeToggle === index ? <FaMinus /> : <FaPlus />}
                  </h1>
                  <div
                    className={`animation ${activeToggle === index ? 'openCollapse' : ''} collapseContent`}
                    ref={contentRefs.current[index]}>
                    <article>
                      <div className="hr-line"></div>
                      <p>{item.answer}</p>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };
      
      export default Questions;