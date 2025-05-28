import { Dimensions } from 'react-native';

const { width: devicewidth, height: deviceheight } = Dimensions.get('window');

const hp = percentage => {
    return (percentage * deviceheight) / 100;
}

const wp = percentage => {
    return (percentage * devicewidth) / 100;
}