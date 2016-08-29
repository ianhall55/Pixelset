```json
{
  currentUser: {
    id: 1,
    username: "ian-hall"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    addAlbum: {errors: [],
    addPhotoSet: {errors: [],
    addPhoto: {errors: []}
  },
  albums: {
    1: {
      title: "Ian's Album",
      ownerId: 1,
      photoSets: {
        1: {
          title: "first set",
          ord: 2,
          albumId: 1,
          photos: {
            1: {
              photoSetId: 1,
              ord: 1,
              photo: jpeg
            }
          }
        }
      }
    }
  },
  gallery: {
    album: {
      1: {
        title: "Ian's Album",
        ownerId: 1,
        photoSets: {
          1: {
            title: "first set",
            ord: 2,
            albumId: 1,
            photos: {
              1: {
                photoSetId: 1,
                ord: 1,
                photo: jpeg
              }
            }
          }
        }
      }
    }
  };
```
