#include <WiFi.h>
#include <FirebaseESP32.h>
#include "addons/TokenHelper.h"

// Set your Wi-Fi network credentials.
#define WIFI_SSID "NAF Tech_WiFi"
#define WIFI_PASSWORD "N@f Tech"

// Set your Firebase project credentials.
#define FIREBASE_HOST "your_project_id.firebaseio.com"
#define API_KEY "AIzaSyBKK46Pt3QXzfecY-g10NlxYOTAZ_zXE5k"
#define RTDBURL "https://connect-jrc-iot-default-rtdb.asia-southeast1.firebasedatabase.app/"
// #define DEVICE_ID ""

// Define a Firebase data object.
FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int intValue;
float floatValue;
bool signupOK = false;
int ledpin = 13;

// Define a callback function to handle changes in the Firebase data.
void onDataChangeCallback(FirebaseData data) {
  Serial.println(data.stringData());
}

void begin() {
  if (Firebase.ready() && signupOK) { // && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)) {
      sendDataPrevMillis = millis();
      if (Firebase.RTDB.getInt(&firebaseData, "/hpp3oZKQUVB3iqOTDFi5/XXOfKLv5rdnI7tSbyDhH/state")) {
        // if (firebaseData.dataType() == "int") {
          intValue = firebaseData.intData();
          digitalWrite(ledpin, intValue);
          // Serial.print(firebaseData.stringData());
        // }
      }
      else {
        Serial.println(firebaseData.errorReason());
      }
    }
}

void wificonnection_init() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to Wi-Fi...");
  }
}

void firebase_init() {
  config.api_key = API_KEY;
  config.database_url = RTDBURL;
  // Enable WiFi reconnection
  Firebase.reconnectWiFi(true);

  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("Auth Success");
    config.token_status_callback = tokenStatusCallback;
    signupOK = true;
  }
  else{
    Serial.printf("Auth Failed, %s\n", config.signer.signupError.message.c_str());
  }

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

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
