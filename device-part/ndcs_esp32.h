#ifndef NDCS_ESP32_H
#define NDCS_ESP32_H
#include <Arduino.h>
class NDCS {
  public:
    void begin(char*,char*,char*);
    void loop();
};

#endif
