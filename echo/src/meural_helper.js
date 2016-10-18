'use strict';
var _ = require('lodash');
var requestPromise = require('request-promise');
var ENDPOINT = 'https://maker.ifttt.com/trigger/navigate/with/key/{YOUR-MAKER-KEY}';

function MeuralHelper() {}

MeuralHelper.prototype.convertCommandToDirection = function(command) {
    var direction = 'right';

    switch (command) {
        case 'left':
        case 'previous':
        case 'last':
            direction = 'left';
            break;
        case 'right':
        case 'next':
        	direction = 'right';
        	break;
        case 'up':
        case 'info':
        case 'details':
        case 'artist name':
        case 'tell me more':
        	direction = 'up';
        	break;
        case 'down':
        case 'cancel':
        case 'settings':
        	direction = 'down';
			break;
		default :
    		direction = 'right';
			break;
        break;
    }

    return direction;
}

MeuralHelper.prototype.navigate = function(direction) {
	var options = {
		method: 'POST',
		uri: ENDPOINT,
        body: {
            value1: direction
        },
		json: true
	};
	return requestPromise(options);
};

module.exports = MeuralHelper;