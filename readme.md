# telegram Bot On App Engine

## How to do it
1. Make sure your app is workable at local
2. Have your package.json `npm run start` to run up your app
3. setup your app.yaml
4. Go to GCP and active an app engine and go thru to the page in which it ask you to install gcloud CDK
5. `gcloud app deploy`  to deploy
6. `gcloud app logs tail -s default` to see log