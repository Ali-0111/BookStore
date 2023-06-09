import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_ID = 'NmerLOYOolwhXAVjaTow';

const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

const getAllBooksAPI = createAsyncThunk('book/ApiBooks', async () => {
  const request = await axios.get(BASE_URL);
  return request.data;
});

export const addBookToAPI = createAsyncThunk('book/addApiBook', async (newBook) => {
  await axios.post(BASE_URL, newBook);
  return newBook;
});

export const removeBookApi = createAsyncThunk(

  'book/removApiBook',
  async (itemId) => {
    await axios.delete(`${BASE_URL}/${itemId}`);
    return itemId;
  },
);
export default getAllBooksAPI;
