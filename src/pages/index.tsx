import Button from '../components/UI/Button/Button';
import ToggleSwitch from '../components/UI/ToggleSwitch/ToggleSwitch';
import TextInput from '../components/UI/TextInput/TextInput';

const Home = (): JSX.Element => {
  const changeValue = (value: boolean) => {
    console.log(value);
  };

  const click = () => {
    console.log('click');
  };

  const changeInput = (inputValue: string) => {
    console.log(inputValue);
  };

  return (
    <div>
      Hello, NextJS!
      <Button callback={click}>click me</Button>
      <ToggleSwitch id="switch" callback={changeValue} />
      <TextInput id="input" required={false} value="Name" placeholder="enter your name" callback={changeInput} />
    </div>
  );
};

export default Home;
