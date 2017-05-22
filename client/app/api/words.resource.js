import config from './../../../server/config';

export default class WordsResource {
  static getWords(param) {
    const endpoint = 'api/words';

    return fetch(`http://${config.ip}:${config.port}/${endpoint}?value=${param}`).then((response) => {
      const json = response.json();

      if (!response.ok) {
        return json.then((err) => {
          throw err;
        });
      }
      return json;
    });
  }
}
