import { Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const CONTENT_WIDTH = WINDOW_WIDTH - 20;

export default {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    CONTENT_WIDTH,
};