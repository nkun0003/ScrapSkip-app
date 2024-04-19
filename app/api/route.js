'use server';
// import fetch from 'node-fetch';
const BASE_URL = 'https://mad9124.ohohoh.ca/api/crap';

// Function to fetch all items excluding taken ones
export async function fetchAllCrap(queryParams = {}) {
  const query = new URLSearchParams(queryParams).toString();
  const response = await fetch(`${BASE_URL}?${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return await response.json();
}

// Function to fetch details of a specific item
export async function fetchCrapDetails(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch details for item ${id}`);
  }
  return await response.json();
}

// Function to create a new item
export async function createCrap(data, token) {
  const response = await fetch('https://mad9124.ohohoh.ca/api/crap', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}` // Add the Authorization header with the token
    },
    body: data // FormData will automatically set the 'Content-Type: multipart/form-data' header and include the boundary
  });
  const result = await response.text();
  if (!response.ok) {
    console.error(result); // Log the full server response for debugging
    throw new Error('Failed to create item: ' + result);
  }
  return JSON.parse(result); // Parse JSON manually after checking the response
}

// Function to update an item
export async function updateCrap(id, data) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Failed to update item');
  }
  return await response.json();
}

// Function to delete an item
export async function deleteCrap(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
  return await response.json();
}

// These below functions for interested, suggest, agree, etc.
export async function markInterested(id) {
  return await postStatusChange(`${BASE_URL}/${id}/interested`);
}

export async function suggestPickup(id, data) {
  return await postStatusChange(`${BASE_URL}/${id}/suggest`, data);
}

export async function agreeToPickup(id) {
  return await postStatusChange(`${BASE_URL}/${id}/agree`);
}

// Generic function to handle status changes
async function postStatusChange(url, data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Failed to change status');
  }
  return await response.json();
}
