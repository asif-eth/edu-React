import React, { useEffect, useRef, useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";


const FAQS = () => {

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
                  question: 'Q1.I have an upcoming interview. Can I take this long-term Entrepreneurship package?',
                  answer: 'Yes, absolutely. This program is highly suitable for you if you have an interview coming up. As this Entrepreneurship is 1:1 and completely personalised, there are no restrictions on the timeline. Be it 15 days or 1 month, your mentor will plan the timeline and preparation based on your upcoming interview schedule and help you crack it in the best possible manner. If you want to enrol right away to prepare for an upcoming interview, you may select your mentor, make the payment and get started in an instant. For any doubts related to enrolment, please get in touch with us at contactus@preplaced.in. We’d be happy to help you.',
                },
                {
                  question: 'Q2. Who are Preplaced mentors?',
                  answer: 'Our mentors are top industry experts who are associated with global brands and companies across tiers. They are selected to work as mentors after a thorough screening process. We, at Preplaced, ensure that you always get the best-qualified mentors to guide you.',
                },
                {
                  question: 'Q3. What are the advantages of interview preparation through Entrepreneurship?',
                  answer: 'Your mentors can accurately pinpoint your skill gaps and correct them. They encourage and empower you to do better in your career. You can define your career goals clearly with their astute guidance. Moreover, you can build your network, learn the industry nitty-gritty, and also win referrals and recommendations from your mentors who will be truly rooting for your success.',
                },
                {
                  question: 'Q4.What does Entrepreneurship till you get your dream job mean?',
                  answer: 'It means your mentor will handhold you till you achieve your goal of getting into your dream job. That is what makes your mentor happy. Your mentor will take complete responsibility to prepare you in every aspect. Not leaving your hand till you achieve your goal.',
                },
                {
                  question: 'Q5. For whom is the long-term 1:1 interview preparation suitable?',
                  answer: 'This long-term interview preparation Entrepreneurship is suitable for people who want to upgrade their careers and get into their dream job in a strategic manner. Whether you’re a fresher or someone with 10 years of experience, we have the suitable mentors and resources to pave the path for your interview success. Preplaced is India’s first platform that focuses on practising through personalised and customisable Entrepreneurship programs that aim at complete and all-rounded interview preparation.',
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
      
      export default FAQS;
