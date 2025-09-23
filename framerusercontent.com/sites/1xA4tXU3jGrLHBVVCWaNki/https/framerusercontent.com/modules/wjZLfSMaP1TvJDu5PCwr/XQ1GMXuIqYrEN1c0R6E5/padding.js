import {
    ControlType
} from "framer";
export function getPaddingStyle({
    padding = 0,
    paddingPerSide = false,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0
} = {}) {
    if (typeof padding === "string") {
        return {
            padding
        };
    }
    if (paddingPerSide) {
        return {
            paddingTop: paddingTop,
            paddingRight: paddingRight,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft
        };
    } else {
        return {
            paddingTop: padding,
            paddingRight: padding,
            paddingBottom: padding,
            paddingLeft: padding
        };
    }
}
export const paddingControls = {
    padding: {
        type: ControlType.Padding,
        defaultValue: "10px"
    }
};
export const __FramerMetadata__ = {
    "exports": {
        "paddingControls": {
            "type": "variable",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "getPaddingStyle": {
            "type": "function",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "PaddingOptions": {
            "type": "tsType",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}
//# sourceMappingURL=./padding.map