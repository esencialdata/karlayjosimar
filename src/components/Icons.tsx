import { LucideProps } from "lucide-react";

export const IconCeremony = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Minimalist Church Icon */}
        <path d="M12 3v18" /> {/* Main vertical line/spire */}
        <path d="M4 21h16" /> {/* Ground line */}
        <path d="M12 7l-5 4v10h10v-10l-5-4z" /> {/* Main building structure */}
        <path d="M10 5h4" /> {/* Cross horizontal bar */}
        <path d="M12 3v4" /> {/* Cross vertical top part */}
    </svg>
);

export const IconReception = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Minimalist Check-in/Clipboard Icon */}
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" /> {/* Checkmark */}
    </svg>
);

export const IconDress = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Long Evening Gown Silhouette */}
        <path d="M8 2h8l-1 5 3 15H6L9 7l-1-5z" /> {/* Simplified gown shape */}
        <path d="M12 2v6" /> {/* Neckline/center detail */}
        <path d="M9 7c1.5 1 4.5 1 6 0" /> {/* Waist/bodice line */}
    </svg>
);

export const IconSuit = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Tuxedo/Suit Jacket */}
        <path d="M12 3L4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-8-3z" />
        <path d="M12 3v10" /> {/* Center line */}
        <path d="M12 13l-4-3" /> {/* Left Lapel */}
        <path d="M12 13l4-3" /> {/* Right Lapel */}
        <path d="M10 6l2 2 2-2" /> {/* Bow/Tie knot area */}
    </svg>
);

export const IconCouple = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M8 12a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4Z" />
        <path d="M16 12a4 4 0 0 1 4 4v4h-8v-4a4 4 0 0 1 4-4Z" />
    </svg>
);

export const IconToast = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M8 22h8" />
        <path d="M12 15v7" />
        <path d="M5.8 10.5C4.8 11.6 3.9 13.9 4 16h16c.1-2.1-.8-4.4-1.8-5.5" />
        <path d="M9 3v4" />
        <path d="M15 3v4" />
        <path d="M12 3v3" />
    </svg>
);

export const IconParty = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 20L12 4L6 20H18Z" />
        <circle cx="12" cy="3" r="1.5" />
        <path d="M10 12h4" />
        <path d="M8 16h8" />
    </svg>
);

export const IconUtensils = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
);

export const IconMusic = (props: LucideProps) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>
);
