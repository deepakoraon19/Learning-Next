import crypto from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';

const createHash = (data : any) => Base64.stringify(crypto.SHA256(data))

export default createHash;
