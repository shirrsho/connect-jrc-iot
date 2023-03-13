#include "ndcs_esp32.h"

char* wifi_ssid = "NAF Tech_WiFi";
char* wifi_password = "N@f Tech";
char* device_id = "hpp3oZKQUVB3iqOTDFi5";

NDCS Ndcs;

void setup() {
  
  // Initialize Serial communication.
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  // analogWrite()
  // Initialize Wi-Fi.
  Ndcs.begin(wifi_ssid,wifi_password,device_id);
}

void loop() {
  Ndcs.loop();
  // Serial.println(WIFI_SSID);
}
