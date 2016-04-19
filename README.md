# IFTTT Pocket to Slack
Simple IFTTT channel to share articles from **Pocket** to **Slack**. This hack is powered by [webtasks](https://webtask.io/). Based on [If This Then Node.js](https://auth0.com/blog/2015/07/28/if-this-then-node-dot-js-extending-ifttt-with-webtask-dot-io/).

# Setup
First of all you need installed **wt-cli** on your system.

```
$ npm i -g wt-cli
$ wt init
```

After that, you need to setup a new [incoming webhook](https://api.slack.com/incoming-webhooks) into your Slack. To do that, add an application to your team. Then **build** a new one [https://slack.com/apps/build](https://slack.com/apps/build) and select *Something just for my team*. And later, select *Incoming Webhooks*. Select the channel you want to publish your articles and copy the given **webhook url**.
![Incoming Webhook](https://raw.githubusercontent.com/javialgaba/ifttt-pocketToSlack/master/slack-incoming-webhook.png)
 

Execute the following snippet with your webhook url.

```
wt create --secret SLACK_WEBHOOK_URL={url} ifttt-pocketToSlack.js
```

Finally, we need to setup our custom IFTTT recipe.
Follow this example (If This Then Webtask): [https://auth0.com/blog/2015/07/28/if-this-then-node-dot-js-extending-ifttt-with-webtask-dot-io/](https://auth0.com/blog/2015/07/28/if-this-then-node-dot-js-extending-ifttt-with-webtask-dot-io/)

You should end up having a recipe like the following: 

```
{webtaksUrl}/ifttt-pocketToSlack?url={{Url}}&imageURL={{ImageUrl}}&title={{Title}}&excerpt={{Excerpt}}
```
![Recipe](https://raw.githubusercontent.com/javialgaba/ifttt-pocketToSlack/master/ifttt-recipe.png.png)

# LICENSE
The MIT License (MIT)

Copyright (c) 2016 Javier Algaba Borrego

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

