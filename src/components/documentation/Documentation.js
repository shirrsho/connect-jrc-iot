import React from 'react';
import './style.css'

function Documentation() {
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
          <p>This is the web dashboard part.</p>
          <h3>3.1 ESP32 Device Part:</h3>
          <p>This is the device part.</p>
        </section>
        <section id="examples">
          <h2>4. Examples</h2>
          <p>Provide examples of how to use your library here.</p>
        </section>
        <section id="api-reference">
          <h2>5. API Reference</h2>
          <p>Provide detailed documentation of each function and data type in your library here. Use a table of contents, code snippets, and other formatting techniques to make the information easy to read and navigate.</p>
        </section>
      </main>
    </div>
  </div>
);
}

export default Documentation;
