import Ember from 'ember';

export default Ember.Route.extend({
  ajaxImageAnalysis: Ember.inject.service('ajax-image-analysis'),

  // model () {
  //   return this.get('store').find('imageUrl');
  // },

  actions: {
    createPalette (data) {
      console.log('this in routes/palette-create.js is ', this);
      let newPalette = this.get('store').createRecord('palette', data);
      console.log('newPalette is', newPalette);
      console.log('data is', data);
      newPalette.save()
      .then(() => {
        this.get('flashMessages')
        .success('Palette has been saved');
      })
      .then(() => this.transitionTo('palettes'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Error: Please do not leave any field empty.');
      });
    },
    callColorApi(imageUrl) {
      console.log('call impalette api inside palette-create.js');
      let url = 'https://apicloud-colortag.p.mashape.com/tag-url.json?palette=simple&sort=relevance&url=' + imageUrl;

      return this.get('ajaxImageAnalysis').request(url, {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'qPKjKSb9PSmshOR4GoCO2nlp2ru3p1v6nrjjsn2arMbLhfjgIM',
          'Accept' : 'application/json'
        }
      })
      .then((response) => {
        console.log('response object is ', response);

        // find the number of colors in tags array response
        console.log('response.tags.length is', response.tags.length);

        // append only the color(s) that exist
        for (let i = 0; i < response.tags.length; i++) {
          Ember.$('#palette-result-color' + i).append(response.tags[i].color);
          Ember.$('#palette-result-color' + i).css("background-color", response.tags[i].color);
        }

        // Ember.$('#palette-result-color0').append(response.tags[0].color);
        // Ember.$('#palette-result-color1').append(response.tags[1].color);
        // Ember.$('#palette-result-color2').append(response.tags[2].color);
        // Ember.$('#palette-result-color3').append(response.tags[3].color);
        // Ember.$('#palette-result-color4').append(response.tags[4].color);
        // Ember.$('#palette-result-color5').append(response.tags[5].color);
        // Ember.$('#palette-result-color6').append(response.tags[6].color);

        // Ember.$('#palette-result-color0').css("background-color", response.tags[0].color);
        // Ember.$('#palette-result-color1').css("background-color", response.tags[1].color);
        // Ember.$('#palette-result-color2').css("background-color", response.tags[2].color);
        // Ember.$('#palette-result-color3').css("background-color", response.tags[3].color);
        // Ember.$('#palette-result-color4').css("background-color", response.tags[4].color);
        // Ember.$('#palette-result-color5').css("background-color", response.tags[5].color);
        // Ember.$('#palette-result-color6').css("background-color", response.tags[6].color);
      })
      .catch((reason) => {
        console.log('The reason it failed is ', reason);
        this.get('flashMessages')
        .danger('Error: Please provide a JPEG, PNG, or GIF image url under 20 MB with resolution of up to 8192 x 8192');
      });
    }
  }
});

// latest
// callColorApi(imageUrl) {
//   console.log('call impalette api inside palette-create.js');
//   let urlToSend = 'https://impalette.com/api/scan/?apiKey=c6f4b375-9098-48e8-ab77-93d8972b4401&link=' + imageUrl;
//
//   return this.get('ajaxImageAnalysis').request(urlToSend, {
//       method: 'GET',
//   });
// }
// }
// });

// curl -X POST --include 'https://apicloud-colortag.p.mashape.com/tag-file.json' \
//   -H 'X-Mashape-Key: qPKjKSb9PSmshOR4GoCO2nlp2ru3p1v6nrjjsn2arMbLhfjgIM' \
//   -F 'image=@<file goes here>' \
//   -F 'palette=simple' \
//   -F 'sort=relevance'


// return this.get('ajaxImageAnalysis').request(urlToSend, {
//   link: imageUrl,
//   method: '',
//   headers: {
//     'Access-Control-Allow-Origin': 'https://impalette.com/api/scan',
//     'apiKey': 'c6f4b375-9098-48e8-ab77-93d8972b4401',
//   }
// });
// }
// }
// });

// url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
// method: 'GET',
// header: 'Access-Control-Allow-Origin: https://quotesondesign.com'})

// https://impalette.com/api/scan/?apiKey=c6f4b375-9098-48e8-ab77-93d8972b4401&link=https://www.serviceseeking.com.au/blog/wp-content/uploads/2015/04/tree-696839_1280.jpg

// apiKey: c6f4b375-9098-48e8-ab77-93d8972b4401
// link: https://www.serviceseeking.com.au/blog/wp-content/uploads/2015/04/tree-696839_1280.jpg
