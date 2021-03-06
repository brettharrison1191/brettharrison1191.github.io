# Penny

Penny is a chat bot built on the [Hubot][hubot] framework. It was
initially generated by [generator-hubot][generator-hubot], and configured to be
deployed on [Heroku][heroku] to get you up and running as quick as possible.

This README is intended to help get you started. Definitely update and improve
to talk about your own instance, how to use and deploy, what functionality is
available, etc!

[heroku]: http://www.heroku.com
[hubot]: http://hubot.github.com
[generator-hubot]: https://github.com/github/generator-hubot

### Running Penny Locally

You can test your hubot by running the following, however some plugins will not
behave as expected unless the [environment variables](#configuration) they rely
upon have been set.

You can start Penny locally by running:

    % bin/hubot

You'll see some start up output and a prompt:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    Penny>

Then you can interact with Penny by typing `Penny help`.

    Penny> Penny help
    Penny animate me <query> - The same thing as `image me`, except adds [snip]
    Penny help - Displays all of the help commands that Penny knows about.
    ...


### Penny's specific responses 
1. Penny can add two numbers together
  * write: add x and y and Penny will give you the answer!
2. Penny can generate a random number between two numbers (she will round inputs to the nearerst integer)
  * write: come up with a random number between x and y and Penny will generate a random number!
  * if y > x, Penny will tell you to give her the lower number first
3. Penny likes music - tell Penny directly what your favorite band is and she will reply directly to you and judge your music tastes!
  * write: @Penny my favorite band is x
  * try out x = Radiohead or x = The Eagles
4. Penny likes to travel - say a few places and Penny has maybe been there
    * write: Montana
    * write: Boston
