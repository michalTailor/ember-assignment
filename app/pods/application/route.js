import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {
    // let response = await fetch(
    //   'https://api.airtable.com/v0/appgnZDYMlgJNlGRI/Content?maxRecords=100&view=Content%20pipeline',
    //   {
    //     headers: {
    //       Authorization: 'Bearer key1d9Cb2uhoepb1Q',
    //     },
    //   }
    // );

    let response = await fetch('http://127.0.0.1:3000/');

    let data = await response.json();
    const res = [];
    let obj = {};

    data.forEach((element) => {
      // console.log(element);
      obj = {
        headline: element.headline,
        subHeadline:
           !element.sub_headline
            ? 'No sub-headline'
            : element.sub_headline,
        imageUrl:
           !element.header_image
            ? 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
            : element.header_image,
      };
      res.push(obj);

    });

    return res;
  }
}
