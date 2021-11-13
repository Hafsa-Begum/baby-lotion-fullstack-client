
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

};
// const firebaseConfig = {
//     apiKey: "AIzaSyCw5KofR0S2KVvNUqJtbpEDbA46kLIEbpU",
//     authDomain: "baby-lotion.firebaseapp.com",
//     projectId: "baby-lotion",
//     storageBucket: "baby-lotion.appspot.com",
//     messagingSenderId: "978176589901",
//     appId: "1:978176589901:web:8c9f0340b29759d6325c04"
// };

export default firebaseConfig;