# Papercups App

Back in 2015 I spent a year photographing papercups that I found on the streets of Berlin.

This website will present them and allow users to buy a print of the photograph.

## To run locally

1. Download and install
2. Add a .env.local file in the project root folder with these variables:

```
UPLOADCARE_PUBLIC_KEY=204a5a44c0dd5638c76a
UPLOADCARE_SECRET_KEY=d6da82b40b93c26b2ec3
API_URL=https://api.uploadcare.com/files/
```

## TODO

Objective:

Make MVP submission for Monday

- [x] Deploy
  - Deploy configured but fails on Vercel. Support request sent.
- [x] Add overlay for Card with onclick that shows price reveals a buy button
  - Combined with modal and buy wizard.
- [x] Add modal with buy wizard
  - Implement Monday
- [x] Fix layout
  - [ ] Make list of styling improvements

MVP +

- [ ] Read and implement TS
  - Tuesday
- [ ] How and where would I implement Redux
  - Tuesday
