export default function ImageSequence({ frames, alt, className = '', imageClassName = '' }) {
  return (
    <div className={`image-sequence-float relative aspect-square overflow-hidden ${className}`}>
      {frames.map((frame, index) => (
        <img
          key={frame}
          src={frame}
          alt={index === 0 ? alt : ''}
          aria-hidden={index === 0 ? undefined : 'true'}
          className={`image-sequence-frame absolute inset-0 h-full w-full object-contain ${imageClassName}`}
          style={{ animationDelay: `${index * 2}s` }}
        />
      ))}
    </div>
  );
}
