import Button from '../components/UI/Button/Button';
import ToggleSwitch from '../components/UI/ToggleSwitch/ToggleSwitch';

const Home = (): JSX.Element => {
    const changeValue = (value: boolean) => {
        console.log(value);
    }

    const click = () => {
        console.log('click');
    }
  return(
      <div>
          Hello, NextJS!
          <Button callback={click}>click me</Button>
          <ToggleSwitch id='switch' callback={changeValue}/>
      </div>
  )
};

export default Home;
