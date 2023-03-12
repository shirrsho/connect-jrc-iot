#include "ndcs_esp32.h"
#include<bits/stdc++.h>
// #include <nlohmann/json.hpp>
#include <WiFi.h>
#include <FirebaseESP32.h>
#include "addons/TokenHelper.h"

using namespace std;
 // Set your Wi-Fi network credentials.
 #define WIFI_SSID "NAF Tech_WiFi"
 #define WIFI_PASSWORD "N@f Tech"
 #define DEVICE_ID "/hpp3oZKQUVB3iqOTDFi5/"

 // Set your Firebase project credentials.
 #define FIREBASE_HOST "your_project_id.firebaseio.com"
 #define API_KEY "AIzaSyBKK46Pt3QXzfecY-g10NlxYOTAZ_zXE5k"
 #define RTDBURL "https://connect-jrc-iot-default-rtdb.asia-southeast1.firebasedatabase.app/"
 // #define DEVICE_ID ""  

 // Define a Firebase data object.
 FirebaseData firebaseData;
//  FirebaseJson json;
//  using json = nlohmann::json;
 FirebaseAuth auth;
 FirebaseConfig config;

 unsigned long sendDataPrevMillis = 0;
 int intValue;
 float floatValue;
 bool signupOK = false;
 int ledpin = 13;
 vector<int> pins;
 vector<string> paths;

 // Define a callback function to handle changes in the Firebase data.
 void onDataChangeCallback(FirebaseData data) {
   Serial.println(data.stringData());
 }

 // Firebase

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

void init_types(){
  string typecatcher = "/state";
  for(int i = 1 ; i <15 ; i++){
  string address = DEVICE_ID + to_string(i) + typecatcher;
  if(Firebase.get(firebaseData,address)){
      pins.push_back(i);
      paths.push_back((address));
      if (firebaseData.dataType() == "int") {
          digitalWrite(i,firebaseData.intData());
      } else if (firebaseData.dataType() == "float") {
          Serial.print(i);
          Serial.println("float");
      } else if (firebaseData.dataType() == "string") {
          Serial.print(i);
          Serial.println("str");
      } else {
          Serial.print(i);
          Serial.println(firebaseData.dataType());
      }
  }
  else {
      Serial.println(firebaseData.errorReason());
  }
  }
}
// Wifi Module

void wificonnection_init() {
   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
   while (WiFi.status() != WL_CONNECTED) {
     delay(1000);
     Serial.println("Connecting to Wi-Fi...");
   }
 }


 void NDCS::begin() {
   wificonnection_init();
   firebase_init();
   init_types();
 }

 void NDCS::loop() {
   if (Firebase.ready() && signupOK) {
// // init_types();
// /*
//        sendDataPrevMillis = millis();
//       //  Serial.println("/%s/-1/datatype",DEVICE_ID);
//       string last = "/-1/datatype";
//       string address = DEVICE_ID+last;
//        if (Firebase.RTDB.getString(&firebaseData, address)) {
//         //  Firebase.RTDB.getInt();
//          Serial.println(firebaseData.stringData());
//           // intValue = firebaseData.intData();
//           // digitalWrite(ledpin, intValue);
//        }
//        else {
//          Serial.println(firebaseData.errorReason());
//        }
//        */

        for(int i=0 ; i<pins.size() ; i++){
          if(Firebase.get(firebaseData,paths[i])){
            Serial.println(firebaseData.dataType());
            if (firebaseData.dataType() == "boolean") {
                digitalWrite(pins[i],firebaseData.boolData());
                // Serial.print(pins[i]);
                // Serial.println(firebaseData.boolData());
            } 
            // else {
            //     analogWrite(pins[i],firebaseData.floatData());
            //     Serial.print(pins[i]);
            //     Serial.println("float");
            // }
            // } else if (firebaseData.dataType() == "string") {
            //     Serial.print(pins[i]);
            //     Serial.println("str");
            // } else {
            //     Serial.print(pins[i]);
            //     Serial.println("unk");
            // }
        }
        else {
            Serial.println(firebaseData.errorReason());
        }
        }
        }
     }
 //}