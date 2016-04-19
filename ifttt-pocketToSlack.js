var Promise = require("bluebird");
var request = require('request');

function sendToSlack(webhook, data){
	var promise = new Promise(function (resolve, reject) {
		var options = {
  			uri: webhook,
  			form: JSON.stringify(data)
		};
		request.post(options, function(err, httpResponse, body) {
			if (err) {
				reject(err);
			}else{
				resolve({
					"slack-response": body
				});
			}
		});
    });
    return promise;
}

module.exports = function (context, callback) { 
	var url;
	var imageURL;
	var title;
	var excerpt;

	var err;

	var slackWebhook;

	url = context.data.url;
	if (!url) {
		err = new Error("Unexpected payload: Missing Pocket article url");
	}

	title = context.data.title;
	if (!title) {
		err = new Error("Unexpected payload: Missing Pocket article title");
	}

	slackWebhook = context.data.SLACK_WEBHOOK_URL;
	if (!slackWebhook) {
		err = new Error("Unexpected payload: Missing Slack Webhook URL");
	}

	// Not mandatory
	imageURL = context.data.imageURL;
	excerpt = context.data.excerpt;

	if (err) {
		// Missing mandatory parameters
		callback(err);
	}else{
		// Everything is ok
		var slackMessage = {
			"attachments": [
        		{
            		"text": excerpt,
					"title": title,
					"title_link": url,
            		"thumb_url": imageURL
				}
    		]
		};

		var onFulfilled = function(success) {
    		callback(null, success);
		};

		var onRejected = function(failure) {
    		callback(failure);
		};

		sendToSlack(slackWebhook, slackMessage)
		.then(onFulfilled, onRejected);
	}
}
