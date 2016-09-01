const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(132, 132, 132, 0.5)'

    },
  content : {
    position        : 'fixed',
    top             : '50%',
    left            : '50%',
    height          : '400px',
    width           : '500px',
    transform       : 'translate(-50%, -50%)',
    border          : '1px solid #ccc',
    padding         : '20px',
    borderRadius    : 'none'
    }
};


export default ModalStyle;