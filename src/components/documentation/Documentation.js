import React from 'react';
import './style.css'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function Documentation() {
  const code = `

  #include "ndcs_esp32.h"
  
  char* wifi_ssid = "";               // put your wifi ssid in between the quotes      
  char* wifi_password = "";           // put your wifi password in between the quotes
  char* email = "";                   // put your email here
  char* password = "";                // put your account's password in between the quotes 
  char* device_id = "";
  
  NDCS Ndcs;
  
  void setup() {
      Ndcs.begin(wifi_ssid,wifi_password,email,password,device_id);
      //Your code here
  }
  
  void loop() {
      // Your code here
  }

          `;
  return (
    <div>
    <div className="wrapper">
      <nav>
        {/* <ul>
          <li><a className='nlink' href="#overview">Overview</a></li>
          <li><a className='nlink' href="#installation">Installation</a></li>
          <li><a className='nlink' href="#usage">Usage</a></li>
          <li><a className='nlink' href="#examples">Examples</a></li>
          <li><a className='nlink' href="#api-reference">API Reference</a></li>
        </ul> */}
      </nav>
      <main className='dmain'>
        <section id="overview">
          <h2>1. Overview</h2>
          <p>This software is intended to work with JRC Board. But additionally, it can handle any ESP32 based board.<br/>
          Naftech Device Controller System is an IoT solution to any device created based on the JRC board. The developer can operate the board and get data from the sensors direcrtly from and to this software. We have some controllers to operate the board and display section to display the states of different sensors.<br/>
          Three different types of widgets are available. The first one is switch, which can controll a boolean output device (e.g: led). The second one is a regulator, which can control analog output devices (e.g: speed of a fan). And the third one is a display widget, where the input signals can be handled. The developer can show any data coming from the device, including sensor's data (e,g: temperature)</p>
        </section>
        <section id="installation">
          <h2>2. Library Installation</h2>
          <p>The library provided with the software is an open source program. This library is operated using Google's 'Firebase'. So, Firebase Client for ESP32 is needed to be installed in the machine.<br/>
          Install firebase in your ESP32 based device using this documentation.<br/>
          Once you have firebase client installed, then you need to add the ndcs library to your project folder.<br/>
          <a>Download Library</a><br/>
          Download the library zip file from the above link and extract it into your source code's folder. Now you are ready to go!</p>
        </section>
        <section id="usage">
          <h2>3. Usage</h2>
          <p>After installing the libraries properly you can use the software system. Its clear that our system works in two parts. One is the library side part (for the ESP32 device), and the other one is the software (web dashboard) part.<br/>
          </p>
          <h3>3.1 Web Dashboard Part:</h3>
          <p>Go to http://protodash.jrcboard.com and create an account with your username, email and password. You can login to your account with your email and password.<br/>
          Now a dashboard will be shown. Initially it will have an Add Device button and an empty list of devices. The devices created with the Add Device button will e added to that list.<br/>
          You need to create a virtual device here, using the Add Device button to control the ESP32 based physical device.<br/>
          After creating the device click on its name. There will be another dashboard, from where you can add the controllers to the device.<br/>
          A code button will be there. By hovering on the button you will get a code snippet, which you need to add to your code of ESP32. Or, you can upload the following code to your ESP32 by adding the required information.<br/></p>
          <SyntaxHighlighter
              language="cpp"
              style={vscDarkPlus}
              className="text-to-copy"
              fontsize={28}
            >
              {code}
            </SyntaxHighlighter>
          <p>Code your ESP32 according to your need. After that, if you need to give your ESP32 some commands on some pins or if you need some data to be shown into the dashboard coming from some pins of the board, you can use the widgets given in the dashboard area.<br/>
          The Switch widget can send boolean information to a selected pin on the board. So, if you need to make a digital pin high/low you can do that using this switch by mapping it to the pin number.<br/>
          Similarly, For analog inputs to any pin you can use the regulator widget. The regulator widget will send data in percentage to a virtual-pin. You can calculate your needed number from this percentage to give a real pin any analog input.<br/>
          And if you want to display any data coming from your device, maybe its a sensor reading, maybe its a pin status, you can do so using the Display widget. First you map the Display widget to a virtual pin and the send the data to the virtual pin from your ESP32 device. That's it!</p>
          <h3>3.1 ESP32 Device Part:</h3>
          <p>After you have added the above code to your ESP32 device, you just need to use the functions of the class NDCS. There's an instance pre-created in the code snippet: Ndcs. Means, you can call the functions with this instance to send and receieve data from the software dashboard. Function details of how exactly to send/receieve data will be discussed in the next section.</p>
        </section>
        <section id="api-reference">
          <h2>4. API Reference</h2>
          <table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Parameters</th>
      <th>Return Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>begin</td>
      <td>wifi_ssid(char*), wifi_password(char*),<br/>email(char*), password(char*), device_id(char*)</td>
      <td>void</td>
      <td>To start the NDCS library.</td>
    </tr>
    <tr>
      <td>send</td>
      <td>virtual_pin(int),data(int)</td>
      <td>void</td>
      <td>To send integer data to the display widget through a virtual pin.</td>
    </tr>
    <tr>
      <td>send</td>
      <td>virtual_pin(int),data(float)</td>
      <td>void</td>
      <td>To send float data to the display widget through a virtual pin.</td>
    </tr>
    <tr>
      <td>send</td>
      <td>virtual_pin(int),data(char*)</td>
      <td>void</td>
      <td>To send string(char*) data to the display widget through a virtual pin.</td>
    </tr>
    <tr>
      <td>receieve</td>
      <td>virtual_pin(int)</td>
      <td>integer</td>
      <td>To receieve the percentile data coming from the regulator widget through a virtual pin.</td>
    </tr>
  </tbody>
</table>
          </section>
        <section id="examples">
          <h2>5. Examples</h2>
          <p>Provide examples of how to use your library here.</p>
        </section>
        
      </main>
    </div>
  </div>
);
}

export default Documentation;
