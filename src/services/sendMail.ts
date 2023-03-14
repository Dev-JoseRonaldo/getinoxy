import axios from 'axios';

export const sendContactMail = async (name:string, senderMail:string, topium: string, content:string) => {
  const data = {
    name,
    senderMail,
    topium,
    content
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
};