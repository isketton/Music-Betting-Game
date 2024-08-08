import React, { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function SchoolRegister() {
  const { mutate, isLoading, error } = useMutation(registerSchool);
  async function registerSchool(schoolData) {
    const response = await fetch('/school/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }
  
    return await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const schoolData = {
      name: formData.get('name'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      country: formData.get('country'),
      zip_code: formData.get('zip'),
      grade_level: formData.get('grade'),
    };
    await mutate(schoolData)

    if(!error) {
      navigate('/login')
    }
  };
  
  return (
    <div className="box">
      <div className="content">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">School Name</label>
          <input
            type="text"
            id="name"
            name={string}
            required
            />
          <label htmlFor="address">School Address</label>
          <input
            type="text"
            id="address"
            name="address"
            required
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            required
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            required
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            required
          />
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            required
          />
          <label htmlFor="grade">Grade Level</label>
          <select id="grade" name="grade_level" required>
            <option value="">-- Select Grade Levels --</option>
            <option value="E">Elementary School</option>
            <option value="M">Middle School</option>
            <option value="H">High School</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}