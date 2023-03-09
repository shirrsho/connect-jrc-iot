#include "ndcs_esp32.h"

 // Set your Wi-Fi network credentials.
 #define WIFI_SSID "NAF Tech_WiFi"
 #define WIFI_PASSWORD "N@f Tech"
 #define DEVICE_ID ""

 NDCS Ndcs;

void setup() {
  
  // Initialize Serial communication.
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  // analogWrite()
  // Initialize Wi-Fi.
  Ndcs.begin();
}

void loop() {
  Ndcs.loop();
  // Serial.println(WIFI_SSID);
}
