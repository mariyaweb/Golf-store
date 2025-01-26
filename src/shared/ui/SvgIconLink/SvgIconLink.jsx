export function SvgIconLink({ className, Icon, link }) {
  return (
    <a
      href={link}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      <Icon />
    </a>
  );
}
