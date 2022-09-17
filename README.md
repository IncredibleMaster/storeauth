## Furniture Stores built with react
- Uses react-router version 6
- Uses auth0 for authentication
- Payments with stripe

### Depoyed on Netlify
[Furniture-stores](https://furniture-stores-hb.netlify.app/)

#### Setup

```bash
npm install && npm start
```
###### For build up
```bash
npm run build
```

### To install netlify CLI
```bash
npm install -g netlify-cli
```
### To build up with netlify
```bash
ntl dev
```

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)



## Stripe
- [Stripe - Main Docs](https://stripe.com/docs)

### Built using  John-Smilgas course on Udemy