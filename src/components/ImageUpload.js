import React, {Component} from 'react';
import {storage} from '../config/config';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    }
    );
  }
  
  

  render() {
    // const style = {
    //   height: '100vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // };
    return (
      <div className='container5'>
        <h1 className='h1'>Upload Image</h1>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>

        <div className='container'>
        <button onClick={this.handleUpload}>Upload</button>
        </div>
        
        <br/>
        <img src={this.state.url || 'https://static.thenounproject.com/png/340719-200.png'} alt="Uploaded images" height="200" width="200"/>
        {/* <img src={`${this.state.url}`} alt='img' height="200" width="180"/> */}
      </div>
    )
  }
}

export default ImageUpload;