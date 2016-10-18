'use strict';
var Alexa = require('alexa-sdk');
var MeuralHelper = require('./meural_helper');
var APP_ID = "amzn1.ask.skill.{YOUR-APP-ID}";
var SKILL_NAME = 'Meural Canvas';

var RESPONSES = [
	"Now displaying 'The Great Wave off Kanagawa'.",
	"Did you know Picasso refused to talk about the paintings symbolism?",
	"You are as free as a bird today Paddy!",
	"The weather will be a mixed bag today. Mostly different shades of grey",
	"Art display restored, Goodbye!"
];

var RESPONSE_INDEX = 0;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(intentHandlers, navigateHandlers);
    alexa.execute();
};

var intentHandlers = {
    'LaunchRequest': function () {
        this.emit(':ask', "Hello, I'm Meural! How can I help?");
    },
    'MeuralNavigationIntent': function () {
        var command = this.event.request.intent.slots.NAVIGATE.value;
        this.emit('Naviate', command, (direction, success) => {
            this.emit(':ask', RESPONSES[RESPONSE_INDEX++], 'Would you like to see anything else?');
        })
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me show the next pictures, or, you can say stop... How can I help?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'Unhandled': function() {
        this.emit(':ask', 'Sorry, I didn\'t get that.', 'Try asking me to do something.');
    }
};

var navigateHandlers = {
    'Naviate': function (command, callback) {
        var meuralHelper = new MeuralHelper();
        var direction = meuralHelper.convertCommandToDirection(command);
        meuralHelper.navigate(direction).then(function() {
            callback(direction, true);
        }).catch(function(err) {
            callback('', false);
        });
    }
};