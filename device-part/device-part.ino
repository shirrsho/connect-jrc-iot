#include "ndcs_esp32.h"

char* wifi_ssid = "NAF Tech_WiFi";
char* wifi_password = "N@f Tech";
    char* email = "shirsho@iit.com";
    char* password = "000000";                // put your account's password in between the quotes
    char* device_id = "RsBwLZPGYVNHVAaXArbS";

NDCS Ndcs;

void setup() {
  
  // Initialize Serial communication.
  Serial.begin(9600);

  // analogWrite()
  // Initialize Wi-Fi.
  Ndcs.begin(wifi_ssid,wifi_password,email,password,device_id);
}

void loop() {
  // Ndcs.loop();
  Ndcs.send(2,"Data");
  // digitalWrite(13,1);
  // delay(1000);
  // digitalWrite(13,0);
  // delay(1000);
  Serial.println(Ndcs.receive(3));
}
