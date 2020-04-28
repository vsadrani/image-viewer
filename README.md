# image-viewer

This Image viewer app is created using react and Expressjs for backend. This app allows users to view the images fetched from a text file obtained, and paginate them using infinite scroll. User can also filter the images based on dimensions. A toggle for grayscale is also availble.

Choices for the dimensions drop down comes dynamically from the backend

## Ports

```
Front-End: 3000
Back-End: 5000
```

### Dependencies

```
npm i
```

This codebase uses `prettier` for consistent code formatting and is automatically installed as a dev dependency and configured using the root file `.prettierrc`

## Running Locally

```
npm run dev
```

## Notes

Addition to the above code, I would have also included a login page that allows user to enter a email and password which would call the back end api to authorize the user and create a session id for the user.

This session id can be stored in redis with an expiry of 10 minutes which is standard and every api call after the initial login should include the session id in the header. Backend can verify the API call using the session id. This whole flow would be a good addition to any website and makes it more secure but requires time.
