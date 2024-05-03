"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'


const PaymentPage = ({ username }) => {
    // const {data : session} = useSession()
    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })

    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        // Get the order id
        let a = await initiate(amount, username, paymentform);
        let orderId = a.id

        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount,
            "currency": "INR",
            "name": "GetMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-[350px]' src="https://i.pinimg.com/564x/10/52/8d/10528d90850935729d010345d9b78c19.jpg" alt="" />
                <div className='absolute -bottom-20 right-[45%] '>
                    <img width={120} height={120} className=' border-white border-2 rounded-lg ' src="https://i.pinimg.com/736x/4f/e9/14/4fe914d247fddcaa026f22e64403cb03.jpg" alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-24 flex-col gap-2">
                <div className='font-bold flex flex-col items-center text-lg'>
                    {username}
                </div>
                <div className='text-slate-300'>
                    Creating Animated art for VTT's
                </div>
                <div className='text-slate-300'>
                    10,684 members. 83 posts. $15,640/release
                </div>

                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show the list of all the supporters as a leaderboard */}
                        <h2 className='my-5 text-center text-2xl font-bold'>Supporters</h2>
                        <ul className='mx-5 text-lg '>
                            {payments.map((p, i) => {
                                return <li className='my-4 flex gap-2 items-center'>
                                    <img width={35} src="avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated  <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="my-5 text-2xl font-bold">Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            {/* input for name and message */}
                            <div>
                                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount*100))} className='text-white bg-gradient-to-br from-purple-700 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay</button>
                        </div>

                        {/* Or choose from these amounts */}
                        <div className="flex gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(5000)}>Pay ₹50</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(10000)}>Pay ₹100</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(50000)}>Pay ₹500</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PaymentPage


