# README

## Overview

Amanom is an Amazon clone specializing in snacks. Users can search for snacks and add reviews to them. Registered users also have access to a shopping cart and a profile where they can view their reviews and past orders.

## Link to live site

https://amanom.herokuapp.com/#/

## Technologies

Amanom utilizes a Ruby on Rails backend that runs on a PostgreSQL database and connects via an API to the frontend, which is written with the industry-standard React and Redux Javascript libraries. Snack images are stored on and accessed through Amazon Web Services (AWS) S3. The site itself is hosted on Heroku.

## Highlight features

### Front page image slider

![alt text](https://live.staticflickr.com/65535/51589819356_fe02b71b63_o.gif)

The front page contains an image slider that automatically scrolls through each slide at a set interval. Users can also click on the side arrows to scroll manually, which ends the automatic scroll. Clicking on a slide redirects users to the relevant page. This feature's main difficulty was implementing the automatic scroll; I eventually wrote handlers to start a counter when the home page loads and delete the counter when navigating away.

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
### Sort and filter function

![alt text](https://live.staticflickr.com/65535/51590478824_99c3231b3b_o.gif)

The search results page has sort and filter functionality. Relevance sorting was trickier than the others to implement, as it required me to assign a point value system to snacks based on matches between the search terms and their names/descriptions. Eventually, I would like to add tagging functionality and include that in relevance algorithm as well.

```
  def show_search_results
    results = {}
    params[:words].each do |word|
      (Snack.find_by_sql ['SELECT * FROM snacks WHERE name ILIKE ?', "%#{word}%"]).each do |snack|
        results[snack] ? results[snack] += 2 : results[snack] = 2
      end
      (Snack.find_by_sql ['SELECT * FROM snacks WHERE description ILIKE ?', "%#{word}%"]).each do |snack|
        results[snack] ? results[snack] += 1 : results[snack] = 1
      end
    end
    @results = Hash[results.sort_by { |_, v| -v }]
    render :show_search_results
  end
```
