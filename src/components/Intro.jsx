import React from 'react'
import video from "../video/video.mp4"
import t1 from "../image/t1.png"
import t2 from "../image/t2.png"
import t3 from "../image/t3.png"
import t4 from "../image/t4.png"
import satyajit from '../image/SatyajitPattnaik.png'
import { ChartBarIcon, CircleStackIcon, PencilSquareIcon, DocumentChartBarIcon, ArrowPathIcon, DevicePhoneMobileIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames';
import certificate from "../image/google-data-analyst.jpg"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'




function Intro() {
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
            title: 'Worth Rs 6,500',
            href: '#',
            icon: ClockIcon,
            iconForeground: 'text-teal-700',
            iconBackground: 'bg-teal-50',
            description: "700+ customizable templates for stunning presentations in no time with Power BI."
        },
        {
            title: 'Worth Rs 2,000',
            href: '#',
            icon: CheckBadgeIcon,
            iconForeground: 'text-purple-700',
            iconBackground: 'bg-purple-50',
            description: "Automate your Excel work with Power BI's Macro & VBA tool."
        },
        {
            title: 'Worth Rs 1,500',
            href: '#',
            icon: UsersIcon,
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
            description: "Excel efficiency made easy with the best shortcuts in Power BI's take-home book"
        },
        {
            title: 'Worth Rs 2,000',
            href: '#',
            icon: BanknotesIcon,
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
            description: "Complete icon sets and industry illustrations available for Power BI."
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
            question: "What's the best thing about Switzerland?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        // More questions...
    ]
    return (

        <div className='bg-black text-white pt-12 flex flex-col items-center'>
            {/* section */}
            <h1 className='text-4xl w-2/3 font-medium'>
                BECOME A POWER BI EXPERT AND UNLEASH THE POWER OF ADVANCED DATA ANALYSIS AND VISUALIZATION TECHNIQUES USED BY TOP BUSINESS INTELLIGENCE PROFESSIONALS.
                DISCOVER HOW TO SAVE UP TO 2 HOURS OF TIME EVERYDAY WITHOUT ANY PRIOR KNOWLEDGE, ALL IN JUST 3 HOURS.
            </h1>
            <video src={video} width={800} height={600} className='rounded-3xl p-3 mt-4' autoPlay controls  ></video>

            <button className='bg-yellow-300 font-semibold text-red-500  text text-4xl p-4 rounded-xl px-8 mt-4'> "Become a Certified Power BI Expert Now <br /> <span className='text-lg'>cost less then pizza</span> </button>
            <div className='flex flex-row '>
                <div class="grid grid-cols-2 gap-24  px-24 ">
                    <div className=' flex  items-start flex-col text-xl font-bold  [&>h1]:pt-4'>
                        <h1><CheckCircleIcon width={35} />Say goodbye to overtime with Power BI. Master data analysis, save time.</h1>
                        <h1> <CheckCircleIcon width={35} />slash your daily work by 2 hours with power bi. proven efficiency.</h1>
                        <h1> <CheckCircleIcon width={35} /> elevate your resume with microsoft certification. become a power bi expert.</h1>
                    </div>
                    <div className='flex  items-start flex-col text-xl font-bold  [&>h1]:pt-4'>
                        <h1>  <CheckCircleIcon width={35} />Get high-paying job offers as a Power BI master. Top skill of 2022.</h1>
                        <h1> <CheckCircleIcon width={35} /> tackle real-life excel challenges with power bi. solve problems like a pro.</h1>
                        <h1> <CheckCircleIcon width={35} />join 35,240 successful advanced excel masters. power bi can transform your career</h1>
                    </div>
                </div>
            </div>
            {/* section */}
            <div className='text-3xl mt-12 bg-yellow-400 text-black p-8 flex w-screen justify-center font-semibold'>
                <h1>Workshop is on 29th June from 7 to 10 PM. <br />
                    ***Be Quick! Last few seats are remaining for this batch!***</h1>
            </div>
            {/* section */}
            <div className='bg-slate-50 w-screen text-black flex  flex-col items-center justify-center p-8'>
                <div className='w-5/6 '>

                    <h1 className='text-4xl font-bold  p-8'>Please Check All Boxes Where Your Answer Is YES!</h1>
                    <div class="grid grid-cols-2 gap-48 justify-center items-center text-gray-600 pl-12 ">
                        <div className='  flex  items-start flex-col text-xl font-bold  [&>span]:pt-4   '>

                            <span  ><input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">I have been using Power BI daily but still haven't mastered it.</label></span>
                            <span  ><input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">I want to unlock better job opportunities, but my lack of Power BI knowledge is holding me back.</label></span>
                            <span  ><input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">Advanced Power BI seems challenging, and I need a mentor to guide me through it. </label></span>
                        </div>
                        <div className='flex  items-start flex-col text-xl font-bold  [&>span]:pt-4  '>
                            <span  ><input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">I aim to impress my manager and colleagues with captivating Power BI reports.</label></span>
                            <span  ><input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">I want to boost my efficiency in using Power BI and save over 2 hours every day.</label></span>
                            <span  ><input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">I want to harness the power of advanced Power BI formulas to simplify my work life.</label></span>
                        </div>
                    </div>
                </div>

                <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold'>
                    <h1>If you checked ANY of the boxes above, then you’re invited to join the Power BI course 😀</h1>
                </div>

                <button className='bg-yellow-300 font-semibold text-red-500  text text-4xl p-4 rounded-xl px-8 mt-12 '> "Become a Certified Power BI Expert Now <br /> <span className='text-lg'>cost less then pizza</span> </button>

                <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold'>
                    <h1>Register before June 11, 2023 to unlock bonuses worth Rs 12,000</h1>
                </div>
            </div>
            {/* testimonials */}
            <div className='bg-white w-screen text-black flex  flex-col items-center justify-center p-8'>
                <div className='text-4xl w-3/5 font-extrabold '>
                    <h1>More than 34,240 students have called it the best way to learn Power BI, received salary hikes & job offers!</h1>
                </div>
                <div class="grid grid-cols-2 gap-40 justify-center items-center text-gray-600 pl-12 mt-4 ">
                    <div className='  flex  items-start flex-col   '>
                        <img src={t1} alt="" className='object-fill  h-3/5 w-2/1' />
                        <img src={t2} alt="" className='object-fill  h-3/5 w-2/1' />

                    </div>
                    <div className='flex  items-start flex-col '>
                        <img src={t3} alt="" className='object-fill  h-3/5 w-3/4' />
                        <img src={t4} alt="" className='object-fill  h-3/5 w-3/4' />
                    </div>
                </div>
                <button className='bg-yellow-300 font-semibold text-red-500  text text-4xl p-4 rounded-xl px-8 mt-12 '> "Become a Certified Power BI Expert Now <br /> <span className='text-lg'>cost less then pizza</span> </button>

                <div className='text-5xl w-3/5 font-extrabold  mt-8'>
                    <h1>What will you learn in this Masterclass?</h1>
                </div>

                <div className="bg-white py-24 sm:py-32" >
                    <div className="w-full px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-6xl lg:grid-cols-2  ">

                            <dl className="col-span-2 grid grid-cols-1 gap-x-32 gap-y-16 sm:grid-cols-2 ">
                                {features.map((feature) => (
                                    <div key={feature.name}>
                                        <dt className="text-base font-semibold leading-7 text-gray-900 ">
                                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>


                <button className='bg-yellow-300 font-semibold text-red-500  text text-4xl p-4 rounded-xl px-8 mt-12 '> "Become a Certified Power BI Expert Now <br /> <span className='text-lg'>cost less then pizza</span> </button>
                <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold'>
                    <h1>Register before June 11, 2023 to unlock bonuses worth Rs 12,000</h1>
                </div>


                <div className='text-5xl mt-12 bg-yellow-400 text-black p-8 flex w-screen justify-center font-semibold'>

                    <h1>Register before midnight of 10 Jun 2023 <br />
                        <span className='text-2xl'>To Unlock All Bonuses worth Rs 12,000</span>
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
                            <div>
                                <h1 className='text-yellow-300 bg-yellow-800 drop-shadow-md p-2 w-2/12 rounded-md'>Bonus</h1>
                                <span
                                    className={classNames(
                                        action.iconBackground,
                                        action.iconForeground,
                                        'rounded-lg inline-flex p-3 ring-4 ring-white'
                                    )}
                                >
                                    <action.icon className="h-6 w-6" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-lg font-medium">
                                    <a href={""} className="focus:outline-none">
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
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>
                    ))}
                </div>

                {/* certificate */}
                <div className='bg-gray-900 w-screen text-white flex  flex-col items-center justify-center p-8'>
                    <div className='text-5xl mt-4  text-yellow-300 p-8 flex w-screen justify-center font-semibold'>
                        <h1>Become a Certified Power BI</h1>
                    </div>
                    <div className='text-xl mt-4  text-white  flex w-screen justify-center font-extrabold'>
                        <h1>Yes! You will be certified by a Power BI Trainer which brings a lot of credibility to your certificate & your resume.   </h1>
                    </div>
                    <div className='p-4'>
                        <img src={certificate} alt="" height={400} width={1000} />
                    </div>
                    <button className='bg-yellow-300 font-semibold text-red-500  text text-4xl p-4 rounded-xl px-8 mt-12 '> "Become a Certified Power BI Expert Now <br /> <span className='text-lg'>cost less then pizza</span> </button>
                    <div className='text-xl mt-2  text-white  flex w-screen justify-center font-extrabold mb-4'>
                        <h1>Register before June 09, 2023 to unlock bonuses worth Rs 12,000.</h1>
                    </div>

                </div>
                {/* Mentor */}
                <div className="relative isolate bg-white">
                    <h1 className='font-bold text-5xl mt-12 ' > Know your mentor</h1>
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-12">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">

                            <h1 className="mt-10  max-w-lg text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Satyajit Pattnaik
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Hi, I am Jatan Shah, a Microsoft Certified Trainer & a Microsoft Certified Excel Expert. I help working professionals master analytical skills with ease & consult for top corporate brands to make them more Data Analysis & Presentation Efficient.

                                At age 21, I founded my own training & consulting academy which has trained over 45,000+ students just in the last 2 years.
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
                <button className='bg-yellow-300 font-semibold text-red-500  text text-4xl p-4 rounded-xl px-8 mt-12 '> "Become a Certified Power BI Expert Now <br /> <span className='text-lg'>cost less then pizza</span> </button>
                <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold mb-4'>
                    <h1>Register before June 09, 2023 to unlock bonuses worth Rs 12,000.</h1>
                </div>
                {/* FAQ  */}

                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
                        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                            <p className='text-sm p-4'>I have tried my best to answer all the frequently asked questions. If you still have more questions,
                                please write to us at scontact@zepanalytics.com (Give us 8 working hours to respond back). My awesome support team will get back to you.</p>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
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
                                                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
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