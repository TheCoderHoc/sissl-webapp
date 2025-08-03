interface IProps {
    strokeColor?: string;
}

export default function EventAnalyticsIcon({ strokeColor }: IProps) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.75 15.75H7.5C5.025 15.75 3.7875 15.75 3.01875 14.9813C2.25 14.2125 2.25 12.975 2.25 10.5V2.25M5.25 3H6M5.25 5.25H8.25"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.75 15C4.5525 13.5398 5.64225 9.76425 7.7295 9.76425C9.1725 9.76425 9.546 11.604 10.9605 11.604C13.3928 11.604 13.0403 7.5 15.75 7.5"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
