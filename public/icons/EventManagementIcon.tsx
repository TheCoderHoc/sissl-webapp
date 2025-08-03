interface IProps {
    strokeColor?: string;
}

export default function EventManagementIcon({ strokeColor }: IProps) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.75 9H1.5M16.5 9H14.25M9 14.25V16.5M9 1.5V3.75M8.14125 6.66825C8.53725 6.22275 8.736 6 9 6C9.264 6 9.46275 6.22275 9.85875 6.66825L10.8338 7.764C11.3618 8.3565 11.625 8.65275 11.625 9C11.625 9.34725 11.3618 9.6435 10.8338 10.236L9.85875 11.331C9.46275 11.7773 9.264 12 9 12C8.736 12 8.53725 11.7773 8.14125 11.3318L7.16625 10.236C6.639 9.6435 6.375 9.34725 6.375 9C6.375 8.65275 6.63825 8.3565 7.16625 7.764L8.14125 6.66825Z"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
