import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "NgLocation";

  latitude: number = 0;
  longitude: number = 0;
  accuracy: number = 0;
  altitude: number = 0;
  altitudeAccuracy: number = 0;
  heading: number = 0;
  speed: number = 0;

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.accuracy = position.coords.accuracy;
        this.altitude = position.coords.altitude;
        this.altitudeAccuracy = position.coords.altitudeAccuracy;
        this.heading = position.coords.heading;
        this.speed = position.coords.speed;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
