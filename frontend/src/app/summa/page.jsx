'use client';
import { useState } from 'react';
import axios from 'axios';

export default function EmailForm() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/Email/sendEmail`, {
        to,
        subject,
        text: message,
      });

      if (response.data.success) {
        setStatus('✅ Email sent successfully!');
        setTo('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('❌ Failed to send email.');
      }
    } catch (error) {
      console.error('Axios error:', error);
      setStatus('❌ An error occurred while sending.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Send Email</h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Email</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
      {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
}
