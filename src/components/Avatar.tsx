type AvatarStoryProps = {
  src: string;
  alt?: string;
  size?: number; // px
  className?: string;
};

function Avatar({ src, alt = 'avatar', size = 64, className = '' }: AvatarStoryProps) {
  return (
    <div className={`flex items-center justify-center rounded-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

export default Avatar;
