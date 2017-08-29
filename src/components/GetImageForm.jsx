import React, { Component } from 'react';
import '../style/App.css';
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'




export default class GetImageForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
      value: "",
    }

    this.fetchRoverImage = this.fetchRoverImage.bind(this)
    this.handleRover = this.handleRover.bind(this)
    this.handleCamera = this.handleCamera.bind(this)
    this.handleSol = this.handleSol.bind(this)


  }

  fetchRoverImage(e){
    e.preventDefault()
    console.log('worked');

    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    const API_KEY = "7vo1JRG9h9SfAJCUKvbQvXGhGiEPoJhH02jvk7DQ"
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl)
    .then(data => data.json())
    .then(data => {
      console.log(data.photos);
      this.setState({images: data.photos})
      console.log(this.state.images);
      // this.setState({characters: responseData.results});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });

  }

  handleRover(e){
    e.preventDefault()
    // this.setState({value: e.target.value})
    this.setState({rover: e.target.value})
  }
  handleCamera(e){
    e.preventDefault()
    // this.setState({value: })
    this.setState({camera: e.target.value})
  }
  handleSol(e){
    e.preventDefault()
    // this.setState({value: e.target.value})
    this.setState({sol: e.target.value})
  }


  render() {
    return (
      <div>
        <form>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" >
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="rover">
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000"/>
      <GetImageButton formSubmit={this.fetchRoverImage}/>
      </form>
      <ImageDisplay images={this.state.images}/>
      </div>


    );
  }
}
