---
title: "Simplest Backup With S3"
cover: "https://res.cloudinary.com/avotoast/image/upload/c_limit,h_400,q_auto:good,w_600/v1530543850/nangio/StockSnap_BSALH690F5.jpg"
date: "2018/01/03"
category: "tech"
tags:
  - aws
  - javascript
  - node
---

Sometimes you just want to back something up with minimal configuration. No retained backups, nothing fancy, just a backup that's not on the same server. I think this might be the easiest solution I've seen. And it is super cheap, possibly free! S3's free tier gives you 5GB of data and 15GB of transfer for free. After that, [pricing is still very cheap](https://aws.amazon.com/s3/pricing/). It can be even cheaper if you choose Reduced Redundancy Storage, but I wouldn't recommend that for a backup.

This post assumes you have Node installed locally. If not, [you can get it here](https://nodejs.org/en/download/).

First step is to log into AWS and create an S3 Bucket. Remember the name of the bucket. You can choose Reduced Redundancy Storage at this point.

Next, make sure you have your AWS credentials set up. See [the AWS documentation for details](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html). I personally use the ~/.aws/credentials file approach. Make sure the \[default\] header is set to the same account you created the S3 bucket with.

Next step is to grab the required node package so we can generate an S3 URL. You can do this on your local machine. It doesn't need to be done on the machine you're backing up.

`npm install -g aws-sdk`

Now save this to a new file called s3url.js.

    const AWS = require("aws-sdk");

    if (require.main === module) {
      if (process.argv.length !== 4) {
        console.log("Usage: createPresignedUrl <bucket> <filename>");
        process.exit(1);
      }

      // This will load credentials automatically from whatever source you have configured.
      const s3 = new AWS.S3();

      let params = {
        Bucket: process.argv[2],
        Key: process.argv[3],
        Expires: 315360000 // 10 years
      };

      // Create the signed URL and print it to stdout
      let url = s3.getSignedUrl("putObject", params);
      console.log(
        `You can upload to this URL like this:\n\n  curl "${url}" --upload-file FILENAME\n`
      );
    }

If you get an error about `Error: Cannot find module 'aws-sdk'`, refer to [this StackOverflow post](https://stackoverflow.com/questions/12594541/npm-global-install-cannot-find-module)

Now, we generate the URL we're going to upload to. This URL will let anyone overwrite your file, so don't share it!

`node s3url.js $BUCKET_NAME $FILENAME`

This should output something like (you're going to need the generated URL in the next step):

    You can upload to this URL like this:

        curl "https://s3.amazonaws.com/$BUCKET_NAME/$FILENAME?AWSAccessKeyId=SOMETHING&Expires=1830442652&Signature=SOMESIGNATURE" --upload-file FILENAME

Now, on the machine you want to backup, create a file `backup.sh`. In my case, the file was at `/home/ubuntu/backup.sh`.

    #!/bin/bash

    # Create an archive of the folder we want to backup (in this game, the game Starbound, which is a ton of fun).
    tar czvf /home/ubuntu/starbound.tar.gz /home/ubuntu/starbound_game

    # Now we save the file to S3. Make sure the URL is in quotes like below!
    curl "THE URL POSTED ABOVE" --upload-file /home/ubuntu/starbound.tar.gz

Now we're going to create a cronjob to do this nightly. The 9 hour in UTC translates to 3am in Central time when it isn't daylight savings time.

    crontab -e

    # Add this to the bottom and the exit the editor. Adjust the path for where you saved your script.
    0 9 * * * bash /home/ubuntu/backup.sh

And that's it!
