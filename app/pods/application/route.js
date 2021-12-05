import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch(
      'https://api.airtable.com/v0/appgnZDYMlgJNlGRI/Content?maxRecords=100&view=Content%20pipeline',
      {
        headers: {
          Authorization: 'Bearer key1d9Cb2uhoepb1Q',
        },
      }
    );
    let data = await response.json();
    const res = [];
    let obj = {};

    data.records.forEach((element) => {
      obj = {
        headline: element.fields.Headline,
        subHeadline:
          typeof element.fields['Sub-headline'] === 'undefined'
            ? 'No sub-headline'
            : element.fields['Sub-headline'],
        imageUrl:
          typeof element.fields['Header image'] === 'undefined'
            ? 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
            : element.fields['Header image'][0].url,
      };
      res.push(obj);

    });

    return res;
  }
}
