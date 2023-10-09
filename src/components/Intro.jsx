import React from 'react'
import video from "../video/video.mp4"
import t1 from "../image/t1.png"
import t2 from "../image/t2.png"
import t3 from "../image/t3.png"
import t4 from "../image/t4.png"
import satyajit from '../image/SatyajitPattnaik.png'
import { ChartBarIcon, CircleStackIcon, PencilSquareIcon, DocumentChartBarIcon, ArrowPathIcon, DevicePhoneMobileIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames';
import certificate from "../image/certificate.jpeg"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

import {
    PresentationChartBarIcon,

    AcademicCapIcon,
    BanknotesIcon,
    NewspaperIcon,


    UsersIcon,
} from '@heroicons/react/24/outline'




function Intro() {
    const [nextMonthDate, setNextMonthDate] = useState(new Date());
    useEffect(() => {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setNextMonthDate(nextMonth);
    }, []);
    const options = { month: 'short' };
    const nextMonthDateString = nextMonthDate.toLocaleDateString('en-US', options);
    const features = [
        {
            name: 'Data Analysis and Visualization',
            description:
                'Power BI enables users to connect to multiple data sources, including databases, spreadsheets, online services, and more. It provides a wide range of data visualization options, such as charts, graphs, maps, and tables, to create interactive reports and dashboards.',
            icon: ChartBarIcon,
        },
        {
            name: 'Advanced Data Modeling',
            description:
                'With Power BI, you can create sophisticated data models by defining relationships between different tables, creating calculated columns and measures, and applying advanced data transformations. This allows for in-depth analysis and the creation of complex reports.',
            icon: CircleStackIcon,
        },
        {
            name: 'Query Editor ',
            description:
                'Power BI includes a Query Editor tool that allows you to clean, transform, and shape data before it is loaded into the data model. You can perform tasks like filtering, sorting, merging, and splitting data to ensure it is in the desired format for analysis.',
            icon: PencilSquareIcon,
        },
        {
            name: 'Interactive Reports and Dashboards:',
            description:
                'Power BI offers a highly interactive and user-friendly interface that allows users to drill down into data, apply filters, and explore different visualizations. Reports and dashboards can be published and shared with others, either through the Power BI service or by embedding them in other applications.',
            icon: DocumentChartBarIcon,
        },
        {
            name: 'Data Refresh and Scheduled Updates',
            description:
                'Power BI supports automatic data refresh from various data sources, ensuring that reports and dashboards always reflect the latest information. You can schedule data refreshes at regular intervals or trigger them manually.',
            icon: ArrowPathIcon,
        },
        {
            name: 'Mobile Support',
            description:
                'Power BI offers mobile apps for iOS and Android devices, allowing users to access their reports and dashboards on the go. The mobile apps provide a responsive and optimized viewing experience, enabling users to interact with data from their smartphones or tablets.',
            icon: DevicePhoneMobileIcon,
        },
    ]
    // bones
    const actions = [
        {
            title: 'Worth ₹ 6,500',
            href: '#',
            icon: PresentationChartBarIcon,
            iconForeground: 'text-teal-700',
            iconBackground: 'bg-teal-50',
            description: "10,000+ Excel   customizable PPT templates for stunning presentations in no time with Power BI."
        },
        {
            title: 'Worth ₹ 5,500',
            href: '#',
            icon: AcademicCapIcon,
            iconForeground: 'text-purple-700',
            iconBackground: 'bg-purple-50',
            description: "Power BI Interview Guide"
        },
        {
            title: `Join our Community and get 24/7 Support`,
            href: '#',
            icon: UsersIcon,
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
            description: "Worth far beyond what money can't quantify. "
        },
        {
            title: '1 Month Internship Certificate',
            href: '#',
            icon: NewspaperIcon,
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
            description: " Money fades into insignificance when compared to the profound worth of skills,"
        },
        // {
        //     title: 'Submit an expense',
        //     href: '#',
        //     icon: ReceiptRefundIcon,
        //     iconForeground: 'text-rose-700',
        //     iconBackground: 'bg-rose-50',
        // },
        // {
        //     title: 'Training',
        //     href: '#',
        //     icon: AcademicCapIcon,
        //     iconForeground: 'text-indigo-700',
        //     iconBackground: 'bg-indigo-50',
        // },
    ]
    //faq
    const faqs = [
        {
            question: "When does the workshop start?",
            answer:
                "The workshop will be for 2 days: Saturday 7-10 PM (21th Nov) & Sunday 7-10 PM (22th Nov)",
        },
        {
            question: "Timings of the workshop?",
            answer:
                "Day 1 – Saturday 7-10 PM Day 2 – Sunday 7-10 PM ",
        },
        {
            question: "Will I get recordings if I miss out on a live session?",
            answer:
                "You will receive recordings of both Days , Day 1 (Saturday) session & Day 2 (Sunday) session. ",
        },
        {
            question: "Is there a specific device requirement?",
            answer: "You will require a Windows Laptop/PC to attend the workshop. Power BI isn’t available for Mac as of now. "

        },
        {
            question: "Are there any pre-requisites to attend this workshop?",
            answer: "You just need an interest in the world of data to learn. No prior knowledge about any software is required."

        },
        {
            question: "I made the payment but didn’t receive any update",
            answer: "Please email us at contact@zepanalytics.com in & our support team will get back to you as soon as possible."

        },
        // More questions...
    ]
    return (

        <div className='bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white pt-12 flex flex-col items-center w-full'>
            {/* section */}
            <h1 className='sm:text-4xl sm:w-2/3 font-medium w-full text-lg [&>span]:text-yellow-400 [&>span]:underline'>
                BECOME A <span>POWER BI</span>  EXPERT AND UNLEASH THE POWER OF ADVANCED DATA ANALYSIS AND VISUALIZATION TECHNIQUES USED BY <span>TOP BUSINESS INTELLIGENCE PROFESSIONALS</span> .
                DISCOVER HOW TO <span>SAVE UP TO 2 HOURS</span>  OF TIME EVERYDAY WITHOUT ANY <span>PRIOR KNOWLEDGE</span> , ALL IN JUST <span> 6 HOURS</span>.
            </h1>
            <iframe src="https://www.youtube.com/embed/TIGbNv9zTN4" target="_parent"   className='rounded-3xl p-2 mt-4 sm:h-[500px] sm:w-[800px] h-[250px] w-[370px]'></iframe>

            <a href='https://pages.razorpay.com/PBIMasterclass' className='bg-gradient-to-l from-orange-500 to-yellow-300 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                <span className='drop-shadow-xl'> Become a Power BI Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less than a pizza 🍕】</span></span>
            </a>
            <div >
                <div class=" grid sm:grid-cols-2 grid-cols-1 justify-evenly sm:text-xl  text-left text-sm items-center my-8 ">

                    <div className=' grid sm:grid-cols-1 items-start justify-between  font-bold  [&>div>h1]:ml-4  '>
                        <div className='flex flex-row items-center justify-start my-4'>

                            <CheckCircleIcon className='max-min-h-[45px] max-w-[45px]' /><h1>Master data analysis and save time.</h1>
                        </div>
                        <div className='flex flex-row items-center justify-start my-4'>

                            <CheckCircleIcon className='max-min-h-[45px] max-w-[45px]' /><h1> Slash your daily work by 2 hours with Power BI</h1>
                        </div>
                        <div className='flex flex-row items-center justify-start my-4'>

                            <CheckCircleIcon className='max-min-h-[45px] max-w-[45px]' />  <h1> Become a Power BI specialist and enhance   your CV with our certification.</h1>
                        </div>
                    </div>

                    <div className=' grid sm:grid-cols-1 items-start justify-between  font-bold  [&>div>h1]:ml-4  '>
                        <div className='flex flex-row items-center justify-start my-4'>

                            <CheckCircleIcon className='max-min-h-[45px] max-w-[45px]' />
                            <h1> Get high-paying job offers as a Power BI developer. Top skill of 2023.</h1>
                        </div>
                        <div className='flex flex-row items-center justify-self-auto my-4'>

                            <CheckCircleIcon className='max-min-h-[45px] max-w-[45px]'/><h1>  Tackle real-life excel challenges with Power BI and   solve problems like a pro.</h1>
                        </div>
                        <div className='flex flex-row items-center justify-stretch my-4'>

                            <CheckCircleIcon className='max-min-h-[45px] max-w-[45px]' /><h1> Join us and transform your career</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* section */}
            <div className='sm:text-3xl text-xl mt-12 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 text-white p-8 flex w-screen justify-center font-semibold'>
                <h1 className='drop-shadow-md'>Workshop is on 21 & 22 Nov from 7 to 10 PM.<br />
                    ***Be Quick! Last few seats are remaining for this batch!***</h1>
            </div>
            {/* section */}
            <div className='bg-slate-50 w-screen text-black flex  flex-col items-center justify-center p-8'>
                <div className='sm:w-5/6 w-full  '>

                    <h1 className='sm:text-4xl text-2xl font-bold  sm:p-8'>Please Check All Boxes Where Your Answer Is YES!</h1>
                    <div class=" grid sm:grid-cols-2 grid-cols-1 justify-evenly sm:text-xl  text-left text-sm items-center my-8 ">

                         <div className=' grid sm:grid-cols-1 items-start justify-between  font-bold  '>
                            <div className='flex flex-row items-center justify-start my-4'>
                                <input type="checkbox" className='mr-4 min-w-[50px] h-6 ' /> <label htmlFor="">I have been using Power BI daily but still haven't mastered it.</label>
                            </div>
                            <div className='flex flex-row items-center justify-start my-4'>


                                <input type="checkbox" className='mr-4 min-w-[50px] h-6 ' /> <label htmlFor="">I want to unlock better job opportunities, but my lack of Power BI <br className='sm:block hidden ' /> knowledge is holding me back.</label>
                            </div>
                            <div className='flex flex-row items-center justify-start my-4'>


                                <input type="checkbox" className='mr-4 min-w-[50px] h-6 ' />
                                <label htmlFor="">Advanced Power BI seems challenging, and I need a mentor to guide me through it. </label>
                            </div>
                        </div>
                        <div className=' grid sm:grid-cols-1 items-start justify-between  font-bold   '>
                            <div className='flex flex-row items-center justify-start my-4'>


                            <input type="checkbox"  className='mr-4 min-w-[50px] h-6 ' />
                                <label htmlFor="">I aim to impress my manager and colleagues with captivating Power BI reports.</label>

                            </div>
                            <div className='flex flex-row items-center justify-start my-4'>


                            <input type="checkbox" className='mr-4 min-w-[50px] h-6 ' />
                                <label htmlFor="">I want to boost my efficiency in using Power BI and save over 2 hours every day.</label>

                            </div>
                            <div className='flex flex-row items-center justify-start my-4'>

                            <input type="checkbox" className='mr-4 min-w-[50px] h-6' />
                                <label htmlFor="">I want to harness the power of advanced Power BI formulas to simplify my work life.</label>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-xl mt-12  text-black  flex w-full justify-center font-extrabold '>
                    <h1>If you checked ANY of the boxes above, then you’re invited to join the Power BI course 😀</h1>
                </div>

                <a href="https://pages.razorpay.com/PBIMasterclass" className='bg-gradient-to-l from-orange-500 to-yellow-300 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                    <span className='drop-shadow-xl'> Become a Power BI Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less than a pizza 🍕】</span></span>
                </a>
                <div className='sm:text-xl text-sm mt-12  text-black  flex w-screen justify-center font-extrabold'>
                    <h1>Register before 10th Nov, 2023 to unlock bonuses worth Rs 12,000</h1>
                </div>
            </div>
            {/* testimonials */}
            <div className='bg-white w-screen text-black flex  flex-col items-center justify-center p-8'>
                <div className='sm:text-4xl text-2xl sm:w-3/5 font-extrabold '>
                    <h1>More than 10,000 students have choosen Zep Analytics and have received great job offers!!</h1>
                </div>
                <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
                    <div>
                        <img src={t1} alt="" className='h-auto max-w-full rounded-lg' />
                    </div>
                    <div>
                        <img src={t2} alt="" className='"h-auto max-w-full rounded-lg"' />
                    </div>
                    <div>
                        <img src={t3} alt="" className='"h-auto max-w-full rounded-lg"' />
                    </div>
                    <div>
                        <img src={t4} alt="" className='"h-auto max-w-full rounded-lg"' />
                    </div>

                </div>
                <a href='https://pages.razorpay.com/PBIMasterclass' className='bg-gradient-to-l from-orange-500 to-yellow-300 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                    <span className='drop-shadow-xl'> Become a Power BI Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less than a pizza 🍕】</span></span>
                </a>
                <div className='sm:text-5xl text-3xl  sm:w-3/5 font-extrabold  mt-24'>
                    <h1>What will you learn in this Masterclass?</h1>
                </div>

                <div className="bg-white py-24 sm:pt-32 " >
                    <div className="w-full px-6 lg:px-8 drop-shadow-lg">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-6xl lg:grid-cols-2   ">

                            <dl className="col-span-2 grid grid-cols-1 gap-x-32 gap-y-16 sm:grid-cols-2 ">
                                {features.map((feature) => (
                                    <div className=' flex flex-col justify-center items-center text-base font-semibold leading-7 text-gray-900 ' key={feature.name}>

                                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}

                                        <p className="mt-1 text-base leading-7 text-gray-600 sm:text-center text-justify">{feature.description}</p>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>


                <a href='https://pages.razorpay.com/PBIMasterclass' className='bg-gradient-to-l from-orange-500 to-yellow-300 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                    <span className='drop-shadow-xl'> Become a Power BI Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less than a pizza 🍕】</span></span>
                </a>
                <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold'>
                    <h1>Register before 10th Nov, 2023 to unlock bonuses worth Rs 12,000</h1>
                </div>


                <div className='sn:text-5xl text-3xl mt-12 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 text-white p-8 flex w-screen justify-center font-semibold'>

                    <h1 className='drop-shadow-md'>Register before midnight of 10 Nov 2023 <br />
                        <span className='sm:text-2xl text-lg'>To Unlock All Bonuses worth <br /> <span className='animate-pulse text-3xl mt-2 drop-shadow-md text-yellow-100'>₹ 12,000</span></span>
                    </h1>

                </div>
            </div>
            {/* Bonus */}
            <div className='bg-white w-screen text-black flex  flex-col items-center justify-center p-8'>
                <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-300 shadow  sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                    {actions.map((action, actionIdx) => (
                        <div
                            key={action.title}
                            className={classNames(
                                actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                                actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                            )}
                        >
                            <div className='flex flex-col  justify-center items-center'>
                                <h1 className='text-white bg-gradient-to-r from-rose-400 to-orange-300 drop-shadow-md p-2 w-2/6 rounded-md mb-4'>Bonus</h1>
                                <span
                                    className={classNames(
                                        action.iconBackground,
                                        action.iconForeground,
                                        'rounded-lg inline-flex p-3 ring-4 ring-white'
                                    )}
                                >
                                    <action.icon className="h-8 w-8" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-lg font-medium">
                                    <a className="focus:outline-none">
                                        {/* Extend touch target to entire panel */}
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {action.title}
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    {action.description}
                                </p>
                            </div>
                            <span
                                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                aria-hidden="true"
                            >
                                
                            </span>
                        </div>
                    ))}
                </div>

                {/* certificate */}
                <div className='bg-gray-900 w-screen text-white flex  flex-col items-center justify-center p-8'>
                    <div className='sm:text-5xl text-3xl mt-4  text-yellow-300 sm:p-8 p-2 flex w-screen justify-center font-semibold'>
                        <h1>Become a Certified Power BI Developer</h1>
                    </div>
                    <div className='sm:text-xl text-base mt-4 p-2 text-white  flex w-screen justify-center font-extrabold'>
                        <h1>Yes! You will be certified by a Power BI Trainer which brings a lot of credibility to your certificate & your resume.   </h1>
                    </div>
                    <div className='p-4'>
                        <img src={certificate} alt="" height={400} width={1000} />
                    </div>
                    <a href='https://pages.razorpay.com/PBIMasterclass' className='bg-gradient-to-l from-orange-500 to-yellow-300 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                        <span className='drop-shadow-xl'> Become a Power BI Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less than a pizza 🍕】</span></span>
                    </a>
                    <div className='sm:text-xl text-base mt-4  text-white  flex w-screen justify-center font-extrabold mb-4'>
                        <h1>Register before 10th Nov, 2023 to unlock bonuses worth Rs 12,000</h1>
                    </div>

                </div>
                {/* Mentor */}
                <div className="relative isolate bg-white">
                    <h1 className='font-bold sm:text-5xl text-4xl mt-12 ' > Know your mentor</h1>
                    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-12">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">

                            <h1 className="sm:mt-10  max-w-lg text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Satyajit Pattnaik
                            </h1>
                            <p className="mt-6 sm:text-lg text-sm leading-8 text-gray-600 text-left">
                                Certified Data Scientist & Tensorflow Certified Developer <br />
                                Number of students trained so far: 10000+ <br />
                                Average Trainer Score: 9+ <br />

                            </p>
                            <p className='mt-6 sm:text-lg text-sm leading-8 text-gray-600 text-left'>

                                12+ years experience working in Data Analytics and Data Sciences across different industry verticals including telecom, cyber security, insurance, e-commerce etc.
                                <br />
                                Expertised on BI tech stack including Power BI & Tableau.
                                Analytic experience includes ETL, descriptive and predictive data analysis, data visualization​, Machine Learning & Deep Learning
                                <br />
                                Conducted various training sessions on Data Science, Analytics, ML & AI, as well as attended various International conferences as keynote speaker & guest on Data Science, ML & AI in various universities across APAC Region.
                                <br />
                                Over 8+ years of training & teaching experience into Data Science & Analytics
                                <br />
                                Owner of more than 20+ data communities over the globe, and runs a small YouTube channel on my name having 38,000+ subscribers
                            </p>

                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="https://www.linkedin.com/in/satyajitpattnaik/"
                                    className="rounded-md bg-yellow-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Linkedin
                                </a>
                                <a href="https://www.linkedin.com/in/satyajitpattnaik/" className="text-base font-semibold leading-7 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">

                            <foreignObject
                                width={316}
                                height={684}
                                transform="translate(24 24)"
                                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                            >
                                <img src={satyajit} alt="" className='rounded-lg' />
                            </foreignObject>

                        </div>
                    </div >
                </div>
                <a href='https://pages.razorpay.com/PBIMasterclass' className='bg-gradient-to-l from-orange-500 to-yellow-300 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                    <span className='drop-shadow-xl'> Become a Power BI Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less than a pizza 🍕】</span></span>
                </a>
                <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold mb-4'>
                    <h1>Register before 10th Nov, 2023 to unlock bonuses worth Rs 12,000</h1>
                </div>
                {/* FAQ  */}

                <div className="bg-slate-100 w-screen">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-24 lg:px-8">
                        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                            <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                            <p className='text-sm p-4'>I have tried my best to answer all the frequently asked questions. If you still have more questions,
                                please write to us at contact@zepanalytics.com (Give us 8 working hours to respond back). My awesome support team will get back to you.</p>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                        <span className="text-xl font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base text-left leading-7 text-gray-600">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Intro