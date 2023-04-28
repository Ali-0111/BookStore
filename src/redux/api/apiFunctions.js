import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_ID = '5Scro1FT6XlEWeRzvazP';

const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

const getAllBooksAPI = createAsyncThunk('book/ApiBooks', async () => {
  const request = await axios.get(BASE_URL);
  console.log(request, 'all books');
  return request.data;
});

export const addBookToAPI = createAsyncThunk('book/addApiBook', async () => {
  const request = await axios.post(BASE_URL, {
    item_id: Date.now().toString(),
    title: 'Chemistry',
    author: 'Safari',
    category: 'N/A',
  });
  console.log(request, 'bookAdded');
  return request.data;
});

export default getAllBooksAPI;
