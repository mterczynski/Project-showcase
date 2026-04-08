# Project showcase

Website with my projects, published to https://github.com/mterczynski/mterczynski.github.io

## Running the app locally

Install dependencies:

```bash
npm install
```

Start a local static server:

```bash
npm start
```

Then open http://localhost:8080 in your browser.

Alternative workflow: use `peakchen90.open-html-in-browser` extension for VS Code.

## Scripts

### Format

Make sure to run format script before submitting a PR

```bash
npm run format
```

### Deploy

Deploy script creates and pushes a commit in mterczynski.github.io. It can be run using the following command:

```bash
sh deploy.sh
```

Deployment pipelines can be tracked [here](https://github.com/mterczynski/mterczynski.github.io/actions)
