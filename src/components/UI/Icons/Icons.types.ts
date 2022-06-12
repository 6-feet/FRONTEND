import Colors from '../variables/colors';

interface IIcon {
  fill?: Colors;
  stroke?: Colors;
  classes?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default IIcon;
