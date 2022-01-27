import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${url}/add`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API ", error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error);
  }
};

export const getChatList = async (user) => {
  try {
    console.log("getChatList", user);
    const response = await axios.post(`${url}/conversation/list`, user);
    return response.data;
  } catch (error) {
    console.log("Error while calling getChatList API ", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API ", error);
  }
};

export const getConversation = async (users) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, users);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API ", error);
  }
};

export const getMessages = async (id) => {
  try {
    const response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessages API ", error);
  }
};

export const newMessages = async (data) => {
  try {
    return await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};
