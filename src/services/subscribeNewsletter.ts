import axios from 'axios';

export const subscribeNewsletter = async (senderMail:string) => {
  const data = {
    senderMail,
  };

  try {
    return await axios.post('/api/newsletter', data);
  } catch (error) {
    return error;
  }
};