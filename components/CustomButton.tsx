import { ButtonProps } from "@/types/type";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case 'primary':
            return 'bg-blue-500'; // Applies a blue background
        case 'secondary':
            return 'bg-gray-400'; // Applies a gray background
        case 'danger':
            return 'bg-red-500'; // Applies a red background for a "danger" style
        case 'outline':
            return "bg-transparent border-neutral-300 border-[0.5px]";
        default:
            return 'bg-[#0286ff]'; // Default background if no variant matches
    }
};
const getTextVariantStyle = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case 'primary':
            return 'text-black'; // Applies a blue background
        case 'secondary':
            return "text-gray-100";
        case 'danger':
            return 'text-red-100'; // Applies a gray background
        case 'danger':
            return 'text-green-100'; // Applies a red background for a "danger" style
        default:
            return 'text-white'; // Default background if no variant matches
    }
};

const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    className,
    ...props
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
            {...props}
        >
            {IconLeft && <IconLeft style={{ marginRight: 5 }} />}
            <Text style={{ color: textVariant }} className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
            {IconRight && <IconRight style={{ marginLeft: 5 }} />}
        </TouchableOpacity>
    );
};

export default CustomButton;
