import Button from '../components/UI/Button/Button';
import ToggleSwitch from '../components/UI/ToggleSwitch/ToggleSwitch';
import Input from '../components/UI/Inputs/Input';
import Folder from '../components/UI/Icons/Folder';
import InputPassword from '../components/UI/Inputs/InputPaswword/InputPassword';
import { Autocomplete } from '../components/UI/Inputs/Input.types';

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
      <Button onClick={click}>click me</Button>
      <ToggleSwitch id="switch" onToggle={changeValue} />
      <Input id="input" required={false} value="Name" placeholder="enter your name" onChange={changeInput} IconComponent={Folder}/>
      <InputPassword id='inputPassword' onChange={changeInput} show={true} autocomplete={Autocomplete.off}/>
    </div>
  );
};

export default Home;
