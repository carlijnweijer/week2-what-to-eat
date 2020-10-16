--- What to eat Website ---

--- FEED ---

### Story

As a user I want to see what other people are cooking tonight. I want to filter on "latest" and on "most upvoted"

# Model

Recipe: Object
id:
title:
cooktime:
cuisine:
link to recipe

Recipes: []
Storage: useState

# Hardcode some Recipes

# Processing / Output

Map over array and display them
Maybe make seperate component for it

# Steps

[x] create-react-app
[x] make a component
[x] import component and use it
[x] hardcode recipes as inital state
[x] display the recipes, map --> JSX

### Story

As a user I want to add what I decided to cook to the feed so other users can see

# Make the input dynamic

[] make a new component
[] UI
[] Button
[] Inputfield
[] Eventlisteners & Handlers
[] onChange
[] onClick
[] event.preventDefault() -> do not refresh the page
[] Define a function, callback prop, in feed
[] Pass the callback prop down the form
[] Call our callback prop and pass in the name as an arguemnt
[] Data
[] New id for the recipe
[] Inputfields
[] Update the state
[] setRecipes
