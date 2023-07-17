import Swal from "sweetalert2";

const Alert = () => {
  const result = Swal.fire("site não disponível");
  return result;
};

export default Alert;
