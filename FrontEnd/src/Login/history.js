import { useHistory } from 'react-router-dom';

function Navigation(props) {
  const history = useHistory();

  const goToHome = path => {
    history.push(path);
  };

  return (
    <button onClick={() => goToHome('/Home')}>Home</button>
  );
}

export default Navigation;