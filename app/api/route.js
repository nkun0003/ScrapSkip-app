// app/api/route.js

const BASE_URL = 'https://mad9124.ohohoh.ca/api';

/**
 * Posts a new item to the server.
 * @param {FormData} data - The form data containing the item details.
 * @returns {Promise<any>} The response from the server as JSON.
 */

export async function fetchAllCrap() {
  try {
    const response = await fetch(`${BASE_URL}/crap`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function postCrap(data) {
  try {
    const response = await fetch(`${BASE_URL}/crap`, {
      method: 'POST',
      body: data
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json(); // Assuming your API returns JSON
  } catch (error) {
    console.error('Failed to post crap:', error);
    throw error;
  }
}

/**
 * Fetches an item by ID.
 * @param {string} id - The ID of the item to fetch.
 * @returns {Promise<any>} The fetched item data as JSON.
 */
export async function fetchCrapById(id) {
  try {
    const response = await fetch(`${BASE_URL}/crap/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch crap:', error);
    throw error;
  }
}

/**
 * Updates an item by ID.
 * @param {string} id - The ID of the item to update.
 * @param {Object} data - The data to update the item with.
 * @returns {Promise<any>} The updated item data as JSON.
 */
export async function updateCrapById(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/crap/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to update crap:', error);
    throw error;
  }
}

/**
 * Deletes an item by ID.
 * @param {string} id - The ID of the item to delete.
 * @returns {Promise<any>} The server response to the delete operation.
 */
export async function deleteCrapById(id) {
  try {
    const response = await fetch(`${BASE_URL}/crap/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json(); // Assuming your API returns something on delete
  } catch (error) {
    console.error('Failed to delete crap:', error);
    throw error;
  }
}
