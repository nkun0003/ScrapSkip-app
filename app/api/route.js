'use server';

const BASE_URL = 'https://scrap-skipapi.onrender.com/api/crap';

// Function to fetch all items excluding taken ones
export async function fetchAllCrap(queryParams = {}) {
  const query = new URLSearchParams(queryParams).toString();
  const response = await fetch(`${BASE_URL}?${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return await response.json();
}

// Function to fetch all items posted by the logged-in user
export async function fetchMyItems(token) {
  const response = await fetch(`${BASE_URL}/mine`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorText = await response.text(); // More detailed error info
    throw new Error('Failed to fetch my items: ' + errorText);
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
  const response = await fetch('https://scrap-skipapi.onrender.com/api/crap', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: data
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

// This function to call flushed items
export async function fetchWipedItems() {
  const response = await fetch(`${BASE_URL}/wiped`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch wiped items');
  }
  return await response.json();
}

// The below are the wrap up functions for 3 above functions, this just to handles the error and helping for debugging too
export async function handleInterest(id) {
  try {
    console.log(`Marking interest for item ${id}`);
    return await markInterested(id);
  } catch (error) {
    console.error(`Error marking interest for item ${id}: ${error}`);
    throw error;
  }
}

export async function handleSuggestPickup(id, data) {
  try {
    console.log(`Suggesting pickup for item ${id}`);
    return await suggestPickup(id, data);
  } catch (error) {
    console.error(`Error suggesting pickup for item ${id}: ${error}`);
    throw error;
  }
}

export async function handleAgreeToPickup(id) {
  try {
    console.log(`Agreeing to pickup for item ${id}`);
    return await agreeToPickup(id);
  } catch (error) {
    console.error(`Error agreeing to pickup for item ${id}: ${error}`);
    throw error;
  }
}
