import md5 from 'crypto-js/md5';

const encryptEmail = (email) => md5(email).toString();

export default encryptEmail;
