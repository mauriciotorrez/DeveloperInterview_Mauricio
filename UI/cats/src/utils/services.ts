import {URLS} from './constants'

export const getRandomWord = async () => {
        return fetch(URLS.RANDOM_WORD)
        .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        else{
            console.log('datea', data);
            const name: string = data[0];
            return name;
        }
    })
    .catch(error => {
        console.error('There was an error!', error);
        return '';
    });
  };

  export const getCatsData = async () => {
        return fetch(URLS.LOCALHOST_GET_CATS)
        .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        else{
            console.log('datea', data);
            console.log(window.screen.width);
            return data;
        }
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
  };