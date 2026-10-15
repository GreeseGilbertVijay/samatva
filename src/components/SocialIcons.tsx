export const INSTAGRAM_URL = 'https://www.instagram.com/samatvaawareness/';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/samatva-awareness/posts/';

export const InstagramIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedinIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zM9.5 9.75h3.83v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.83 2.67 4.83 6.14v6.42h-4v-5.7c0-1.36-.02-3.1-1.89-3.1-1.9 0-2.18 1.48-2.18 3v5.8h-4v-12z" />
  </svg>
);

// Instagram's brand gradient, for round icon badges
export const INSTAGRAM_GRADIENT =
  'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]';
