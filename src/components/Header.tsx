interface HeaderProps  {
    title: string
}

/**
 * Header Component
 * @component
 *
 * @param {string} props.title - The title to be displayed in the header.
 *
 * @example
 * // Example usage of Header component
 * <Header title="Page Title" />
 */
const Header = ({ title }:HeaderProps) => {
  return (
    // Header container
    <header className='header'>
      {/* Title heading */}
      <h1 className='text-3xl'>{title}</h1>
    </header>
  );
};

/**
 * @typedef {Object} HeaderProps
 * @property {string} title - The title to be displayed in the header.
 */
export default Header;
