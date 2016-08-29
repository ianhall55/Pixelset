## Component Hierarchy

**AuthFormContainer**
 - AuthForm

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
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/album/:id" | "AlbumContainer" |
| "/home/album/:id/set/:id" | "PhotoSetContainer" |
| "/gallery/album/:id/set/:id" | "PhotoSetContainer" |
