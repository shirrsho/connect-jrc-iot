#include "ndcs_esp32.h"
#include<bits/stdc++.h>
// #include <nlohmann/json.hpp>
#include <WiFi.h>
#include <FirebaseESP32.h>
#include "addons/TokenHelper.h"

using namespace std;
 // Set your Wi-Fi network credentials.
char* WIFI_SSID;
char* WIFI_PASSWORD;
char* USER_EMAIL;
char* USER_PASSWORD;
char* DEVICE_ID;

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
 vector<int> o_pins;
 vector<string> o_paths;
 vector<int> i_pins;
 vector<string> i_paths;

 // Define a callback function to handle changes in the Firebase data.
 void onDataChangeCallback(FirebaseData data) {
   Serial.println(data.stringData());
 }

 // Firebase

void init_firebase() {
   config.api_key = API_KEY;
   config.database_url = RTDBURL;
   auth.user.email = USER_EMAIL;
   auth.user.password = USER_PASSWORD;

   // Enable WiFi reconnection
   Firebase.reconnectWiFi(true);

   Firebase.begin(&config, &auth);
 }

void init_o_pins(){
  string typecatcher = "/state";
  string dev_id = DEVICE_ID;
  for(int i = 1 ; i <15 ; i++){
    string address =  "/" + dev_id + "/" + to_string(i) + typecatcher;
    if(Firebase.get(firebaseData,address)){
        o_pins.push_back(i);
        o_paths.push_back((address));
        // Serial.print(firebaseData.dataType());
        if (firebaseData.dataType() == "boolean") {
            digitalWrite(i,firebaseData.boolData());
        } else if (firebaseData.dataType() == "int" || firebaseData.dataType() == "float") {
            digitalWrite(i,firebaseData.floatData());
            Serial.print(i);
            Serial.println("int/float");
        }
    }
    else {
        Serial.println(firebaseData.errorReason());
    }
  }
}

void init_i_pins(){
  string typecatcher = "input/state";
  string dev_id = DEVICE_ID;
  for(int i = 1 ; i <15 ; i++){
    string address =  "/" + dev_id + "/" + to_string(i) + typecatcher;
    if(Firebase.get(firebaseData,address)){
        i_pins.push_back(i);
        i_paths.push_back((address));
    }
    else {
        Serial.println(firebaseData.errorReason());
    }
  }
}

void getOutputs(){
  for(int i=0 ; i<o_pins.size() ; i++){
          if(Firebase.get(firebaseData,o_paths[i])){
            Serial.println(firebaseData.dataType());
            if (firebaseData.dataType() == "boolean") {
                digitalWrite(o_pins[i],firebaseData.boolData());
                // Serial.print(o_pins[i]);
                // Serial.println(firebaseData.boolData());
            } 
            else {
                analogWrite(o_pins[i],firebaseData.floatData());
            }
          }
          else {
              Serial.println(firebaseData.errorReason());
          }
        }
}

void getInputs(){
  // for(int i=0 ; i<i_pins.size() ; i++)
    // Firebase.RTDB.setString(&fdbo,i_paths[i],digitalRead(i_pins[i]).to_string());
    string dev_id = DEVICE_ID;
    string address =  "/" + dev_id + "/" + to_string(13) + "/state";
    Firebase.RTDB.setString(&firebaseData,address,to_string(digitalRead(13)));
    Serial.println("ding");
}

// Wifi Module

void wificonnection_init() {
   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
   while (WiFi.status() != WL_CONNECTED) {
     delay(1000);
     Serial.println("Connecting to Wi-Fi...");
   }
   Serial.println("Connected");
 }


 void NDCS::begin(char* ssid, char* w_pass, char* email, char* u_pass, char* device_id) {
   WIFI_SSID = ssid;
   WIFI_PASSWORD = w_pass;
   USER_EMAIL = email;
   USER_PASSWORD = u_pass;
   DEVICE_ID = device_id;
  //  DEVICE_ID = "/"+DEVICE_ID+"/";
   wificonnection_init();
   init_firebase();
   init_o_pins();
  //  init_i_pins();
 }

 void NDCS::loop() {
   if (Firebase.ready()) {
        getOutputs();
        // getInputs();
    } else{
      Serial.println("Firebase is'nt ready yet");
    }
}
 //}