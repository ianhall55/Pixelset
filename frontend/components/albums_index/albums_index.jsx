import React from 'react';
import HomeHeaderContainer from '../home_header/home_header_container.jsx';
import Modal from 'react-modal';
import ModalStyle from '../modal_styles';
import CreateAlbumContainer from '../create_album_form/create_album_container.jsx';
import UpdateAlbumContainer from '../update_album_form/update_album_form_container.jsx';
import AlbumIndexItem from '../album_index_items/album_index_item.jsx';

class AlbumsIndex extends React.Component {
  constructor(props){
    super(props);

    this.handleDestroy = this.handleDestroy.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
     modalOpen: false,
     style: ModalStyle
   };
  }

  componentDidMount(){
    this.props.fetchAlbumsForUser(this.props.currentUser);
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  handleDestroy(e) {
    e.preventDefault();
    debugger;
    const album = e.currentTarget();
    this.destroyAlbum(album);
  }

  render() {
    const albumLines = [];
    for (let id in this.props.albums) {
      albumLines.push(
        <AlbumIndexItem key={id} album={this.props.albums[id]}
          destroyAlbum={this.props.destroyAlbum} />
      );
    }

    return(

      <div className="albums-page">
        <HomeHeaderContainer />

        <section className='album-index-section'>
          <div className="albums-header" >
            <h2>Albums</h2>
            <button className="new-button" id="new-album"
              onClick={this.openModal}>+ New Album</button>
          </div>

          <div className="albums-index-content">
            <ul className="album-index-item">
              {albumLines}
            </ul>
          </div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={this.state.style}>

            <CreateAlbumContainer closeModal={this.closeModal}/>
            <button onClick={this.closeModal}>Close</button>
          </Modal>
        </section>
      </div>
    );
  }
}

export default AlbumsIndex;
