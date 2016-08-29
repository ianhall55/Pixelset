## Component Hierarchy

**SignupFormContainer**
 - SignupForm

**LoginFormContainer**
 - LoginForm

**SplashContainer**
 - Home
 - SplashHeader

**HomeContainer**
 - HomeHeader
 - AlbumIndex
  * AlbumIndexItem
  * NewAlbum

**AlbumContainer**
 - PhotoSetIndex
 - PhotoSetIndexItem
 - NewPhotoSet

**PhotoSetContainer**
 - PhotoIndex
 - PhotoIndexItem
 - NewPhoto

**GalleryIndexContainer**
 - PhotoSetIndex
 - PhotoSetIndexItem
 - PhotoSetContainer
  * PhotoIndex
  * PhotoIndexItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashContainer" |
| "/signin" | "Login" |
| "/signup" | "Signup" |
| "/home" | "HomeContainer" |
| "/home/album/:id" | "AlbumContainer" |
| "/home/album/:id/set/:id" | "PhotoSetContainer" |
| "/gallery/album/:id/set/:id" | "PhotoSetContainer" |
