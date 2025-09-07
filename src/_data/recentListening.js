import fetch from 'node-fetch';

export default async () => {
  return await fetch(`https://patrick-thomas-dunn.vercel.app/`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};
