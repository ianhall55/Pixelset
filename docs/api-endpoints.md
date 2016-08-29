# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `PATCH /api/albums/:id`
- `DELETE /api/albums/:id`

### PhotoSets

- `GET /api/albums/:id/sets`
- `POST /api/albums/:id/sets`
- `PATCH /api/albums/:id/sets/:id`
- `DELETE /api/albums/:id/sets/:id`

### Photos

- `POST /api/albums/:id/sets/:id/photo`
- `PATCH /api/albums/:id/sets/:id/photo/:id`
- `DELETE /api/albums/:id/sets/:id/photo/:id`
