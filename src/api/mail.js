import { instance } from './index';

const sendMail = mailData => {
  return instance.post('mail', mailData);
};

export { sendMail };
