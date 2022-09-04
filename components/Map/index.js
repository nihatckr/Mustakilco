import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { grayMap } from "../../styles/mapSytles";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 40.969829,
  lng: 29.109596,
};

const options = {
  styles: grayMap,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDj5zPTMU5cyiXzzl4r6Wvn0tn3e-TNtAc",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      /*    options={options} */
    >
      <>
        <Marker
          position={{
            lat: 40.969829,
            lng: 29.109596,
          }}
          icon={{
            url: "/svg/mustakil-icon.svg",
            scaledSize: new window.google.maps.Size(50, 50),
            fillColor: "#ffffff",
          }}
        />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
