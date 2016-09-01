import React from 'react';
import HomeHeaderContainer from '../home_header/home_header_container.jsx';
import Modal from 'react-modal';
import ModalStyle from '../modal_styles';
import CreateAlbumContainer from '../create_album/create_album_container.jsx';

class AlbumsIndex extends React.Component {
  constructor(props){
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state= {
     modalOpen: false,
     form: "createAlbum",
     style: ModalStyle
   };
  }

  componentDidMount(){
    // e.preventDefault();
    this.props.fetchAlbumsForUser(this.props.currentUser);
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  render() {
    const albumLines = [];
    for (let id in this.props.albums) {
      albumLines.push(
        <li key={id}>{this.props.albums[id].title}</li>
      );
    }

    return(
      <div className="albums-page">
        <HomeHeaderContainer />
        <div className="albums-header" >
          <h2>Albums</h2>
          <button className="new-button" id="new-album"
            onClick={this.openModal}>+ New Album</button>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={this.state.style}>

            <CreateAlbumContainer closeModal={this.closeModal()}/>
            <button onClick={this.closeModal}>Close</button>
          </Modal>

        </div>
        <div className="ablums-index-content">
          <ul>
            {albumLines}
          </ul>
        </div>
      </div>
    );
  }
}

export default AlbumsIndex;
