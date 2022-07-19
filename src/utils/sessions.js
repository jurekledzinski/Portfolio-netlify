import request from '../helpers/request';
const url = '/.netlify/functions/send-email';

export const sendEmail = async (message) => {
  const { data, status } = await request.post(url, message);
  return { data, status };
};
