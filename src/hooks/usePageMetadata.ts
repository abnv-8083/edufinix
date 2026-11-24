import { useEffect } from 'react';

export const usePageMetadata = (title: string, description?: string) => {
  useEffect(() => {
    // Update document title
    const fullTitle = `${title} | Edufinix Trading Academy`;
    document.title = fullTitle;

    // Update meta description if provided
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
};

