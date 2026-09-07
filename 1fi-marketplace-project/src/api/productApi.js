import mockData from './mockData.json';

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockData) {
        resolve(mockData);
      } else {
        reject(new Error('Failed to fetch marketplace products.'));
      }
    }, 600);
  });
};