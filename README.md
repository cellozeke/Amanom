# README

## Overview

Amanom is an Amazon clone specializing in snacks. Users can search for snacks and add reviews or tags to them. Registered users also have access to a shopping cart and a profile where they can view their reviews and past orders.

## Link to live site

https://amanom.herokuapp.com/#/

## Technologies

Amanom utilizes a Ruby on Rails backend that runs on a PostgreSQL database and connects via an API to the frontend, which is written with the industry-standard React and Redux Javascript libraries. Snack images are stored on and accessed through Amazon Web Services (AWS) S3. The site itself is hosted on Heroku.

## Highlight features

### Front page image slider

![alt text](https://im5.ezgif.com/tmp/ezgif-5-21d5a2a746bc.gif)

The front page contains an image slider that automatically scrolls through each slide at a set interval. Users can also click on the side arrows to manually scroll, which ends the automatic scroll. Clicking on a slide redirects users to the relevant page. This feature's main difficulty was implementing the automatic scroll; I eventually wrote handlers to start a counter when the home page loads and delete the counter when navigating away.

```
  componentDidMount() {
    this.counter = 1;
    this.slide = setInterval(() => {
      this.counter++;
      document.getElementById('radio' + this.counter).checked = true;
      if(this.counter > 4) clearInterval(this.slide)
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.slide)
  }
```
### Search function

![alt text](https://im5.ezgif.com/tmp/ezgif-5-300d907ead84.gif)

The nav bar contains a search bar that allows users to type in search terms; alternatively, users can click on categories in the categories bar. This links to a search results page that displays snacks whose names, descriptions, or tags contain any of the search terms. 

<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
