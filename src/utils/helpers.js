export const capitalize = (text = "") => {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
};



export const createSlug = (
  text = ""
) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};



export const truncateText = (
  text = "",
  limit = 100
) => {
  if (!text) return "";

  return text.length > limit
    ? `${text.slice(
        0,
        limit
      )}...`
    : text;
};



export const scrollToSection = (
  id
) => {
  const element =
    document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};



export const getStars = (
  rating = 0
) => {
  return Array.from(
    { length: rating },
    (_, index) => index + 1
  );
};



export const formatDate = (
  dateString
) => {
  return new Date(
    dateString
  ).toLocaleDateString(
    "en-IN",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
};



export const isMobile = () => {
  if (
    typeof window === "undefined"
  )
    return false;

  return window.innerWidth < 768;
};



export const imageFallback =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200";



export const handleImageError = (
  event
) => {
  event.target.src =
    imageFallback;
};



export const generateId = () => {
  return crypto
    .randomUUID()
    .slice(0, 8);
};