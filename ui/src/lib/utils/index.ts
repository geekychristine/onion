export const slugify = (text: string) => {
  // Replace special characters with dashes
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  // Remove trailing dashes
  return slug.replace(/-$/, '');
};
