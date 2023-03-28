#include "ndcs_esp32.h"

char* wifi_ssid = "NAF Tech_WiFi";
char* wifi_password = "N@f Tech";
    char* email = "shirsho@iit.com";
    char* password = "000000";                // put your account's password in between the quotes
    char* device_id = "9uoTy3s1YOmJOFKyqySG";

NDCS Ndcs;
int i = 0, j=0;

void setup() {
  
  // Initialize Serial communication.
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  pinMode(26, OUTPUT);
  pinMode(15, OUTPUT);

  // analogWrite()
  // Initialize Wi-Fi.
  Ndcs.begin(wifi_ssid,wifi_password,email,password,device_id);
}

void loop() {
  // Ndcs.loop();
  if(digitalRead(13)){
    digitalWrite(26,0);
  } else{
    digitalWrite(26,1);
  }
  const char* l = Ndcs.receive(0);
  Serial.println(l);
  delay(1000);
  // digitalWrite(13,1);
  // delay(1000);
  // digitalWrite(13,0);
  // delay(1000);
  // Serial.println(WIFI_SSID);
}
