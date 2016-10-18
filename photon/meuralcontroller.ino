// -----------------------------------
// Control a Meural Canvas over the Internet
// -----------------------------------

#include <string.h>
#include "HttpClient/HttpClient.h"
#include "TimeAlarms/TimeAlarms.h"

/**
* Declaring the variables.
*/
HttpClient http;

// Headers currently need to be set at init, useful for API keys etc.
http_header_t headers[] = {
    //  { "Content-Type", "application/json" },
    //  { "Accept" , "application/json" },
    { "Accept" , "*/*"},
    { NULL, NULL } // NOTE: Always terminate headers will NULL
};

http_request_t request;
http_response_t response;

// Reqeuests
TCPClient client;
String HOST_PICTUREFRAME = "{YOUR-MEURAL-IP-HERE}"; //i.e 127.0.0.1

int navigateHandler(String command);

  
void setup()
{
    // register the cloud function
    Particle.function("navigate", navigateHandler);
    
    // Setup Request
    request.hostname = HOST_PICTUREFRAME;
    request.port = 80;
    
    Serial.begin(9600);
}


void loop()
{
  
}

// This function automagically gets called upon a matching POST request
int navigateHandler(String command)
{
    request.path = "/remote/control_command/set_key/" + command;

    // Get request
    http.get(request, response, headers);
    Serial.print("Application>\tResponse status: ");
    Serial.println(response.status);

    Serial.print("Application>\tHTTP Response Body: ");
    Serial.println(response.body);
	
    return 1;
}