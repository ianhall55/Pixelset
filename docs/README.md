# Memry

[Heroku link][heroku] **Note:** This will be link to production site

[heroku]: https://memrys.herokuapp.com/

## Minimum Viable Product

Memry is a web application inspired by Pixieset and Flickr built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

0. New account creation, login, and guest/demo login
0. A production README, replacing this README
0. Hosting on Heroku
0. Photos
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Albums for organizing photos
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Photo Sets for organizing photos within albums
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Galleries for a professional, sharable photo view
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Albums Model, API, and components (2 days)

**Objective:** Albums can be created and destroyed through
the API.

- [ ] `Album` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for albums (`albumsController`)
- [ ] JBuilder views for albums
- Album components and respective Redux loops
  - [ ] `AlbumsIndex`
  - [ ] `AlbumIndexItem`
  - [ ] `AlbumForm`
- [ ] Style albums components
- [ ] Seed albums

### Phase 3: PhotoSets (1 day)

**Objective:** PhotoSets belong to albums that can be created, read, edited and destroyed through the API.

- [ ] `PhotoSet` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for photoSets (`PhotoSetsController`)
- [ ] JBuilder views for photoSets
- [ ] Adding photos requires a photoSet
- [ ] Moving photos between photoSets
- [ ] Viewing photos by photoSet
- [ ] Style photoSet components
- [ ] Seed photoSets

### Phase 4: Photos (1 day)

**Objective:** Photos belong to photoSets and can be added, edited, and destroyed

- [ ] `Photo` model
- [ ] Fetching photos for photosets
- [ ] Style photo components
- [ ] Seed photos with seed data

### Phase 5: Add in Gallery viewing feature (1 day)

**objective:** Add in gallery for stylish viewing of photo album

- [ ] Add gallery components
- [ ] Add Gallery styling to seeded notes

### Phase 6: Splash page

**objective:** Add extra features to photos, photosets, add splash page

- [ ] Add drag and drop feature to order photos
- [ ] Add drag and drop feature to order photoSets
- [ ] Add html components to splash page
- [ ] Style splash page

### Bonus Features (TBD)
- [ ] slideshow feature for gallery
- [ ] Add photos page to show collection of all photos for user
- [ ] Add Shared Events page where users can share event albums with other users
- [ ] Add photostream with favorites, comments
