import { Dimensions } from 'react-native';

const { width: devicewidth, height: deviceheight } = Dimensions.get('window');

export const hp = percentage => {
    return (percentage * deviceheight) / 100;
}

export const wp = percentage => {
    return (percentage * devicewidth) / 100;
}