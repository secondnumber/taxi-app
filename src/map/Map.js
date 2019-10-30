import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoic2Vjb25kbnVtYmVyIiwiYSI6ImNrMmN6NnFiYjA2NjUzbmtlMTUxd3AwejkifQ.xJZidMdlQU2vHzzcvfHsNg"
});

export const MapRender = () => {
  return (
    <Map
      // eslint-disable-next-line react/style-prop-object
      style={"mapbox://styles/mapbox/streets-v10"}
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      center={[37.64063242871094,55.755155680474594]}
    >
    </Map>
  );
}
