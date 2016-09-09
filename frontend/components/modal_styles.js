const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(36,36,36,0.80)'

    },
  content : {
    position        : 'fixed',
    top             : '50%',
    left            : '50%',
    height          : '300px',
    width           : '500px',
    transform       : 'translate(-50%, -50%)',
    border          : '1px solid #ccc',
    padding         : '20px',
    borderRadius    : 'none'
    }
};


export default ModalStyle;
