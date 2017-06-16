# Colorspiration.
> An app for finding the dominant colors of an image

![Colorspiration](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/Colorspiration.png)

### Technologies used
- HTML, CSS, JavaScript, jQuery, EmberJS, Sass
- 3rd party API: http://apicloud.me/apis/colortag/docs/

## Project Links

- Client GitHub Repository: https://github.com/nriser/ember-capstone
- Client Deployed: https://nriser.github.io/ember-capstone/
- API GitHub Repository: https://github.com/nriser/colorpal-api
- API Deployed: https://colorpal.herokuapp.com/

## Build Setup

To get started, follow installation guide below:

```
npm install -g ember-cli

npm install -g bower

brew install watchman (Recommended)

```
Visit https://ember-cli.com/user-guide/#getting-started for more information on how to get started with EmberJS.

## Planning

### Wireframe

![Wireframe](https://s3.us-east-2.amazonaws.com/wdi-nikki-projects/capstone_wireframe.JPG)

### User Stories

As a user, I want to…
1. Sign in upon sign up.
2. Submit an image URL and get all the dominant colors and hex codes of the image.
3. Click on 'Add color' to populate each of the four color input fields with a color that I like.
5. Click on ‘Create palette’ to add the palette to 'My Palettes'.
5. Click on ‘My Palettes’ to view a list of all saved/created palettes
6. Click on ‘Edit’ to edit one or more colors of a palette.
7. Click on ‘Save’ to save the palette with new colors.
8. Click on 'Back to My Palettes' if I change my mind about editing a palette.
9. Click on 'Cancel' if I change my mind about editing a palette
10. Click on ‘Delete’ to delete a palette

### General Approach

I decided to build this app because I always have a hard time choosing good colors to use for my projects, spending hours trying to create a custom palette using web apps like Adobe Kuler. Colorspiration allows a user to submit images, ones with whatever colors that the user wishes to use for a project. Upon submission, a user will get a list of up to 20 dominant colors present in the image and each of its corresponding hex code, and can create a new palette based on the list, update, edit, and delete a palette.

As this was the first front-end framework that I have ever worked with, I decided to start with building the minimum viable product to focus on first properly building the CRUD functionalities. Once I was able to create colors using the 'Create Palette' form, I decided to implement the use of a 3rd party API.

## Unsolved Problems
Currently, a user must copy and paste the colors attained from the ColorTag API into the 'Create New Palette' color input fields. Next step would be to either automatically populate the input fields with the first four results from the API or have a 'Add color' next to each color. I am leaning towards the latter.

## Major Hurdles
EmberJS is the first frontend framework I have ever worked with, so it took a while getting used to the concepts behind how it works, especially the relationship between routes and components, and the idea of 'action up, data down'. In general, I felt that the Ember docs are lacking, so I found myself learning a lot more from watching video tutorials online and discussing Ember concepts with experienced professionals.
