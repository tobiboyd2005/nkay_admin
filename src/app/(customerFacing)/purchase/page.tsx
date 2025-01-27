"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import {parseJsonFile} from "next/dist/build/load-jsconfig";

const Donate = () => {
  const publicKey = `${process.env.PAYSTACK_PUBLIC_KEY}`;

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount ? parseFloat(amount) * 100 : 0,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Your order is successful!!")
  };

  const style = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button: "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md",
  };

  return (
    <div className="px-4">
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make your payment here
      </h1>
      <div className="max-w-md mx-auto my-4">
        <input
          type="email"
          placeholder="Email"
          className={style.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className={style.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          className={style.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone number"
          className={style.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <PaystackButton className={style.button} {...componentProps}>
          Pay Now
        </PaystackButton>
      </div>
    </div>
  );
};

export default Donate;
