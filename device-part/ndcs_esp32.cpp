#include "ndcs_esp32.h"
#include<bits/stdc++.h>
// #include <nlohmann/json.hpp>
#include <WiFi.h>
#include <FirebaseESP32.h>
#include "addons/TokenHelper.h"
TaskHandle_t task1Handle = NULL;
TaskHandle_t task2Handle = NULL;

using namespace std;
 // Set your Wi-Fi network credentials.
char* WIFI_SSID;
char* WIFI_PASSWORD;
char* USER_EMAIL;
char* USER_PASSWORD;
char* DEVICE_ID;

 // Set your Firebase project credentials.
 #define FIREBASE_HOST "connect-jrc-iot.firebaseio.com"
 #define API_KEY "AIzaSyBKK46Pt3QXzfecY-g10NlxYOTAZ_zXE5k"
 #define RTDBURL "https://connect-jrc-iot-default-rtdb.asia-southeast1.firebasedatabase.app/"
 #define DATA_PATH "/d3tnjeA7JSAKVHNuOmRg/input/13"
 // #define DEVICE_ID ""  

 // Define a Firebase data object.

//  FirebaseJson json;
//  using json = nlohmann::json;
 FirebaseAuth auth;
 FirebaseConfig config;

 vector<int> gpio_pins = {18, 19, 23,26, 5, 13, 14, 15, 16, 17, 4, 2, 0};
//  vector<string> o_paths;
//  vector<int> i_pins;
//  vector<string> i_paths;

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

// void init_o_pins(){
//   string typecatcher = "/state";
//   string dev_id = DEVICE_ID;
//   for(int i = 1 ; i <36 ; i++){
//     string address =  "/" + dev_id + "/output/" + to_string(i) + typecatcher;
//     if(Firebase.get(firebaseData,address)){
//         o_pins.push_back(i);
//         o_paths.push_back((address));
//         // Serial.print(firebaseData.dataType());
//         if (firebaseData.dataType() == "boolean") {
//             digitalWrite(i,firebaseData.boolData());
//         } else if (firebaseData.dataType() == "int" || firebaseData.dataType() == "float") {
//             digitalWrite(i,firebaseData.floatData());
//             Serial.print(i);
//             Serial.println("int/float");
//         }
//     }
//     else {
//         Serial.println(firebaseData.errorReason());
//     }
//   }
// }

// void init_i_pins(){
//   string typecatcher = "/state";
//   string dev_id = DEVICE_ID;
//   for(int i = 1 ; i <36 ; i++){
//     string address =  "/" + dev_id + "/input/" + "/" + to_string(i) + typecatcher;
//     if(Firebase.get(firebaseData,address)){
//         i_pins.push_back(i);
//         i_paths.push_back((address));
//     }
//     else {
//         Serial.println(firebaseData.errorReason());
//     }
//   }
// }

// void getOutputs(){
//   for(int i=0 ; i<35 ; i++){
//     Serial.println(i);
//           if(Firebase.get(firebaseData,o_paths[i])){
//             if (firebaseData.dataType() == "boolean") {
//                 digitalWrite(o_pins[i],firebaseData.boolData());
//                 // Serial.print(o_pins[i]);
//                 // Serial.println(firebaseData.boolData());
//             } 
//             else {
//                 analogWrite(o_pins[i],firebaseData.floatData());
//             }
//           }
//           else {
//               Serial.println(firebaseData.errorReason());
//           }
//         }
//         Serial.println("output");
// }

// void getInputs(){
//   for(int i=0 ; i<i_pins.size() ; i++)
//     Firebase.RTDB.setString(&firebaseData,i_paths[i],to_string(digitalRead(i_pins[i])));
//     // string dev_id = DEVICE_ID;
//     // string address =  "/" + dev_id + "/" + to_string(13) + "/state";
//     // Firebase.RTDB.setString(&firebaseData,address,to_string(digitalRead(13)));
//     Serial.println("ding");
// }

// Wifi Module

void wificonnection_init() {
   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
   while (WiFi.status() != WL_CONNECTED) {
     delay(1000);
     Serial.println("Connecting to Wi-Fi...");
   }
   Serial.println("Connected");
 }

