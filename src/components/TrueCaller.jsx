import React, { useState } from 'react';
import mockDatabase from '../config';

export default function TrueCallerClone() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchName = async () => {
    setLoading(true);
    setUserName(null);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setUserName(mockDatabase[phoneNumber] || 'Name not found');
    } catch (error) {
      setUserName('Error fetching name');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light'>
      <h1 className='mb-4 fw-bold'>Who_Caller</h1>

      <div
        className='card p-4 shadow w-100'
        style={{ maxWidth: '400px', borderRadius: '1rem' }}
      >
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-align-content-sm-between gap-2'>
          <button
            className='btn btn-outline-info w-100'
            onClick={fetchName}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Find Name'}
          </button>
          <button
            className='btn btn-outline-secondary w-100'
            onClick={() => {
              setPhoneNumber('');
              setUserName(null);
            }}
          >
            Reset
          </button>
        </div>
        {userName && (
          <div className='text-center mt-4 fw-semibold bg-body-secondary p-3 border-2 border rounded'>
            Result: {userName}
          </div>
        )}
      </div>
    </div>
  );
}
