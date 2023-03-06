#include "ndcs_esp32.h"

void setup() {
  // Initialize Serial communication.
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  // Initialize Wi-Fi.
  wificonnection_init();
  firebase_init();
}

void loop() {
  begin();
}