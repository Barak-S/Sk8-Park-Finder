import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ParkCard from '../components/ParkCard'
import { getDistance } from 'geolib';


class ParkContainer extends Component {

    sortLowtoHigh(parks){
        if (this.props.currentLocation.length === 2){
            parks.sort((a,b)=>{
                return getDistance({ latitude: this.props.currentLocation[0], longitude: this.props.currentLocation[1]}, { latitude: a.location.coordinates[0], longitude: a.location.coordinates[1]}) - getDistance({ latitude: this.props.currentLocation[0], longitude: this.props.currentLocation[1]}, { latitude: b.location.coordinates[0], longitude: b.location.coordinates[1]})
            })
        }
    }

    render() {
        this.sortLowtoHigh(this.props.parks)
        return (
            <Card style={{ marginBottom: 22, padding: 12, backgroundColor: "#343A40" }}>
                <div className="ParkCol">
                    <h4 style={{textAlign: "center", fontWeight: "600", color: "#fff"}}>Skate Spots Nearby</h4>
                    <hr/>
                        {this.props.parks.map(park=>{
                            return(
                                <ParkCard
                                    key={park._id}
                                    park={park}
                                    setPark={this.props.setPark}
                                    currentLocation={this.props.currentLocation}
                                />
                            )
                        })}
                </div>
            </Card>
        );
    }
}

export default ParkContainer;