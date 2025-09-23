import {
    ControlType
} from "framer";
export function getRadiusStyle({
    radius = 0,
    radiusPerCorner = false,
    radiusTopLeft = 0,
    radiusTopRight = 0,
    radiusBottomRight = 0,
    radiusBottomLeft = 0
} = {}) {
    if (typeof radius === "string") {
        return {
            borderRadius: radius
        };
    }
    const result = {};
    if (radiusPerCorner) {
        result.borderTopLeftRadius = radiusTopLeft;
        result.borderTopRightRadius = radiusTopRight;
        result.borderBottomRightRadius = radiusBottomRight;
        result.borderBottomLeftRadius = radiusBottomLeft;
    } else {
        result.borderTopLeftRadius = radius;
        result.borderTopRightRadius = radius;
        result.borderBottomRightRadius = radius;
        result.borderBottomLeftRadius = radius;
    }
    return result;
}
export const radiusControls = {
    radius: {
        type: ControlType.BorderRadius,
        defaultValue: "10px"
    }
};
export const __FramerMetadata__ = {
    "exports": {
        "getRadiusStyle": {
            "type": "function",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "radiusControls": {
            "type": "variable",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "RadiusOptions": {
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
//# sourceMappingURL=./radius.map