void getOutputData(){
   FirebaseData firebaseData;
    FirebaseJson json;
    
    string path = "";
    string dev_id = DEVICE_ID;
    
    path = "/"+ dev_id +"/output";

    if(Firebase.getJSON(firebaseData, path, &json)){
      // Serial.println("Json Data Received");
    }
    else {
      Serial.println("Failed to retrieve data from Firebase:");
      // Serial.println(Firebase.error());
      return;
    }
    
    // Serial.println(json.valueAt(0).value.c_str());

    FirebaseJsonData result;

    for(int i : gpio_pins){
      path = to_string(i);

      json.get(result, path);
      // Serial.println(result.to<String>());
      if (result.success)
      {
        json.get(result, path+"/datatype");
        if(result.to<String>()=="bool"){
          json.get(result, path+"/state");
          digitalWrite(i,result.to<bool>());
          Serial.println(i);
        } else if(result.to<String>()=="int"||result.to<String>()=="float"){
          json.get(result, path+"/state");
          analogWrite(i,result.to<float>());
          Serial.println(i);
        }
        // Print type of parsed data e.g string, int, double, bool, object, array, null and undefined
        // Serial.println(result.type);
        // Print its content e.g.string, int, double, bool whereas object, array and null also can access as string
        // Serial.println(result.to<int>());
        // Serial.println(result.to<int>());
        // Serial.println(result.to<bool>());
        // Serial.println(result.to<float>());
        // Serial.println(result.to<double>());
      }
    }
}

void getInputData(){
   FirebaseData firebaseData;
    FirebaseJson json;
    
    string path = "";
    string dev_id = DEVICE_ID;
    
    path = "/"+ dev_id +"/input/";


    for(int i : gpio_pins){
      string pinpath = to_string(i);
      pinpath += "/state";

      // json.get(result, path);
      // Serial.println(result.success);
      // if (result.success)
      // {

  // Add data to the FirebaseJson object
        json.set(pinpath, to_string(digitalRead(i)));
    }
        String jsonData;
        json.toString(jsonData);

        // Send the JSON data to Firebase
        if(Firebase.updateNode(firebaseData, path, json)) Serial.println("pushed");
        else Serial.println(firebaseData.errorReason());
        Serial.println(jsonData);        
        // string setat = "/"+ dev_id +"/input/" + to_string(i) + "/state";
        // Firebase.RTDB.setString(&firebaseData,setat,to_string(digitalRead(i)));
        // Print type of parsed data e.g string, int, double, bool, object, array, null and undefined
        // Serial.println(result.type);
        // Print its content e.g.string, int, double, bool whereas object, array and null also can access as string
        // Serial.println(digitalRead(i));
        // Serial.println(result.to<int>());
        // Serial.println(result.to<bool>());
        // Serial.println(result.to<float>());
        // Serial.println(result.to<double>());
      // }
    // }
}

void task1(void *parameter) {
  while (1) {
    if (Firebase.ready()) {
        getOutputData();
        // delay(100);
        // getInputData();
        // delay(100);
    } else{
      Serial.println("Firebase is'nt ready yet");
    }
    delay(10);
  }
}

void task2(void *parameter) {
  while (1) {
    if (Firebase.ready()) {
        getInputData();
        // delay(100);
    } else{
      Serial.println("Firebase is'nt ready yet");
    }
    delay(10);
  }
}
 void NDCS::begin(char* ssid, char* w_pass, char* email, char* u_pass, char* device_id) {
   WIFI_SSID = ssid;
   WIFI_PASSWORD = w_pass;
   USER_EMAIL = email;
   USER_PASSWORD = u_pass;
   DEVICE_ID = device_id;

   wificonnection_init();
   init_firebase();
   xTaskCreatePinnedToCore(task1, "Task 1", 10000, NULL, 1, &task1Handle, 0);
   xTaskCreatePinnedToCore(task2, "Task 2", 10000, NULL, 1, &task2Handle, 1);
 }

//  void NDCS::loop() {
//    if (Firebase.ready()) {
//         getOutputs();
//         getInputs();
//     } else{
//       Serial.println("Firebase is'nt ready yet");
//     }
// }
 //}