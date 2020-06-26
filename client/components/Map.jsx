import { Map as LeafletMap, LayersControl, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'

const { BaseLayer, Overlay } = LayersControl

export class Map extends React.Component {
  render () {
    const position = [this.props.data.lat, this.props.data.long]
    console.log('little and friday lat', this.props.data.lat)
    const zoom = 20
    // console.log(this.props.data.lat)
    return (
      <div>
        <div className="leaflet-container fontchange" id="mapid">

          <LeafletMap center={position} zoom={zoom}>
            <LayersControl position="topright">
              <BaseLayer checked name="OpenStreetMap.HOT">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                />

              </BaseLayer>
              <BaseLayer name="OpenStreetMap.BlackAndWhite">
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                />
              </BaseLayer>
              <Marker position={position}>
                <Popup>
                  {this.props.data.name}
                </Popup>

              </Marker>
            </LayersControl>
          </LeafletMap>
        </div>
      </div>
    )
  }
}
export default Map
